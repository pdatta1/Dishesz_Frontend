
import React, { useEffect, useState } from 'react'

import { Chip, Grid, Stack, TextField } from '@mui/material'
import { GenericButton } from '../../../components/buttons/Buttons'
import { GenericPanel } from '../../../components/panels/GenericPanels'
import { RegularText } from '../../../components/texts/GenericTexts'


const AddIngredient = ({ handler }) => { 

    /***
     * 
     * Add Ingredient Component is the second step to publish a recipe on dishesz
     * It's consists of a 2 side panel within a row state that consists of left and right
     * The left panel consists of the forms needed to add an ingredient, 
     * The right panel consists of the displays of each ingredients and allows user to edit or delete such ingredients
     * 
     * There are several hooks and handlers which server the form, the array of ingredients, etc.
     * The array of ingredients hook named ingredients are stored in a local storage that was been retrieved when the user leaves the 
     * addIngredient component and decides to come back to it.
     * 
     */



    // savedIngredients to get the ingredients array from localStorage
    const savedIngredients = JSON.parse(localStorage.getItem('ingredients'))


    // hooks 
    const [ ingredientName, setIngredientName ] = useState("")
    const [ storeName, setStoreName ] = useState("")
    const [ storePrice, setStorePrice ] = useState("")
    const [ storeLink, setStoreLink ] = useState("")

    const [ ingredients, setIngredients ] = useState(savedIngredients.data)


    // handlers 
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

    const handleIngredientDelete = ( index ) => { 
        setIngredients(prevState => prevState.filter((ingredient, i) => i !== index))
    }

    const handleIngredientEdit = ( index ) => { 
        /**
         * @purpose Edit an ingredient element with the ingredient array when clicked on
         * @param index: the index of the ingredient within the ingredients array
         */

        setIngredientName(index.ingredient)
        setStoreName(index.available_at[0].store_name)
        setStorePrice(index.available_at[0].store_price)
        setStoreLink(index.available_at[0].store_link)
    }

    const clearData = () => { 
        /**
         * @purpose Clear all form data
         */
        setIngredientName("")
        setStoreName("")
        setStorePrice("")
        setStoreLink("")
    }


    const addIngredient = ( ingredient, storeName, storePrice, storeLink ) => { 

        /**
         * @purpose Add Ingredient to the ingredients Array
         * @param ingredient: IngredientName
         * @param storeName: name of the store
         * @param storePrice: the price of the ingredient added
         * @param storeLink: link to find the ingredient
         */

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



    useEffect(() => { 
        
        handler(ingredients)

    }, [ingredients, ingredients.length])
    
    console.log('Ingredients', ingredients)

        return ( 

            <Stack 
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="75vh">
            
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
                                                    onDelete={() => { 
                                                        handleIngredientDelete(index)
                                                    }}
                                                    onClick={() => { 
                                                        handleIngredientEdit(ing)
                                                        handleIngredientDelete(index)
                                                    }}/>
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