

import React from 'react'

import Stack from '@mui/material/Stack'

import { RegularChip } from '../texts/GenericTexts'
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'


const RecipeSaved = ({ saves }) => { 

    const getSaves = () => { 
        return saves.length
    }


    return ( 
     

            
            <form>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                label={getSaves()}
                                icon={<ThumbUpOffAltIcon/>}
                                checkedIcon={<ThumbUpAltIcon/>}
                                />
                            }
                        label={getSaves()}
                    >

                    </FormControlLabel>
                </FormGroup>
            </form>

                

    )
}

export default RecipeSaved