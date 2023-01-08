



import React, { useEffect, useState } from 'react'

import { Box, Stack } from '@mui/material'
import MyFeed from './MyFeed'
import UserAccount from '../../session/UserAccount'


import ActionView from './ActionView'


const FeedView = () => { 

    const [ authStatus, setAuthStatus ] = useState(false)

    useEffect(() => { 

        const checkAuth = setInterval(() => { 

            const userAccount = new UserAccount() 
            const isAuth = userAccount.isAuthenticated() 
            setAuthStatus(isAuth)

        }, 10)

        return () => clearInterval(checkAuth)
    })

    return ( 
        <Box 
            justifyContent="center"
            alignItems="center"
            display="flex"
            width="100%">

                <Stack
                    direction={{xs: "column", sm:"column", md: "row"}}
                    spacing={{ xs: 0, md: 4}}
                    display="flex"
                    justifyContent="center"
                    alignItems="center">

                        <MyFeed
                            authStatus={authStatus}/>

                        <ActionView
                            authStatus={authStatus}/>
                        

                </Stack>


        </Box>
    )
}

export default FeedView