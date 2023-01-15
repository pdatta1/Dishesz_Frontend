

import React, { useEffect, useState } from 'react'


import { Box, Stack } from '@mui/material'
import Details from '../../../components/recipe/Details'


const defaultPreviewProfileImage = "https://disheszstorage.s3.us-east-2.amazonaws.com/default_storage/default_chef.png"
const PublishReview = () => { 


    const [ recipePreview, setRecipePreview ] = useState([])

    const getCurrentDate = () => { 

        const todayDate = new Date() 
        
        let dd = String(todayDate.getDay())
        let mm = String(todayDate.getMonth())
        let yy = String(todayDate.getFullYear())

        let fullDate = `${yy}-${mm}-${dd}`
        return fullDate

    }

    console.log('PreviewData', recipePreview)

    useEffect(() => { 

        const _loadRecipePreview = () => { 

            let formData = localStorage.getItem('formData')
            let ingredients = localStorage.getItem('ingredients')
            let photos = localStorage.getItem('photos')
            let username = localStorage.getItem('username')
            let created_on = getCurrentDate()



            let recipePreviewData = { 

                recipe_name: formData.recipeName,
                recipe_description: formData.recipeDescription,
                prep_time: formData.prepTime, 
                cook_time: formData.cookTime,
                directions: formData.directions,
                ingredients: ingredients,
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

        <Box 
            justifyContent="center"
            alignItems="center"
            display="flex"
            maxWidth="100%">

            <Details
                data={recipePreview}/>

        </Box>
    )
}

export default PublishReview