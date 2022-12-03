
/**
 * 
 * @author Patrick Atta-Baah 
 * @file MainView.js
 * @purpose main activity of the webapp, handles authentication state, backend sessions and etc(Parent component)
 * 
 */


import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import { Box, Stack } from '@mui/material'

import DisheszAppBar from '../components/menu/DisheszAppBar'
import ViewHandler from './ViewHandler'

import UserAccount from '../session/UserAccount'



const MainView = () => { 

    const userAccount = new UserAccount() 
    const authStatus = userAccount.isAuthenticated() 
    
    return ( 
        <BrowserRouter>
            <Box 
                display="flex"
                justifyContent="center" 
                alignItems="center"
                maxWidth="100%">

                    <Stack 
                        mt={10}
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