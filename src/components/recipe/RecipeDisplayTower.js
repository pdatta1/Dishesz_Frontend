

import React, { useState } from 'react'

import { Stack } from '@mui/material'
import { ProfileLink } from '../buttons/LinkButtons'

import ProfileCard from './ProfileCard'
import ViewProfile from '../users/ViewProfile'

const RecipeDisplayTower = ({ profile_pic, author, profileData}) => { 


    const [ viewProfileStatus, setViewProfileStatus ] = useState(false)

    const handleViewProfile = async () => { 

        setViewProfileStatus(!viewProfileStatus)
    }


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
                onPress={handleViewProfile}/>

            <ViewProfile
                status={viewProfileStatus}
                handler={handleViewProfile}
                />

         </Stack>

    )
}

export default RecipeDisplayTower