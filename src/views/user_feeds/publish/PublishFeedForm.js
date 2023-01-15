
import React, { useState, useEffect } from 'react'


import { InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { FormControl } from '@mui/material'
import { TextField, Slider } from '@mui/material'

import { RegularText } from '../../../components/texts/GenericTexts'
import ExploreFeedApi from '../../../session/ExploreFeedApi'

import { GenericPanel } from '../../../components/panels/GenericPanels'


// marks to be display  on cooktime and preptime
const marks = [
    {
      value: 30,
      label: '30 Mins',
    },
    {
      value: 60,
      label: '60 Mins',
    },
    {
      value: 90,
      label: '90 Mins',
    },
    {
      value: 120,
      label: '20 Mins',
    },
]





const PublishFeedForm = ({ errorHandler, errorStatus }) => { 

    /**
     * @purpose  PublishFeedForm is responsible for collecting input data from 
     *           user inorder to create the basic recipe data.
     *           PublishFeedForm is the first step to publishing a recipe
     * 
     * @param errorHandler: handle the error that's detected
     * @param errorStatus: display the error within the component due to user inputs
     * 
     */


    // core 

    const exploreApi = new ExploreFeedApi() 
    const savedData = JSON.parse(localStorage.getItem('formData'))

    // hooks 

    const [ cookTime, setCookTime ] = useState(savedData.cookTime)
    const [ prepTime, setPrepTime ] = useState(savedData.prepTime)
    const [ recipeName, setRecipeName ] = useState(savedData.recipeName)
    const [ recipeDescription, setRecipeDescription ] = useState(savedData.recipeDescription)
    const [ recipeDirections, setRecipeDirections ] = useState(savedData.recipeDirections)

    const [ categories, setCategories ] = useState([])
    const [ category, setCategory ] = useState(savedData.category)

    const [ formError, setFormError ] = useState(errorStatus)


    // handlers

    const getCookTime = ( time ) => { 
        return `${time} Mins`
    }

    const handleCookTime = ( event ) => { 
        setCookTime(event.target.value)
    }

    const handlePrepTime = ( event ) => { 
        setPrepTime(event.target.value)
    }

    const handleRecipeName = ( event ) => { 
        setRecipeName(event.target.value)
    }

    const handleRecipeDescription = ( event ) => { 
        setRecipeDescription(event.target.value)
    }

    const handleRecipeDirections = ( event ) => { 
        setRecipeDirections(event.target.value)
    }

    const handleCategory = ( event ) => { 
        setCategory(event.target.value)
    }



    useEffect(() => { 

        const _loadRecipeCategories = async () => { 
            
            /**
             * @purpose Loads the categories of all recipes with in backend into the categories hook
             *          first, check whether the categories data are stored within the localStorage,
             *          if so, set those data within the categories hook, 
             *          if not, fetch the categories data and add to the localstorage
             * 
             */
            
            const storedCategories = JSON.parse(localStorage.getItem('categories'))

            if ( storedCategories ){ 
                console.log('Reading A')
                setCategories(storedCategories)
                return 
            }
            console.log('Reading B')

            const data = await exploreApi.getAllCategories() 
            localStorage.setItem('categories', JSON.stringify(data))
            setCategories(data)
        }

        
        _loadRecipeCategories() 
        errorHandler(recipeName, prepTime, cookTime, recipeDescription, recipeDirections, category)

    }, [formError, recipeName, recipeDescription, recipeDirections, category])




    //console.log('Cook Time', cookTime)
    //console.log('Prep Time', prepTime)
    //console.log('Category', category)
    //console.log('RecipeName', recipeName)
    return ( 
            <GenericPanel
                shadow={0}
                mdWidth="100%"
                mdHeight={"75vh"}>

                <Stack 
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    mt={5}
                    mb={10}
                    >


                    <RegularText
                        size="24px"
                        text="Publish a Recipe"/>


                    <form>
                        
                        <Stack 
                            direction="column"
                            spacing={4}
                            justifyContent="center"
                            alignItems="center">

                            <TextField
                                variant="outlined"
                                placeholder="Recipe Name" 
                                value={recipeName}
                                onChange={handleRecipeName}
                                sx={{
                                    width: '100%'
                                }}
                                type="text"
                            />

                            <TextField
                                variant="outlined"
                                placeholder="Recipe Description" 
                                rows={8}
                                multiline
                                value={recipeDescription}
                                onChange={handleRecipeDescription}
                                sx={{
                                    width: '40rem'
                                }}
                                type="text"

                            />

                            <Stack
                                direction="column"
                                spacing={1}
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                width="100%">

                                <RegularText
                                    size="12px"
                                    text="Prep Time"/>

                                <Slider
                                    aria-label="Prep Time"
                                    defaultValue={30}
                                    getAriaValueText={getCookTime}
                                    step={5}
                                    marks={marks}
                                    min={5}
                                    max={120}
                                    valueLabelDisplay="auto"
                                    value={prepTime}
                                    onChange={handlePrepTime}/>

                            </Stack>


                            <Stack
                                direction="column"
                                spacing={1}
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                width="100%">

                                <RegularText
                                    size="12px"
                                    text="Cook Time"/>

                                <Slider
                                    aria-label="Cook Time"
                                    defaultValue={30}
                                    getAriaValueText={getCookTime}
                                    step={5}
                                    marks={marks} 
                                    min={5}
                                    max={120}
                                    valueLabelDisplay="auto"
                                    value={cookTime}
                                    onChange={handleCookTime}/>


                            </Stack>


                            <TextField
                                variant="outlined"
                                placeholder="Recipe Directions" 
                                rows={10}
                                multiline
                                value={recipeDirections}
                                onChange={handleRecipeDirections}
                                sx={{
                                    width: '100%'
                                }}
                                type="text"

                            />

                            <FormControl
                                fullWidth>

                                    <InputLabel
                                        id="category-label">
                                            Category 
                                    </InputLabel>

                                    <Select
                                        labelId="category-label"
                                        id="category-select"
                                        value={category}
                                        label="Category"
                                        onChange={handleCategory}>
                                            {categories.map((value, index) => ( 
                                                <MenuItem
                                                    key={index}
                                                    value={value}>
                                                        {value}
                                                </MenuItem>
                                            ))}
                                    </Select>

                            </FormControl>

                           
                        </Stack>

                    </form>
    
                </Stack>
            </GenericPanel>

               
    )
}

export default PublishFeedForm