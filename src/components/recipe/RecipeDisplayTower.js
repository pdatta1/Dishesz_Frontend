

import React, { useEffect, useState } from 'react'

import { Stack } from '@mui/material'
import { ProfileLink } from '../buttons/LinkButtons'
import { GenericCircularProgress } from '../misc/GenericProgress'

import ProfileCard from './ProfileCard'
import ViewProfile from '../users/ViewProfile'
import UserAccount from '../../session/UserAccount'

const RecipeDisplayTower = ({ profile_pic, author, refresh, savedStatus, authStatus }) => { 

    const userAccount = new UserAccount()  

    const [ viewProfileStatus, setViewProfileStatus ] = useState(false)
    const [ profileData, setProfileData ] = useState()
    const [ loading, setLoading ] = useState(false)

    const handleViewProfile = async () => { 

        setLoading(true)

        const profile = await userAccount.viewProfileByUsername(author)
        await refresh() 

        setProfileData(profile.data.user_profile)
        setViewProfileStatus(!viewProfileStatus)

        setLoading(false)
    }

    const refreshUserProfile = async () => { 

        setLoading(true)

        const profile = await userAccount.viewProfileByUsername(author)
        setProfileData(profile.data.user_profile)

        setLoading(false)
    }

    //console.log('Profile Data', profileData)

    console.log('AuthStatus', authStatus)

    useEffect(() => { 

    }, [ loading ])

    return ( 
        <Stack 
            mt={5}
            direction="row"
            spacing={2}
            justifyContent="flex-start"
            alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

            <ProfileCard
                media={profile_pic}/>

            {!loading ? (
                <ProfileLink
                    username={author}
                    onPress={handleViewProfile}
                    allowViewed={authStatus}/>
            ): ( 
                <GenericCircularProgress/>
            )}

            <ViewProfile
                status={viewProfileStatus}
                handler={handleViewProfile}
                profileData={profileData}
                refreshHandler={refreshUserProfile}
                authStatus={authStatus}
                loading={loading}
                />

         </Stack>

    )
}

export default RecipeDisplayTower