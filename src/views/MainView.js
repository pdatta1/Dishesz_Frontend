
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



const MainView = () => { 
    /**
     * @purpose MainView class sits at the top of the webapp
     *          It's handle the user authentication status and wraps neccessary components 
     *          based on the the user auth status
     * @returns 
     *          Returns the Main UI components that define the webapp
     */


    const [ authStatus, setAuthStatus ] = useState(false)

    useEffect(() => { 


        const checkAuth = setInterval(() => { 
                const userAccount = new UserAccount() 
                const status = userAccount.isAuthenticated() 
                setAuthStatus(status)

        }, 10)

        return () => clearInterval(checkAuth)
    



    }, []) 


    console.log(authStatus)
    
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