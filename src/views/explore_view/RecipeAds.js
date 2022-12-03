

import React from 'react'

import { Box, Stack, Paper } from '@mui/material'


import { RegularText } from '../../components/texts/GenericTexts'

const RecipeAdsView = () => { 

    return ( 
        <Box 
            width="25vh"
            justifyContent="center" 
            alignItems="center"
            maxWidth="100%"
            sx={{
                display: {
                    xs: 'none', sm: 'none', md: 'none', lg: 'flex'
                }
            }}>

                <Paper 
                    elevation={0}
                    sx={{
                        width: '25vh',
                        height: '80vh'
                    }}>
                    <Stack 
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center">

                            <RegularText
                                text="Recipe Ads View"/>
                    </Stack> 
                </Paper>

                
        </Box>
    )
}

export default RecipeAdsView