

import React, { Fragment, useEffect, useState } from 'react'

import { Box, Stepper, Step, StepLabel, Button } from '@mui/material'

import { GenericButton } from '../../../components/buttons/Buttons'
import { RegularText } from '../../../components/texts/GenericTexts'
import PublishFeedForm from './PublishFeedForm'
import AddIngredient from './AddIngredient'
import PublishFeedPhotos from './publishFeedPhotos'
import PublishReview from './PublishReview'
import { Stack } from '@mui/system'

// steps to create recipe
const publishStep = [
    'Create Recipe Info',
    'Add Ingredients',
    'Add Photos',
    'Review'
]


const PublishStepper = () => { 

    /***
     * PublishStepper is responsible for the steps required to publish a recipe
     * 
     */


    // hooks 

    const [ activeStep, setActiveStep ] = useState(0)
    const [ formError, setFormError ] = useState({ 
        message: '',
        error: false
    })

    const [ recipeData, setRecipeData ] = useState({})


    // handlers 

    const isStepFailed = ( step ) => { 
        // if there's error, display it by fragment step parameter
        if(formError.error){ 
            return step === activeStep
        }
    }

    const handleNext = () => { 
        // move to next step in stepper fragment
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => { 
        // move to previous step in stepper fragment
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => { 
        // reset stepper fragment by moving back to the first
        setActiveStep(0)
    }

    const handleView = ( step ) => { 
        /**
         * @purpose Handle Stepper Fragment UI View by each step
         * @param step: step to display fragment UI View
         */
        if(step === 0){

            return ( 
                <PublishFeedForm 
                    errorHandler={validateRecipeForm}
                    errorStatus={formError.error}/>
            )
        }

        if (step === 1){ 
            return ( 
                <AddIngredient
                    handler={handleIngredientsForm}/>
                )
        }

        if (step === 2){ 
            return ( 
                <PublishFeedPhotos
                    errorHandler={handlePhotoForm}
                    errorStatus={formError.error}/>
            )
        }

        if (step === 3){ 
            return ( 
                <PublishReview/>
            )
        }
    }

    const handleSavedData = (recipeName, prepTime, cookTime, recipeDescription, recipeDirections, category) => { 
        /**
         * @purpose This function will be pass to PublishFeedForm component
         *          as a handle to save the form data inside of the localstorage
         *          and can be later retrieve to allow user to edit after moving to the next fragment stepper.
         *          handleSavedData will be called within validateRecipeForm function
         */
        let data = { 
            recipeName: recipeName,
            prepTime: prepTime,
            cookTime: cookTime,
            recipeDescription: recipeDescription,
            recipeDirections: recipeDirections, 
            category: category,
        }
        localStorage.setItem('formData', JSON.stringify(data))
    }



    const validateRecipeForm = ( recipeName, prepTime, cookTime, recipeDescription, recipeDirections, category ) => { 
        /**
         * @purpose This function will be pass to PublishFeedForm component
         *          as a handle to save the form data inside of the localstorage
         *          and can be later retrieve to allow user to edit after moving to the next fragment stepper.
         * 
         *          This function will also be responsible for displaying error message based on component validation.
         */
        console.log('Running Validator....')
        if(recipeName.length === 0){ 
            setFormError({ 
                message: 'RecipeName required!', 
                error:  true 
            })
            return 
        }

        if(recipeDescription.length === 0 || recipeDescription.length < 30){ 
            setFormError({ 
                message: `Description required! \n ${recipeDescription.length} of 30 characters`,
                error: true 
            })
            return 
        }

        if(recipeDirections.length === 0  || recipeDirections.length < 30){
            setFormError({ 
                message: `Directions required! \n ${recipeDirections.length} of 30 characters`,
                error: true 
            })
            return 
        }

        if(category.length === 0){ 
            setFormError({ 
                message: 'Category required!',
                error: true 
            })
            return 
        }

        setFormError({ 
            message: '',
            error: false
        })

        handleSavedData(recipeName, prepTime, cookTime, recipeDescription, recipeDirections, category)
        

    }

    const handleIngredientsForm = ( data ) => { 
        /**
         * @purpose This function will be pass to AddIngredient Component as a handle to add
         *          the array datatype to the localstorage that can be retrieve and display when the user leaves the Ingredient 
         *          Fragment Stepper,
         *          It also validate whether the user has an ingredient added or not
         */
        if(data.length === 0){ 
            setFormError({ 
                message: 'Add Atleast one ingredient',
                error: true 
            })
            return 
        }

        setFormError({ 
            message: '',
            error: false
        })

        localStorage.setItem('ingredients', JSON.stringify({data: data}))
    }

    const handlePhotoForm = ( data ) => { 
        
        if ( data.length == 0){ 
            setFormError({ 
                message: 'Add Atleast one Photo',
                error: true 
            })
            return 
        }

        setFormError({ 
            message: '',
            error: false 
        })
    }


    const configureRecipeData = () => { 

        let formData = JSON.parse(localStorage.getItem('formData'))
        let ingredients = JSON.parse(localStorage.getItem('ingredients'))
        
        let configuredData = { 
            recipe_name: formData.recipeName,
            recipe_description: formData.recipeDescription,
            prep_time: formData.prepTime, 
            cook_time: formData.cookTime,
            directions: formData.recipeDirections,
            category: formData.category,
            ingredients: ingredients.data,
        }

        setRecipeData(configureRecipeData)
    }

    const publishRecipe = async () => { 
        
    }


    useEffect(() => { 
         /**
          * User useEffect here to update the formError && formMessage within the stepper fragments
         */
        
    }, [formError.error, formError.message])

    //console.log('ActivePage', activeStep)
    console.log('Error Status: ', formError.error)


    return ( 

        <Box 
            width={'100%'}>

                <Stepper
                    activeStep={activeStep}>

                        {publishStep.map(( label, index ) => { 

                            const labelProps = {} 

                            if(isStepFailed(index)){ 
                                labelProps.optional = ( 
                                    <RegularText
                                        size="14px"
                                        variant="caption"
                                        color="error"
                                        text={formError.message}/>
                                )

                                labelProps.error = true 
                            }

                            return ( 
                                <Step 
                                    key={label} >
                                    <StepLabel {...labelProps}>
                                        {label}
                                    </StepLabel>
                                </Step>
                            )

                        })}

                </Stepper>

                {activeStep === publishStep.length ? ( 

                    <Fragment>

                        <Stack 
                            direction="column"
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            display="flex"
                            maxWidth="100%"
                            height="75vh">

                                <Stack 
                                    direction="column"
                                    spacing={1}
                                    justifyContent="center"
                                    alignItems="center">

                                    <RegularText
                                        size="18px"
                                        text="Ready to Publish"/>

                                    <GenericButton
                                        variant="contained"
                                        text="Edit"
                                        onPress={handleReset}/>

                                    <GenericButton
                                        variant="contained"
                                        text="Publish Recipe"
                                    />

                                </Stack>
                        </Stack>

                    </Fragment>

                ): ( 

                    <Fragment>


                        {handleView(activeStep)}

                        <Box 
                            sx={{ 
                                display: 'flex',
                                flexDirection: 'row',
                                pt: 2
                            }}>

                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{
                                    mr: 1
                                }}>
                                Back
                            </Button>

                            <Box 
                                sx={{
                                    flex: '1 1 auto'
                                }}/>

                                <Button 
                                    color="inherit"
                                    disabled={formError.error}
                                    onClick={handleNext}>
                                        {activeStep === publishStep.length - 1 ? 'Finish': 'Next'}
                                </Button>
                                    

                        </Box>
                    </Fragment>

                )}

        </Box>
    )
}

export default PublishStepper