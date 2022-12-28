



import React from 'react'

import { Box, Stack } from '@mui/material'
import { RegularText } from '../../components/texts/GenericTexts'
import MyFeed from './MyFeed'


const FeedView = ({ authStatus }) => { 

    return ( 
        <Box 
            justifyContent="center"
            alignItems="center"
            display="flex"
            width="100%">

               <Stack 
                    direction={{ xs: "column", md: "row"}}
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    display="flex">

                        <MyFeed
                            authStatus={authStatus}/>

                </Stack>


        </Box>
    )
}

export default FeedView