
import React, { useEffect, useState } from 'react'

import { Dialog, AppBar, Toolbar, Stack, DialogContent, Checkbox, FormGroup, FormControlLabel, TextField } from '@mui/material'
import { IconButton, Rating } from '@mui/material'

import { Transition } from '../../utils/Transitions'
import { RegularText } from '../texts/GenericTexts'

import CloseIcon from '@mui/icons-material/Close'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'


import { FeedPanel } from '../panels/GenericPanels'
import { Review, ReviewSection } from './Reviews'
import ExploreFeedApi from '../../session/ExploreFeedApi'
import { SubmitButton } from '../buttons/Buttons'


const LeaveReviewDialog = ({ status, handler, data, identifier, identifier_name, authStatus,  refresh }) => {  

    return ( 
        <Dialog 
            fullWidth
            open={status}
            onClose={handler}
            TransitionComponent={Transition}>

                <AppBar
                    sx={{ 
                        position: 'relative',
                        'backgroundColor': '#0093E9',
                        'backgroundImage': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
                    }}>

                    <Toolbar>

                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            onClick={handler}>
                            
                            <CloseIcon/>
                        </IconButton>

                        <RegularText
                            size="14px"
                            color="#fffff"
                            text={`${identifier_name} Reviews`}/>

                    </Toolbar>

                </AppBar>

                <DialogContent>

                    <Stack 
                        direction="column"
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        display="flex">

                            {!data.length == 0 ? (
                                <FeedPanel
                                    shadow={0}>

                                    <Stack 
                                        direction="column"
                                        spacing={2}
                                        alignItems="center"
                                        justifyContent="center"
                                        display="flex">

                                           <ReviewSection
                                                fitment="mid"
                                                reviews={data}
                                                authStatus={authStatus}
                                                refresh={refresh}/>

                                            <LeaveReviewEditor
                                                recipeID={identifier}
                                                refresh={refresh}/>
                                    </Stack>

                                </FeedPanel>
                            ): ( 

                                    <Stack 
                                        direction="column"
                                        spacing={2}
                                        alignItems="center"
                                        justifyContent="center"
                                        display="flex">

                                        <RegularText
                                            text="No Reviews yet"
                                            size="18px"/>

                                        <LeaveReviewEditor
                                            recipeID={identifier}
                                            refresh={refresh}/>

                                    </Stack>
                                
                            )}

                    </Stack>

                </DialogContent>
        </Dialog>

    )
}

const LeaveReviewEditor = ({ recipeID, refresh }) => { 

    const userFeed = new ExploreFeedApi()
    const maxRating = 5 

    const [ ratings, setRatings ] = useState(0)
    const [ description, setDescription ] = useState("")

    const [ reviewData, setReviewData ] = useState({})

    const [ cannotSubmitReview, setCannotSubmitReview ] = useState(true)
    const [ success, setSuccess ] = useState(false)


    const handleRatings = ( event ) => { 
            
       setRatings(parseInt(event.target.value))
    } 

    const handleDescriptionChange = ( event ) => { 
        setDescription(event.target.value)
    }

    const configReviewData = () => { 

        let reviewData = { 
            recipe_id: recipeID,
            rating: ratings,
            description: description
        }

        setReviewData(reviewData)

    }

    const submitReview = async ( event ) => { 

        event.preventDefault() 
        await userFeed.leaveReview(reviewData)
        await refresh()
        
        // clean up 
        setRatings(0)
        setDescription("")
        setSuccess(true)
    }

    useEffect(() => { 

        if(description.length >= 20 && ratings >= 1){
            setCannotSubmitReview(false)
        }else{ 
            setCannotSubmitReview(true)
        }

    }, [description.length, ratings])

    console.log('ratings', ratings)
    console.log('Can Submit?', cannotSubmitReview)

    return ( 

        <div>
        {!success ? (
            <form onSubmit={submitReview}>

                <Stack 
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    display="flex">
                    

                        <Rating
                            name="Rate this recipe"
                            value={ratings}
                            onChange={handleRatings}/>

                        <TextField
                            multiline
                            sx={{
                                width: {xs: '100%', sm: '200%', md: '30rem'}
                            }}
                            rows={5}
                            fullWidth
                            label="Leave Description"
                            variant="outlined"
                            value={description}
                            onChange={handleDescriptionChange}/>

                        <SubmitButton
                            text="Leave Review"
                            variant="contained"
                            disabled={cannotSubmitReview}
                            onPress={configReviewData}/>

                </Stack>
            </form> 
        ): (

            <Stack 
                direction="column"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                display="flex">

                    <RegularText
                        size="18px"
                        text="Review Added"/>

            </Stack>       
        )}

        </div>

    )
}

export default LeaveReviewDialog