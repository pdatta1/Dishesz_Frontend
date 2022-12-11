

import React, { useState, useEffect } from 'react'

import { Box, Stack } from '@mui/material'


import StarIcon from '@mui/icons-material/Star'


const Ratings = ({ rating }) => { 


    const [ rateArray, updateRateArray ] = useState([])

    const displayRatings = () => { 

        for(let rate = 0; rate < rating; rate++){ 
            updateRateArray((prev) => [...prev, rate])
        }
    }

    console.log('Rate Array', rateArray)
    useEffect(() => { 
        displayRatings() 
    }, [])


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