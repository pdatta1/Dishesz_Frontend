

import React from 'react'

import { Box, Stack } from '@mui/material'
import { ApproachPanel } from '../../components/panels/GenericPanels'


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

                <ApproachPanel
                    shadow={0}>
                        <Stack 
                            mt={5}
                            direction="column"
                            spacing={3}
                            justifyContent="center"
                            alignItems="center">

                            <RegularText
                                size="12px"
                                text="Recipe Ads View"/>
                                
                        </Stack>
                </ApproachPanel>

                
        </Box>
    )
}

export default RecipeAdsView