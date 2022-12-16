

import React, { useState, useEffect } from 'react'

import { Stack } from '@mui/material'


import StarIcon from '@mui/icons-material/Star'


const Ratings = ({ rating }) => { 


    const [ rateArray, updateRateArray ] = useState([])

   

    console.log('Rate Array', rateArray)
    useEffect(() => { 

        const displayRatings = () => { 

            for(let rate = 0; rate < rating; rate++){ 
                updateRateArray((prev) => [...prev, rate])
            }
        }

        displayRatings() 
    }, [rating])


    return ( 
        <Stack 
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center">

                {
                    rateArray.map((rate) => ( 
                        <StarIcon
                            key={rate}/>
                    ))
                }

        </Stack>
    )
}

export default Ratings 