

import React from 'react'

import { CardMedia } from '@mui/material'

import { isMobile } from '../../../utils/MobileUtils'


const CoverPhoto = ({ coverPhoto }) => { 

    console.log('Cover Photo', coverPhoto)

    if(!isMobile()){
        return( 
            <CardMedia 
                image={coverPhoto}
                sx={{
                    width: '100%', 
                    height: '200px',
                    backgroundSize: 'contain'
                }}/>
        )
    }
}

export default CoverPhoto