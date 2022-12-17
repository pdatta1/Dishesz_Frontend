

import React from 'react'

import Stack from '@mui/material/Stack'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { RegularChip } from '../texts/GenericTexts'


const LeaveReviews = ({ reviews }) => { 

    const getSaves = () => { 
        return reviews.length
    }

    return ( 
        <Stack 
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            display="flex">

            
            <ChatBubbleOutlineIcon/>

            <RegularChip
                indicator={"primary"}
                text={getSaves()}/>

                

        </Stack>
    )
}

export default LeaveReviews