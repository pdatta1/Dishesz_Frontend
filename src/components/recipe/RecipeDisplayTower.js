

import React, { useState } from 'react'

import { Stack } from '@mui/material'
import { ProfileLink } from '../buttons/LinkButtons'

import ProfileCard from './ProfileCard'
import ViewProfile from '../users/ViewProfile'
import UserAccount from '../../session/UserAccount'

const RecipeDisplayTower = ({ profile_pic, author, refresh, savedStatus, authStatus }) => { 

    const userAccount = new UserAccount()  

    const [ viewProfileStatus, setViewProfileStatus ] = useState(false)
    const [ profileData, setProfileData ] = useState()

    const handleViewProfile = async () => { 

        const profile = await userAccount.viewProfileByUsername(author)
        await refresh() 

        setProfileData(profile.data.user_profile)
        setViewProfileStatus(!viewProfileStatus)
    }

    const refreshUserProfile = async () => { 
        const profile = await userAccount.viewProfileByUsername(author)
        setProfileData(profile.data.user_profile)
    }

    //console.log('Profile Data', profileData)

    console.log('AuthStatus', authStatus)

    return ( 
        <Stack 
            mt={5}
            direction="row"
            spacing={2}
            justifyContent="flex-start"
            alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

            <ProfileCard
                media={profile_pic}/>

            <ProfileLink
                username={author}
                onPress={handleViewProfile}
                allowViewed={authStatus}/>

            <ViewProfile
                status={viewProfileStatus}
                handler={handleViewProfile}
                profileData={profileData}
                refreshHandler={refreshUserProfile}
                authStatus={authStatus}
                />

         </Stack>

    )
}

export default RecipeDisplayTower