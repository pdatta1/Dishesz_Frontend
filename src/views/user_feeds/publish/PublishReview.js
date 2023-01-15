

import React, { useEffect, useState } from 'react'


import { AppBar, Box, Dialog, DialogContent, IconButton, Stack, Toolbar } from '@mui/material'
import Details from '../../../components/recipe/Details'
import Ingredients from '../../../components/recipe/Ingredients'
import { ReviewSection } from '../../../components/recipe/Reviews'
import { GenericButton } from '../../../components/buttons/Buttons'
import { Transition } from '../../../utils/Transitions'

import CloseIcon from '@mui/icons-material/Close'
import { RegularText } from '../../../components/texts/GenericTexts'

const defaultPreviewProfileImage = "https://disheszstorage.s3.us-east-2.amazonaws.com/default_storage/default_chef.png"
const defaultFilledData = { 
    recipe_name: '',
    recipe_description: '',
    prep_time: 0,
    cook_time: 0,
    directions: '',
    ingredients: [],
    photos: [],
    recipe_reviews: [],
    author: '',
    created_on: '',
    saved_recipes: [],
    category: '',
    profile_pic: ''
}



const PublishReview = () => { 


    const [ recipePreview, setRecipePreview ] = useState(defaultFilledData)
    const [ ingredientPreviewDialogStatus, setIngredientPreviewDialogStatus ] = useState(false)


    const handleIngredientsPreviewDialog = () => { 
        setIngredientPreviewDialogStatus(!ingredientPreviewDialogStatus)
    }
    

    const getCurrentDate = () => { 

        const todayDate = new Date() 
        
        let dd = String(todayDate.getDay())
        let mm = String(todayDate.getMonth())
        let yy = String(todayDate.getFullYear())

        let fullDate = `${yy}-${mm}-${dd}`
        return fullDate

    }

    console.log('PreviewData', recipePreview.ingredients)

    useEffect(() => { 

        const _loadRecipePreview = () => { 

            let formData = JSON.parse(localStorage.getItem('formData'))
            let ingredients = JSON.parse(localStorage.getItem('ingredients'))
            let photos = JSON.parse(localStorage.getItem('photos'))
            let username = localStorage.getItem('username')
            let created_on = getCurrentDate()



            let recipePreviewData = { 

                recipe_name: formData.recipeName,
                recipe_description: formData.recipeDescription,
                prep_time: formData.prepTime, 
                cook_time: formData.cookTime,
                directions: formData.recipeDirections,
                ingredients: ingredients.data,
                photos: photos,
                recipe_reviews: [],
                author: username, 
                created_on: created_on,
                saved_recipes: [],
                category: formData.category, 
                profile_pic: defaultPreviewProfileImage,

            }



            setRecipePreview(recipePreviewData)
        }

        _loadRecipePreview() 
        

    }, [])

    return ( 

        <Stack 
            direction="column"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            width="100%">

            <Stack 
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                height="75vh">

                <Details
                    data={recipePreview}/>

                <GenericButton
                    variant="text"
                    text="Ingredients"
                    onPress={handleIngredientsPreviewDialog}/>

               


            </Stack>

            <Dialog 
                fullWidth
                open={ingredientPreviewDialogStatus}
                onClose={handleIngredientsPreviewDialog}
                TransitionComponent={Transition}>

                <AppBar
                    sx={{ 
                        position: 'relative',
                        'backgroundColor': '#0093E9',
                        'backgroundImage': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
                    }}>

                    <Toolbar>

                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            onClick={handleIngredientsPreviewDialog}>
                            
                            <CloseIcon/>
                        </IconButton>

                        <RegularText
                            size="14px"
                            color="#fffff"
                            text="Ingredients"/>

                    </Toolbar>

                </AppBar>

                <DialogContent>

                    <Stack 
                        direction="column"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                        height="50vh"
                        overflow="auto">

                            <Ingredients
                                data={recipePreview.ingredients}
                                shadow={0}/>

                    </Stack>

                </DialogContent>

            </Dialog> 

        </Stack>
    )
}

export default PublishReview