

import React from 'react'

import { Box, Stack } from '@mui/material'
import { RegularText } from '../../components/texts/GenericTexts'


const MyFeed = ({ authStatus }) => { 

    return ( 
        <Box 
            justifyContent="center"
            alignItems="center"
            display="flex"
            width="70vh">

               <RegularText
                    size="18px"
                    text="Feed Section"/>

        </Box>
    )
}

export default MyFeed