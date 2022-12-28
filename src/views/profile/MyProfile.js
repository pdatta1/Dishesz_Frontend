

import React, { useState, useEffect } from 'react'

import { Box, Stack } from '@mui/material'

import UserProfile from '../../components/users/leftview/LeftContainer'
import UserProfileInfo from '../../components/users/rightview/RightContainer'

import UserAccount from '../../session/UserAccount'
import { RegularText } from '../../components/texts/GenericTexts'


const MyProfile = ({ authStatus }) => { 

    const userAccount = new UserAccount() 

    const [ userData, setUserData ] = useState({})
    const [ profileLoaded, updateProfileLoaded ] = useState(false)

    const _refreshUserAccount = async () => { 
            
        const username = userAccount.getUsername()
        const data = await userAccount.viewProfileByUsername(username)
        setUserData(data.data.user_profile)

    }


    useEffect(() => { 

        const _loadUserAccount = async () => { 
            
            console.log('Storing Data')
            const username = userAccount.getUsername()
            const data = await userAccount.viewProfileByUsername(username)
            setUserData(data.data.user_profile)
            updateProfileLoaded(true)
    
        }

        _loadUserAccount() 
        console.log('Profile Starting.....')

    }, [ profileLoaded ])

    console.log('UserData - MyProfile', userData)


    return ( 
        <Box 
            justifyContent="center"
            alignItems="center"
            display="flex">

            <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                display="flex"> 

                {profileLoaded ? (

                    <Stack
                        direction={{xs: 'column', md: "row"}}
                        spacing={{ xs: 2, md: 5}}
                        justifyContent="center"
                        alignItems="center"
                        display="flex">

                            
                        <UserProfile
                            userData={userData}
                            refresh={_refreshUserAccount}
                            authStatus={authStatus}/> 

                        <UserProfileInfo
                            authStatus={authStatus}
                            userData={userData}/>
                    </Stack>
                ): ( 

                    <RegularText    
                        size="18px"
                        text="Loading Profile...."/>

                )}
            
            </Stack>


        </Box>
    )
}

export default MyProfile