
/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose This file is responsible for displaying the user profilecard attach to a post
 * 
 */


import React from 'react'

import { Avatar } from '@mui/material'


const ProfileCard = ({ media }) => {
    /**
     * @purpose ProfileCard display the author of the recipe post image
     * @param media the image to be displayed
     * @returns CardMedia UI that displays the image file
     */
    return ( 
        <Avatar
            
            src={media}
            alt='Profile'>

        </Avatar>
    )
}

export default ProfileCard