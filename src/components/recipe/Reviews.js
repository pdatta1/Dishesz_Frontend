import React from 'react'

import { Divider, Rating, Stack } from '@mui/material'
import { ReviewPanel, SmallPanel } from '../panels/GenericPanels'
import RecipeDisplayTower from './RecipeDisplayTower'
import { RegularText } from '../texts/GenericTexts'
import Ratings from './Ratings'


const ReviewSection = ({ reviews, fitment, refresh, authStatus }) => { 

    const isReviewsValid = () => { 
        if(!reviews.length == 0){
            return true 
        }

        return false 
    }

    const checkFitment = () => { 
        if(fitment == 'full'){ 
            return '100vh'
        }

        if(fitment == 'mid'){ 
            return '50%'
        }
    }

    const checkShadow = () => { 
        if(fitment == 'full'){ 
            return 5
        }

        if(fitment == 'mid'){ 
            return 0
        }
    }



    //console.log('Reviews', reviews)

    return ( 
        <ReviewPanel
            shadow={checkShadow()}
            mdWidth={checkFitment()}>

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    display="flex">

                    <RegularText
                        size="18px"
                        text="Reviews"/>

                    {isReviewsValid() ? ( 

                        <Stack 
                            direction="column"
                            spacing={1}
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            width="100%">

                                {reviews.map(( review, key) => ( 

                                    <Stack
                                        key={key}
                                        direction="column"
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                        display="flex"
                                        width="100%">

                                        
                                            <Review
                                                review={review}
                                                authStatus={authStatus}
                                                refresh={refresh}/>

                                        <Divider
                                            variant="middle"
                                            sx={{
                                                background: '#E5E4E2',
                                                width: '100%'
                                            }}/>
                                    </Stack>


                                ))}
                        </Stack>
                    ): (

                        <Stack 
                            direction="column"
                            spacing={0}
                            justifyContent="flex-start"
                            alignItems="flex-start">

                                <RegularText
                                    text={"No Reviews Yet!"}
                                    size={"14px"}/>
                        </Stack>
                    )}

                </Stack>

        </ReviewPanel>
    )
}


const Review = ({ review, refresh, authStatus }) => { 

    console.log('Review', review.author) 

    return ( 
        <Stack 
            direction="column"
            spacing={1}
            justifyContent="flex-start"
            alignItems="flex-start"
            ml={1}
            mb={2}>

                <RecipeDisplayTower
                    profile_pic={review.profile_pic}
                    author={review.author}
                    authStatus={authStatus}
                    refresh={refresh}/>

                <Rating
                    name="Recipe Ratings"
                    readOnly
                    value={review.rating}/>

                <RegularText
                    text={review.description}
                    size="12px"/>

        </Stack>
    )

}

export { 
    ReviewSection,
    Review,
}