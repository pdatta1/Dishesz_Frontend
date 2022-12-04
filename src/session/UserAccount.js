/**
 * 
 * @author Patrick Atta-Baah 
 * @file UserAccount.js
 * @purpose This file maintain the user account
 * 
 */

import AuthInstance from "./AuthInstance"


class UserAccount extends AuthInstance{ 

    /**
     * 
     * @purpose UserAccount class handle interactions with backend auth user data
     *          by extending AuthInstance class which hold the user access token for restricted apis
     * 
     */

        constructor() { 
            super() 

            this.error = false 
        }

        /**
         * 
         * Account Creation && Signin
         * 
         */

        signInUser = async ( credentials ) => { 
            /**
             * @purpose sign in user by posting user credentials to access token api,
             *          if authinstance post status returns 200 Ok along with response data(tokens)
             *          get access and refresh from response data(token) and save to localStorage
             * 
             * @param credentials: dictionary consisting of username && password of user
             */
            const signData = await this.authInstance.post('users/access/', credentials)
            if(signData){ 
                const { access, refresh } = signData.data 
                this.saveAccessToken(access)
                this.saveRefreshToken(refresh)
            }
        }




        createUser = async ( username, emailAddress, password, passwordAgain ) => { 
            /**
             * @purpose create user account by post to /users/create_user/ api
             * @param username: username of user
             * @param emailAddress: Email Address of user with right validations 
             * @param password: first password input value 
             * @param passwordAgain: second password input value 
             */

            let requestData = { 
                username: username,
                email: emailAddress, 
                password: password, 
                passwordAgain: passwordAgain
            }
            return await this.authInstance.post('users/create_user/', requestData)
        }


        isAuthenticated = () => { 

            const token = this.getLocalAccessToken() 
            if(token){ 
                return true 
            }
            return false 
            
        }



         /**
         * 
         * Email && Password Actions 
         * 
         */

        changeEmailAddress = async ( emailAddress ) => { 
            /**
             * @purpose Change Authenticated User EmailAddress
             * @param emailAddress: emailAddress to be changed
             */

            if(!this.isAuthenticated()){ 
                this.error = true 
                return 
            }

            let requestData = { 
                email: emailAddress
            }
            return await this.authInstance.post('users/change_email/', requestData)
        }

        handleForgottenPassword = async ( emailAddress ) => { 
            /** 
             * @purpose Sends Reset Password link to Authenticated User Email
             * @purpose emailAddress: email address to be sent
             */

            let requestData = { 
                email: emailAddress
            }

            return await this.authInstance.post('users/handle_forgot_password/', requestData)
        }

        resetPassword = async ( password, passwordAgain) => { 
            /**
             * @purpose reset user password by retrieving the uid and token data from email request link
             * @param password: first password input value 
             * @param passwordAgain: second password input value 
             */
            
            let urlString = window.location.href 
            let uri = new URL(urlString)

            let token = uri.searchParams.get('token')
            let uid = uri.searchParams.get('uid')

            let requestData = { 
                uid: uid,
                token: token, 
                password: password, 
                passwordAgain: passwordAgain
            }
            return await this.authInstance.post('users/reset_password/', requestData)
        }

        verifyEmail = async () => { 
            /**
             * @purpose verify user email address after account creation
             * @param None 
             */

            let urlString = window.location.href 
            let uri = new URL(urlString)

            let uid = uri.searchParams.get('uid')
            let token = uri.searchParams.get('token')

            let requestData = { 
                uid: uid, 
                token: token
            }

            return await this.authInstance.post('users/verify/', requestData)
        }

        /**
         * 
         * Following/Followers
         * 
         */

        follow = async ( userToFollow ) => { 
            /**
             * @purpose Follow a dishesz user by username
             * @param userToFollow: username to be followed
             */
            let requestData = { 
                username: userToFollow
            }
            return await this.authInstance.post('users/follow_user/', requestData)
        }

        unFollow = async ( userToUnfollow ) => { 
            /**
             * @purpose UnFollow a dishesz user by username 
             * @param userToUnfollow: username to be unfollow
             */

            let requestData = { 
                username: userToUnfollow
            }
            return await this.authInstance.post('users/unfollow_user/', requestData)
        }

        getFollowers = async () => { 
            /**
             * @purpose get All User Followers
             * @returns response data  
             * @params None 
             */
            return await this.authInstance.get('users/user_followers/')
        }

        getFollowings = async () => { 
            /**
             * @purpose get All User Followings
             * @returns response data 
             * @params None 
             */
            return await this.authInstance.get('users/user_followings/')
        }


        /**
         * 
         * Tokens 
         * 
         */
        saveAccessToken = ( access ) => { 
            /**
             * @purpose save Access Token to localStorage
             * @param access: accessToken to be saved 
             */
            localStorage.setItem('access', access)
        }

        saveRefreshToken = ( refresh ) => { 
            /**
             * @purpose save Refresh Token to localStorage
             * @param refresh: refreshToken to be saved
             */
            localStorage.setItem('refresh', refresh)
        }

        /**
         * 
         * Account Termination
         * 
         */

        deleteAccount = async () => { 
            /**
             * @purpose delete user account if authenticated
             * @param None 
             */
            if(!this.isAuthenticated()){ 
                this.error = true  
                return 
            }
            return await this.authInstance.post('users/delete_account/')
        }
}

export default UserAccount