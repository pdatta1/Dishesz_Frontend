

import React, { useState } from 'react'

import Stack from '@mui/material/Stack'
import { RegularChip, RegularText } from '../texts/GenericTexts'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { FormControlLabel, FormGroup, IconButton, Checkbox } from '@mui/material'
import { Box } from '@mui/material'
import LeaveReviewDialog from './LeaveReviewDialog'


const LeaveReviews = ({ identifier, identifier_name, reviews, authStatus, refresh }) => { 


    const [ leaveReviewStatus, setLeaveReviewStatus ] = useState(false)

    const handleLeaveReviewDialog = () => { 
        setLeaveReviewStatus(!leaveReviewStatus)
    }

    const getReviewsCount= () => { 
        return reviews.length
    }

    return ( 
     
       <Box 
        sx={{
            marginTop: 5
        }}>
            <form>
                {authStatus ? (
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                label={getReviewsCount()}
                                icon={<ChatBubbleOutlineIcon/>}
                                checkedIcon={<ChatBubbleOutlineIcon/>}
                                onClick={handleLeaveReviewDialog}
                                />
                            }
                        label={getReviewsCount()}
                    >

                    </FormControlLabel>
                </FormGroup>
                ): ( 
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    label={getReviewsCount()}
                                    icon={<ChatBubbleOutlineIcon/>}
                                    checkedIcon={<ChatBubbleOutlineIcon/>}
                                    disabled
                                    />
                                }
                            label={getReviewsCount()}
                        >

                        </FormControlLabel>
                    </FormGroup>
                )}
            </form>

            <LeaveReviewDialog
                status={leaveReviewStatus}
                handler={handleLeaveReviewDialog}
                data={reviews}
                identifier={identifier}
                identifier_name={identifier_name}
                authStatus={authStatus}
                refresh={refresh}/>

        </Box>

    )
}

export default LeaveReviews