

import React from 'react'

import Stack from '@mui/material/Stack'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import { RegularChip } from '../texts/GenericTexts'


const RecipeSaved = ({ saves }) => { 

    const getSaves = () => { 
        return saves.length
    }

    return ( 
        <Stack 
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            display="flex">

            
            <ThumbUpOffAltIcon/>

            <RegularChip
                indicator={"primary"}
                text={getSaves()}/>

                

        </Stack>
    )
}

export default RecipeSaved