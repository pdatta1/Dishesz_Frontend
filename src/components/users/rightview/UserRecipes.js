

import React from 'react'

import { Box, Stack } from '@mui/material'

import { SmallPanel } from '../../panels/GenericPanels'
import { RegularText } from '../../texts/GenericTexts'

import RecipeDisplay from '../../recipe/RecipeDisplay'


const UserRecipes = ({ recipes, authStatus }) => { 

    if(recipes.length == 0){ 
        return ( 
            <SmallPanel
                shadow={0}>

                    <RegularText
                        size="14px"
                        text="No Recipes Posted"/>
            </SmallPanel>
        )
    }

    return ( 
        <SmallPanel
            shadow={0}
            mdWidth="50vh">

                <Stack 
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    display="flex">
                
                {recipes.map((recipe, key) => ( 
                    <RecipeDisplay
                        key={key}
                        recipeData={recipe}
                        isAuthenticated={authStatus}/>
                ))}

                </Stack>

        </SmallPanel>
    )
}

export default UserRecipes