


/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose This file is serves as a container for displaying the card for the recipe post
 * 
 */


import React, { useState } from 'react'

import {Box, Stack } from '@mui/material'
import { SmallPanel } from '../panels/GenericPanels'
import { RegularChip, RegularText } from '../texts/GenericTexts'

import { PhotoGallery } from './RecipePhoto'
import { GenericButton, ViewMoreButton } from '../buttons/MenuButtons'
import RecipeDetails from './RecipeDetail'
import RecipeDisplayTower from './RecipeDisplayTower'



const RecipeDisplay = ({ recipeData }) => { 
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

    console.log('Recipe Data', recipeData)

    const [ detailStatus, setDetailStatus ] = useState(false)

    const trunateRecipeDescription = () => { 
        
        if(recipeData.recipe_description){ 
            let description = recipeData.recipe_description
            let trunateWords = description.split(' ').slice(0, 50).join(' ')
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
                maxWidth="100%">

                        <SmallPanel
                            shadow={5}>
                                

                                <Stack 
                                    ml={{ sm: 0, md: 4}}
                                    direction="column"
                                    spacing={2}
                                    justifyContent="center"
                                    display="flex">

                                   <RecipeDisplayTower
                                        profile_pic={recipeData.profile_pic}
                                        author={recipeData.author}/>

                                    <Stack 
                                        direction="column"
                                        spacing={2}
                                        justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                        alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

                                            <PhotoGallery
                                                photoList={recipeData.photos}/>
                                    </Stack>

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
                                                    text={recipeData.recipe_name}/>

                                                <RegularChip
                                                indicator="secondary"
                                                text={recipeData.category}/>

                                                
                                            </Stack>

                                            

                                            <Stack 
                                                direction="row"
                                                spacing={2}
                                                justifyContent="center"
                                                alignItems="center">

                                                <RegularChip
                                                    indicator="primary"
                                                    text="Prep Time"/>

                                                <RegularChip
                                                    indicator="success"
                                                    text={recipeData.prep_time}/>

                                            </Stack>

                                            <Stack 
                                                direction="row"
                                                spacing={2}
                                                justifyContent="center"
                                                alignItems="center">

                                                <RegularChip
                                                    indicator="primary"
                                                    text="Cook Time"/>

                                                <RegularChip
                                                    indicator="success"
                                                    text={recipeData.cook_time}/>

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

                                                <RegularText
                                                    size="12px"
                                                    text={trunateRecipeDescription()}/>

                                                <ViewMoreButton
                                                    onPress={recipeDetailHandler}
                                                    text="View More"/>

                                            </Stack>

                                         
    
                                    </Stack>

                                    

                                    <Stack 
                                        direction="row"
                                        spacing={1}
                                        display="flex"
                                        justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                        alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

                                         

                                            

                                    </Stack>


                                </Stack>

                        </SmallPanel>

                    <RecipeDetails
                        status={detailStatus}
                        handler={recipeDetailHandler}
                        data={recipeData}/>

            </Box>
        
        )
    }
} 



export default RecipeDisplay