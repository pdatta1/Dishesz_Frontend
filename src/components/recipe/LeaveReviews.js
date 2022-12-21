

import React from 'react'

import Stack from '@mui/material/Stack'
import { RegularChip, RegularText } from '../texts/GenericTexts'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { FormControlLabel, FormGroup, IconButton } from '@mui/material'
import { Box } from '@mui/system'


const LeaveReviews = ({ reviews }) => { 

    const getReviewsCount= () => { 
        return reviews.length
    }

    return ( 
     
       <Box 
        sx={{
            marginTop: 5
        }}>
            <FormGroup>
                
                <FormControlLabel
                    control={
                    <IconButton
                        aria-label="reviews"
                        size="small">

                        <ChatBubbleOutlineIcon/>

                    </IconButton>
                    }
                    label={getReviewsCount()}/>
            </FormGroup>
        </Box>

    )
}

export default LeaveReviews