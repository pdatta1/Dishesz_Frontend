
/**
 * 
 * @author Patrick Atta-Baah 
 * @file MainView.js
 * @purpose main activity of the webapp, handles authentication state, backend sessions and etc(Parent component)
 * 
 */


import React, { useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { Box, Stack } from '@mui/material'

import DisheszAppBar from '../components/menu/DisheszAppBar'
import ViewHandler from './ViewHandler'

import UserAccount from '../session/UserAccount'
import EstablishInterests from './signup/EstablishInterests'



const MainView = () => { 
    /**
     * @purpose MainView class sits at the top of the webapp
     *          It's handle the user authentication status and wraps neccessary components 
     *          based on the the user auth status
     * @returns 
     *          Returns the Main UI components that define the webapp
     */


    const [ authStatus, setAuthStatus ] = useState(false)
    const [ interestPicked, setInterestPicked ] = useState(false)

    useEffect(() => { 

 
        const userAccount = new UserAccount() 

        const checkAuth = setInterval(() => { 

                const account = new UserAccount() 
                const status = account.isAuthenticated() 
                setAuthStatus(status)
            
        }, 1)

    
        const checkProfileStatus = async () => { 

            console.log('Checking Interest......')

            if( authStatus ){
                const response = await userAccount.isInterestPicked()
                await userAccount.loadUserData() 
                setInterestPicked(response)
            }
        }

        const _loadApplicationComponents = async () => { 

            await checkProfileStatus() 
            
        }

        _loadApplicationComponents() 

        return () => clearInterval(checkAuth)
    
        



    

    }, [authStatus]) 


    console.log(authStatus)
    console.log('Interest Picked', interestPicked)

    if ( authStatus && !interestPicked ){ 
        return ( 
            <EstablishInterests/>
        )
    }
    
    return ( 
        <BrowserRouter>
            <Box 
                display="flex"
                justifyContent="center" 
                alignItems="center"
                maxWidth="100%">

                    <Stack 
                        mt={{xs: 5, sm: 5, md: 8}}
                        direction="column"
                        spacing={2} 
                        justifyContent="center"
                        alignItems="center">

                            <DisheszAppBar
                                isAuthenticated={authStatus}/>

                            <ViewHandler
                                isAuthenticated={authStatus}/>

                    </Stack>
            </Box>
        </BrowserRouter>

    )
}

export default MainView