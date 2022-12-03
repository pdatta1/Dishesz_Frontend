
/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose This file is responsible for displaying the user profilecard attach to a post
 * 
 */


import React from 'react'

import { CardMedia } from '@mui/material'


const ProfileCard = ({ media }) => {
    /**
     * @purpose ProfileCard display the author of the recipe post image
     * @param media the image to be displayed
     * @returns CardMedia UI that displays the image file
     */
    return ( 
        <CardMedia
            sx={{
                    height: '60px', 
                    width: {xs: '60px', sm: '60px', md: '60px'}, 
                    objectFit: 'contain',
                    borderRadius: '50%'
                }}
            component="img"
            src={media}
            alt='WalletIcon'>

        </CardMedia>
    )
}

export default ProfileCard