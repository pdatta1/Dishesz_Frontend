

import React from 'react'

import { Box } from '@mui/material'
import { RegularText } from '../../components/texts/GenericTexts'


const MyFeed = ({ authStatus }) => { 

    return ( 
        <Box 
            justifyContent="center"
            alignItems="center"
            display="flex">

                <RegularText
                    size="18px"
                    text="My Feed"/>

        </Box>
    )
}

export default MyFeed