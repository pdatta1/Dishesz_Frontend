

import React from 'react'

import { Stack } from '@mui/material'
import { ProfileLink } from '../buttons/LinkButtons'

import ProfileCard from './ProfileCard'

const RecipeDisplayTower = ({ profile_pic, author}) => { 

    //console.log('Profile Pic', profile_pic)
    return ( 
        <Stack 
            mt={5}
            direction="row"
            spacing={0}
            justifyContent="flex-start"
            alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

            <ProfileCard
                media={profile_pic}/>

            <ProfileLink
                username={author}/>

    </Stack>

    )
}

export default RecipeDisplayTower