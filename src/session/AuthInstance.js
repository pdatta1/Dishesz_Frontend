/***
 * 
 * @fileName AuthInstance.js
 * @author Patrick Atta-Baah 
*/

import axios from 'axios'
require('dotenv').config() 






class AuthInstance{ 


    constructor(){ 
        /**
         * 
         * Initialize the core variables for AuthInstance Class
         * @variable backendURI retrieve the uri of the backend from the environment variable
         * @variable accessToken retrieve the access token of the user from local storage
         * @variable refreshToken retrieve the refresh token of the user from local storage
         * @variable authInstance consists of the axios instance that talk to the backend server
         * @variable headers consists of the headers needed to talk to the backend server
         */

        this.backendURI = "https://www.scrapnc.com/"
        this.accessToken = localStorage.getItem('access')
        this.refreshToken = localStorage.getItem('access')
        this.refreshingToken = null 

        this.headers = {
            'Content-Type': 'application/json',
        }

        // create auth instance with baseURL and headers 
        this.authInstance = axios.create({ 
            baseURL: this.backendURI,
            headers: this.headers
        })

        // interceptor request to handle access token 
        this.authInstance.interceptors.request.use( (config) => {
            const token = this.getLocalAccessToken() 
            if(token){
                config.headers['Authorization'] = "Bearer " + token 
            }
            return config 
        }, (error) => {
            return Promise.reject(error)
        })

        // interceptor response to refresh token 
        this.authInstance.interceptors.response.use( (response) => {
            return response 
        }, async (error) => {
            const originalConfig = error.config 
            if(error.response){
                if(error.response.status === 401 && !originalConfig._retry){
                    originalConfig._retry = true 
                    try{
                        this.refreshingToken = this.refreshingToken ? this.refreshingToken : this.refreshToken() 
                        const rs = await this.refreshingToken
                        if(rs.data.access){
                            const { access } = rs.data 
                            localStorage.setItem('access', access)
                            this.authInstance.defaults.headers.common['Authorization'] = "Bearer " + access 
                        }
                       
                        return this.authInstance(originalConfig) 
                    }catch(_error){
                        if(_error.response && _error.response.data){
                            return Promise.reject(_error.response.data)
                        }
                        return Promise.reject(_error)
                    }
                }
        
                if(error.response.status === 403 && error.response.data){
                    return Promise.reject(error.response.data) 
                }
            }
        
            return Promise.reject(error)
        
        
        })        
    }


    getLocalAccessToken = () => { 
        /**
         * @purpose get saved local access Token
         * @param None 
         * @return accessToken
         */
        if(this.accessToken){ 
            return this.accessToken
        }

        return null 
    }

    getLocalRefreshToken = () => { 

        /***
         * @purpose get saved refresh token
         * @param None
         * @return refreshToken
         */
        if(this.refreshToken){ 
            return this.refreshToken
        }

        return null 
    }


    addAuthHeaders = ( header_type, header_value ) => { 
        /**
         * @purpose add headers to auth instance 
         * @param header_type: type of header to be added as dict key
         * @param header_value: value of the header type as dict value 
         */
        this.headers[header_type] = header_value
    }

    removeAuthHeaders = ( header_type) => { 
        /**
         * 
         * @purpose remove header from auth instance header
         * @param header_type: header type to be remove 
         */
        if(this.headers.hasOwnProperty(header_type)){ 
            delete this.headers[header_type]
        }
    }

    refreshToken = async () => { 
        /***
         * @purpose refresh user token from backend
         * @param None 
         * @returns response data from refresh token api
         */
        return await this.authInstance.post('users/refresh/', {
            refresh: this.getLocalRefreshToken()
        })
    }


}

export default AuthInstance 