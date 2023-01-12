
import React, { useState } from 'react'

import { Chip, Grid, Stack, TextField } from '@mui/material'
import { GenericButton } from '../../../components/buttons/Buttons'
import { GenericPanel } from '../../../components/panels/GenericPanels'
import { RegularContent, RegularText } from '../../../components/texts/GenericTexts'


const AddIngredient = ({ handler }) => { 

    const [ ingredientName, setIngredientName ] = useState("")
    const [ storeName, setStoreName ] = useState("")
    const [ storePrice, setStorePrice ] = useState("")
    const [ storeLink, setStoreLink ] = useState("")

    const [ ingredients, setIngredients ] = useState([])


    const handleIngredientName = ( event ) => { 
        setIngredientName(event.target.value)
    }

    const handleStoreName = ( event ) => { 
        setStoreName(event.target.value)
    }

    const handleStorePrice = ( event ) => { 
        setStorePrice(event.target.value)
    }

    const handleStoreLink = ( event ) => { 
        setStoreLink(event.target.value)
    }

    const addIngredient = ( ingredient, storeName, storePrice, storeLink ) => { 

        let ingredientData = { 
            "ingredient": ingredient,
            "available_at": [{ 
                "store_name": storeName, 
                "store_price": storePrice, 
                "store_link": storeLink
            }]
        }

        setIngredients((ing) => [...ing, ingredientData])

    } 

    const handleIngredientDelete = ( index ) => { 
        setIngredients(prevState => prevState.filter((ingredient, i) => i !== index))
    }

    const handleIngredientEdit = () => { 

    }

    const clearData = () => { 
        setIngredientName("")
        setStoreName("")
        setStorePrice("")
        setStoreLink("")
    }


    console.log('Ingredients', ingredients)

        return ( 

            <Stack 
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                width="100%">
            
                <Stack 
                    direction="column"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                    width="60vh">

                        <TextField
                            variant="outlined"
                            placeholder="Ingredient Name" 
                            value={ingredientName}
                            onChange={handleIngredientName}
                            sx={{
                                width: '20rem'
                            }}
                            type="text"

                        />

                        <TextField
                            variant="outlined"
                            placeholder="Store Name" 
                            value={storeName}
                            onChange={handleStoreName}
                            sx={{
                                width: '20rem'
                            }}
                            type="text"

                        />

                        <TextField
                            variant="outlined"
                            placeholder="Store Price" 
                            value={storePrice}
                            onChange={handleStorePrice}
                            sx={{
                                width: '20rem'
                            }}
                            type="number"

                        />

                        <TextField
                            variant="outlined"
                            placeholder="Store Link" 
                            value={storeLink}
                            onChange={handleStoreLink}
                            sx={{
                                width: '20rem'
                            }}
                            type="url"

                        />

                        <GenericButton
                            variant="outlined"
                            text="Add"
                            onPress={() => { 
                                addIngredient(ingredientName, storeName, storePrice, storeLink)
                                clearData() 
                            }}/>


                </Stack>

                <GenericPanel
                    shadow={3}
                    mdWidth="45vh"
                    mdHeight="40vh">

                        <Stack 
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            direction="column"
                            mt={3}>

                            <RegularText
                                size="14px"
                                text="Ingredients:"/>

                            {ingredients.length === 0 ? (

                                <RegularText
                                    size="18px"
                                    text="No Ingredients Added"/>
                            ): (
                                <Grid
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}
                                    direction="row"
                                    container>

                                        {ingredients.map(( ing, index) => ( 

                                            <Grid 
                                                item 
                                                key={index}>
                                                <Chip
                                                    variant="outlined"
                                                    label={ing.ingredient}
                                                    onDelete={handleIngredientDelete(index)}
                                                    onClick={handleIngredientEdit}/>
                                            </Grid> 

                                        ))}

                                </Grid>
                            )}

                        </Stack>

                </GenericPanel>

            </Stack>
        )
    

}

export default AddIngredient