
/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose This file is responsible for the Image/Images to be display from the recipe api
 * 
 */


import React from 'react'

import { CardMedia } from '@mui/material'
import Carousel from 'react-gallery-carousel'


const RecipePhoto = ({ media }) => {
    /**
     * 
     *  @purpose Recipe Photo display a Photo with appropriate widths and heights from the recipe api
     *  @returns UI of a cardmedia
     */
    return ( 
        <CardMedia
            sx={{
                    height: {sm: 100, md: 150},
                    width: {xs: '100%', sm: '100%', md: '100%'}, 
                    objectFit: 'contain',
                    borderRadius: '10px'
                }}
            component="img"
            src={media} 
            alt='Recipe Photo'>

        </CardMedia>
    )
}


const PhotoGallery = ({ photoList }) => { 

    /**
     * @purpose handle a gallery of photos from recipe
     * @returns render UI of carousel
     * 
     */

    // handle the photoList array by altering its element dictionary with speific design patterns 
    const handlePhotos = () => { 
        photoList.map((photo) => (
            photo['sizes'] = '500px, 500px'
        ))
        return photoList
    }

    //console.log('Photo Updated', handlePhotos())
    return ( 
       <Carousel 
            images={handlePhotos()}
            style={{
                objectFit: 'contain',
                height: 300,
                width: '95%',
                borderRadius: '10px'
            }}/>
    )
}

export { 
    RecipePhoto,
    PhotoGallery
}