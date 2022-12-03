
import React from 'react'

import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import ExploreView from './explore_view/ExploreView'
import LoginView from './login/LoginView'

const ViewHandler = ({ isAuthenticated }) => { 

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