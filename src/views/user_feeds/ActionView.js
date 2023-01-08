
import React, { useState } from 'react'


import { Box, Stack } from '@mui/material'
import PublishFeed from './publish/PublishFeed'


const ActionView = ({ authStatus }) => { 


    return ( 
        <Box 
            width="35vh"
            maxWidth="100%"
            sx={{
                display: {
                    xs: 'none', sm: 'none', md: 'none', lg: 'block', 
                }
            }}
            justifyContent="center"
            alignItems="center">

            <Stack 
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: 'absolute',
                    top: 0,
                    marginTop: '6rem'
                }}>

                    <PublishFeed
                        authStatus={authStatus}/>

                
            </Stack>
    </Box>
    )
}

export default ActionView