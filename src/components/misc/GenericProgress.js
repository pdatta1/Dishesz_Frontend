


import React from 'react'

import { CircularProgress, LinearProgress ,Box } from '@mui/material'

const GenericCircularProgress = () => { 

    return ( 
        <Box 
            sx={{ display: 'flex'}}>
                <CircularProgress/>
        </Box>
    )
} 


const GenericLinearProgress = () => { 

    return ( 
        <Box 
            sx={{ display: 'flex', width: "100%"}}>
                <LinearProgress/>
        </Box>
    )
} 


export { 
    GenericCircularProgress,
    GenericLinearProgress,
}