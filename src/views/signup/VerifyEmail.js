

import React, { useState, useEffect} from 'react'


import { Box, Stack } from '@mui/material'
import { SmallPanel } from '../../components/panels/GenericPanels'
import { RegularText } from '../../components/texts/GenericTexts'
import UserAccount from '../../session/UserAccount'


const VerifyEmailView = () => { 

    const [ access, setAccess ] = useState(false)
    const userAccount = new UserAccount() 

    useEffect(() => { 
        const _loadAccountToken = async () => { 

            const urlString = window.location.href
            const uri = new URL(urlString)

            const uid = uri.searchParams.get('uid')
            const token = uri.searchParams.get('token')

            if( uid && token){
                setAccess(true)
                await userAccount.verifyEmail() 
            }
        }

        _loadAccountToken() 
    })

    return ( 
        <Box 
            justifyContent="center"
            alignItems="center"
            display="flex"
            maxWidth="100%">

                <SmallPanel
                    shadow={5}>

                    <Stack 
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center">

                        {!access ? ( 
                            <RegularText
                                size="18px"
                                text="Error 404"/>
                        ): ( 
                            <RegularText
                                size="18px"
                                text="Account Verified"/>
                        )}

                    </Stack>
                    
                </SmallPanel>

        </Box>
    )
}

export default VerifyEmailView