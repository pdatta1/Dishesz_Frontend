

import React from 'react'

import { Box, Card, Stack } from '@mui/material'
import { ApproachPanel, SmallPanel } from '../../components/panels/GenericPanels'


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

                            {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((card) => ( 

                                <Card
                                    key={card}
                                    sx={{ 
                                        height: '5rem',
                                        width: '100%'
                                    }}>
                                    <RegularText
                                        size="14px"
                                        text="Recipe Ad Sample"/>

                                    <RegularText
                                        size="14px"
                                        text="Recipe Ad"/>

                                </Card>
                            ))}
                          
                                
                        </Stack>
                </ApproachPanel>

                
        </Box>
    )
}

export default RecipeAdsView