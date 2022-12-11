

import React from 'react'

import { CardMedia } from '@mui/material'


const ImageLoader = ({ image, height }) => { 
    return ( 
        <CardMedia 
            component="img"
            width="100%"
            height={height}
            src={image}/>
    )
}

export default ImageLoader