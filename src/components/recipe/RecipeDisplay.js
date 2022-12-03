


/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose This file is serves as a container for displaying the card for the recipe post
 * 
 */


import React from 'react'

import {Box, Stack } from '@mui/material'
import { SmallPanel } from '../panels/GenericPanels'
import { RegularChip, RegularText } from '../texts/GenericTexts'
import ProfileCard from './ProfileCard'
import { ProfileLink } from '../buttons/LinkButtons'
import { PhotoGallery } from './RecipePhoto'
import { GenericButton } from '../buttons/MenuButtons'



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

    const trunateRecipeDescription = () => { 
        
        if(recipeData.recipe_description){ 
            let description = recipeData.recipe_description
            let trunateWords = description.split(' ').slice(0, 30).join(' ')
            return trunateWords + '.....'
        }
    }


    if(recipeData){
        return ( 
            <Box 
                justifyContent="center"
                alignItems="center"
                display="flex">

                        <SmallPanel
                            shadow={5}>
                                

                                <Stack 
                                    mt={-3}
                                    ml={{ sm: 0, md: 4}}
                                    direction="column"
                                    spacing={2}
                                    justifyContent="center"
                                    display="flex">

                                    <Stack 
                                        mt={5}
                                        direction="row"
                                        spacing={2}
                                        justifyContent="flex-start"
                                        alignItems="flex-start">

                                        <ProfileCard
                                            media={"https://www.w3schools.com/howto/img_avatar2.png"}/>

                                        <ProfileLink
                                            username={recipeData.author}/>

                                    </Stack>

                                    <Stack 
                                        direction="column"
                                        spacing={1}
                                        display="flex"
                                        justifyContent="flex-start"
                                        alignItems="flex-start">

                                            

                                            <Stack 
                                                direction="row"
                                                spacing={2}
                                                justifyContent="center"
                                                alignItems="center">

                                            <RegularText
                                                size="12px"
                                                text={recipeData.recipe_name}/>

                                                <RegularChip
                                                    indicator="success"
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

                                            <RegularText
                                                size="12px"
                                                text={trunateRecipeDescription()}/>
    
                                    </Stack>

                                    <Stack 
                                        direction="column"
                                        spacing={2}
                                        justifyContent="flex-start"
                                        alignItems="flex-start">

                                            <PhotoGallery
                                                photoList={recipeData.photos}/>
                                    </Stack>

                                    <Stack 
                                        direction="row"
                                        spacing={1}
                                        display="flex"
                                        justifyContent="flex-start"
                                        alignItems="flex-start">

                                         

                                            <GenericButton
                                                text="View More"/>

                                    </Stack>


                                </Stack>

                        </SmallPanel>

            </Box>
        
        )
    }
} 



export default RecipeDisplay