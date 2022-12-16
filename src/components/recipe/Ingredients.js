
import React from 'react'

import { Stack } from '@mui/material'
import { SmallPanel } from '../panels/GenericPanels'
import { RegularText, RegularChip } from '../texts/GenericTexts'
import { IngredientLinkButton } from '../buttons/MenuButtons'


const Ingredients = ({ data }) => { 

    return ( 
        <SmallPanel
            shadow={5}>

            <Stack 
                mt={5}
                mb={5} 
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center">

                <RegularText 
                    size="14"
                    text="Ingredients"/>

                <Stack 
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    columnGap={2}
                    rowGap={5}
                    sx={{
                        flexWrap: 'wrap',
                    }}
                    >


                    {data.map((ingredient, key) => ( 
                        <Stack 
                            key={key}
                            direction="column"
                            spacing={0}
                            justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                            alignItems={{xs: "center", sm: "center", md: "flex-start"}}
                            
                            >

                            <RegularChip
                                indicator="primary"
                                text={ingredient.ingredient}/>

                            <RegularText    
                                size="12px"
                                text="Available At"/>

                        
                            

                                {ingredient.available_at.map((location, key) => ( 
                                    
                                    
                                        <Stack 
                                            key={key}
                                            direction="column"
                                            spacing={1}
                                            justifyContent="center"
                                            alignItems="center"
                                            
                                        >
                                            
                                            <IngredientLinkButton
                                                text={location.store_name}
                                                link={location.store_link}/>

                                            <RegularChip
                                                indicator="secondary"
                                                text={`$ ${location.store_price}`}/>

                                        </Stack>


                                ))}

                        </Stack>
                    
                    ))}

                
                </Stack>

            </Stack>

    </SmallPanel>
    )
}

export default Ingredients