
/**
 * 
 * @author Patrick Atta-Baah 
 * @purpose ViewHandler.js maintain the routing system of the webapp
 * 
 */


import React from 'react'

import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import ExploreView from './explore_view/ExploreView'
import LoginView from './login/LoginView'
import SignupView from './signup/SignupView'

const ViewHandler = ({ isAuthenticated }) => { 

    /**
     * 
     * @purpose ViewHandler class takes care of the routing system within the webapp,
     *          it detects the user authentication status and allow access to certain routes
     *
     * @param isAuthenticated Boolean variable that indicates whether a user is authenticated or not
     * 
     * @returns Web UI based on authentication status
     */

    if(!isAuthenticated){

        return ( 
            <Box 
                mt={25}
                display="flex"
                justifyContent="center"
                alignItems="center"
                maxWidth="100%">

                    <Routes>
                        <Route exact path="/" element={<ExploreView/>}/>
                        <Route path="/login" element={<LoginView/>}/>
                        <Route path="/signup" element={<SignupView/>}/>
                    </Routes>

            </Box>

        )

    }

    return ( 
        <Box 
            mt={25}
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxWidth="100%">

        </Box>
    )
}

export default ViewHandler