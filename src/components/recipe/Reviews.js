import React from 'react'

import { Box, Stack } from '@mui/material'
import { SmallPanel } from '../panels/GenericPanels'
import RecipeDisplayTower from './RecipeDisplayTower'
import { RegularChip, RegularText } from '../texts/GenericTexts'
import Ratings from './Ratings'


const ReviewSection = ({ reviews }) => { 

    const isReviewsValid = () => { 
        if(reviews && !reviews.length == 0){
            return true 
        }

        return false 
    }

    console.log('Reviews', reviews)

    return ( 
        <SmallPanel
            shadow={5}>

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
                            alignItems="flex-start">

                                {reviews.map(( review, key) => ( 

                                    <SmallPanel
                                        key={key}
                                        shadow={1}>
                                        <Review
                                            review={review}/>
                                    </SmallPanel>

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

        </SmallPanel>
    )
}


const Review = ( review ) => { 

    console.log('Review', review.review.author) 

    return ( 
        <Stack 
            direction="column"
            spacing={0}
            justifyContent="flex-start"
            alignItems="flex-start">

                <RecipeDisplayTower
                    profile_pic={review.review.profile_pic}
                    author={review.review.author}/>

                <Ratings
                    rating={review.review.rating}/>

                <RegularText
                    text={review.review.description}
                    size="12px"/>

        </Stack>
    )

}

export { 
    ReviewSection,
    Review,
}