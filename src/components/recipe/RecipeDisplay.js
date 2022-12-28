


/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose This file is serves as a container for displaying the card for the recipe post
 * 
 */


import React, { useState } from 'react'

import {Box, Stack } from '@mui/material'
import { SmallPanel } from '../panels/GenericPanels'
import { ClickableChip, NavigateChip, RegularChip, RegularContent, RegularText } from '../texts/GenericTexts'

import { PhotoGallery } from './RecipePhoto'
import { ViewMoreButton } from '../buttons/Buttons'
import RecipeDetails from './RecipeDetail'
import RecipeDisplayTower from './RecipeDisplayTower'
import RecipeSaved from './RecipeSaved'
import LeaveReviews from './LeaveReviews'
import UserAccount from '../../session/UserAccount'
import ExploreFeedApi from '../../session/ExploreFeedApi'
import { assignProfilePics, assignTestRecipePhotos } from '../../tests/TestFeeds'
import { Link } from 'react-router-dom'



const RecipeDisplay = ({ recipeData, lookupHandler, isAuthenticated }) => { 
    /**
     * 
     * @purpose Display the Recipe Card 
     * @param recipeData 
     *          - Data retrieve from the backend api of a certain recipe
     *
     * @methods
     *      - @trunateRecipeDescription 
     *          - This method split and slice the recipe description and 
     *            returns it 
     */

    //console.log('Recipe Data', recipeData)

    const userFeed = new ExploreFeedApi() 
    const userAccount = new UserAccount() 

    const [ detailStatus, setDetailStatus ] = useState(false)
    const [ recipe, setRecipe ] = useState(recipeData)
    const [ savedStatus, setSavedStatus ] = useState(false)


    const refreshRecipeData = async () => { 
        const data = await userFeed.getRecipe(recipeData.id)
        const profile = await userAccount.getMyProfile() 

        data.saved_recipes.map(( user ) => { 
            if ( user.user == profile.dishesz_user){ 
                setSavedStatus(true)
            }
        })
        setRecipe(data)
    }


    const trunateRecipeDescription = () => { 
        
        if(recipe.recipe_description){ 
            let description = recipe.recipe_description
            let trunateWords = description.split(' ').slice(0, 30).join(' ')
            return trunateWords + '.....'
        }
    }

    const recipeDetailHandler = () => { 
        setDetailStatus(!detailStatus)
    }


    


    if(recipeData){
        return ( 
            <Box 
                justifyContent="center"
                alignItems="center"
                display="flex"
                width="100%"
                maxWidth="100%">

                        <SmallPanel
                            shadow={4}
                            mdWidth="70vh">
                                

                                <Stack 
                                    ml={{ sm: 0, md: 4}}
                                    mb={2}
                                    direction="column"
                                    spacing={2}
                                    justifyContent="center"
                                    display="flex">

                                   <RecipeDisplayTower
                                        profile_pic={recipe.profile_pic} /* need changing */
                                        author={recipe.author}
                                        authStatus={isAuthenticated}
                                        refresh={refreshRecipeData}
                                        />

                                   

                                    <Stack 
                                        direction="column"
                                        spacing={1}
                                        display="flex"
                                        justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                        alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

                                           

                                            <Stack 
                                                direction={{xs: "column", sm: "column", md: "row"}}
                                                spacing={2}
                                                justifyContent="center"
                                                alignItems="center">

                                                <RegularText
                                                    size="15px"
                                                    text={recipe.recipe_name}/>

                                                <ClickableChip
                                                    indicator="secondary"
                                                    text={recipe.category}
                                                    onPress={ () => { 
                                                        lookupHandler(recipe.category)
                                                    }}/>

                                                
                                            </Stack>

                                            

                                           

                                            <Stack 
                                                direction={{xs: 'column', md:'row'}}
                                                spacing={0}
                                                justifyContent="center"
                                                alignItems="center"
                                                maxWidth="80%"
                                                sx={{
                                                    overflowWrap: 'break-word',
                                                    wordWrap: 'break-word',
                                                }}>

                                                <RegularContent
                                                    size="14px"
                                                    text={trunateRecipeDescription()}/>


                                            </Stack>

                                            <ViewMoreButton
                                                    onPress={recipeDetailHandler}
                                                    text="View More"/>

                                           
        
                                    </Stack>

                                    
                                    <Stack 
                                        direction="column"
                                        spacing={2}
                                        justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                        alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

                                            
                                        <PhotoGallery
                                            photoList={assignTestRecipePhotos()}/>

                                        </Stack>

                                            <Stack 
                                                direction="row"
                                                spacing={5}
                                                display="flex"
                                                justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                                alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

                                                
                                                <RecipeSaved
                                                    saves={recipe.saved_recipes}
                                                    recipeID={recipe.id}
                                                    authStatus={isAuthenticated}
                                                    savedStatus={savedStatus}
                                                    refresh={refreshRecipeData}
                                                    />   

                                                <LeaveReviews
                                                    identifier_name={recipeData.recipe_name}
                                                    identifier={recipeData.id}
                                                    reviews={recipe.recipe_reviews}
                                                    authStatus={isAuthenticated}
                                                    refresh={refreshRecipeData}/>   

                                                
                                                

                                            </Stack>
                                    

                                </Stack>

                        </SmallPanel>

                    <RecipeDetails
                        status={detailStatus}
                        authStatus={isAuthenticated}
                        handler={recipeDetailHandler}
                        refresh={refreshRecipeData}
                        data={recipe}/>

            </Box>
        
        )
    }
} 



export default RecipeDisplay