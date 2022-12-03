/**
 * 
 * @author Patrick Atta-Baah 
 * @file GenericTexts.js
 * @purpose custom typographies for dishesz UI
 * 
 */


import React from 'react'

import { Typography, Chip } from '@mui/material'


const RegularText = ({ text, variant, size }) => { 
    /**
     * 
     * @purpose RegularText consists of a simple text with a regular font weight
     * @param text: typography output (eg. "this is an output")
     * @param variant: variation of the text element (eg. <h1> <h2> etc)
     * 
     */
    return ( 
        <Typography
            fontSize={size}
            variant={variant}
            component="div"
            fontFamily="Dishesz-regular">
                {text}
        </Typography>
    )
}

const RegularChip = ({ text, indicator }) => { 

    return ( 
        <Chip 
            variant="outlined"
            size="lg"
            label={text}
            color={indicator}
            sx={{
                fontSize: '.8rem'
            }}/>
    )
}



export { 
    RegularText, 
    RegularChip,
}