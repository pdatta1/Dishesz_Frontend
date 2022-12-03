

import React from 'react'

import { Box, Stack } from '@mui/material'


import { RegularText } from '../../components/texts/GenericTexts'
const LoginView = () => { 

    return ( 
        <Box 
            display="flex"
            justifyContent="center" 
            alignItems="center"
            maxWidth="100%">

                <Stack 
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">

                        <RegularText
                            text="Login View"/>

                </Stack>
                
        </Box>
    )
}

export default LoginView