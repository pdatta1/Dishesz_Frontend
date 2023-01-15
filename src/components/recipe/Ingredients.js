
import React, { useState } from 'react'

import { Stack } from '@mui/material'
import { SmallPanel } from '../panels/GenericPanels'
import { RegularText, RegularChip, ClickableChip } from '../texts/GenericTexts'
import { IngredientLinkButton } from '../buttons/Buttons'
import AvailableAt from './AvailableAt'


const Ingredients = ({ data, shadow }) => { 

    const [ availableAtStatus, setAvailableAtStatus ] = useState(false)
    const [ currentIngredient, setCurrentIngredient ] = useState([])

    const handleAvailableAtDialog = () => { 
        setAvailableAtStatus(!availableAtStatus)
    }

    return ( 
        <SmallPanel
            shadow={shadow}>

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
                        maxWidth: '40vh'
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

                            <ClickableChip
                                indicator="primary"
                                text={ingredient.ingredient}
                                onPress={() => { 
                                    handleAvailableAtDialog()
                                    setCurrentIngredient(ingredient.available_at)
                                }}/>



                            

                        </Stack>
                    
                    ))}

                
                </Stack>

            </Stack>

          
            <AvailableAt
                status={availableAtStatus}
                handler={handleAvailableAtDialog}
                data={currentIngredient}/>

    </SmallPanel>
    )
}

export default Ingredients
