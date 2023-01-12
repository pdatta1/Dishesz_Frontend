

import React, { Fragment, useState } from 'react'

import { Box, Stepper, Step, StepLabel, Button, stepClasses } from '@mui/material'

import { GenericButton } from '../../../components/buttons/Buttons'
import { RegularText } from '../../../components/texts/GenericTexts'
import PublishFeedForm from './PublishFeedForm'
import AddIngredient from './AddIngredient'


const publishStep = [
    'Create Recipe Info',
    'Add Ingredients',
    'Add Photos',
    'Publish'
]


const PublishStepper = () => { 


    const [ activeStep, setActiveStep ] = useState(0)
    const [ skipped, setSkipped ] = useState(new Set())

    const [ recipeData, setRecipeData ] = useState({})




    const isStepOptional = ( step ) => { 
        return step === 1
    }

    const isStepSkipped = ( step ) => { 
        return skipped.has(step)
    }

    const handleNext = () => { 

        let newSkipped = skipped

        if (isStepSkipped(activeStep)) { 

            newSkipped = new Set(newSkipped.values())
            newSkipped.delete(activeStep)

        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setSkipped(newSkipped)
    }

    const handleBack = () => { 
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleSkip = () => { 
        
        if(!isStepOptional(activeStep)){ 
            throw new Error('This page cannot be skipped')
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setSkipped((prevSkipped) => { 
            const newSkipped = new Set(prevSkipped.values())
            newSkipped.add(activeStep)
            return newSkipped
        })
    }

    const handleReset = () => { 
        setActiveStep(0)
    }

    const handleView = ( step ) => { 

        if(step === 0){
            return ( <PublishFeedForm/>)
        }

        else if (step === 1){ 
            return ( <AddIngredient/>)
        }
    }


 

    console.log('ActivePage', activeStep)

    return ( 

        <Box 
            width={'100%'}>

                <Stepper
                    activeStep={activeStep}>

                        {publishStep.map(( label, index ) => { 

                            const stepProps = {} 
                            const labelProps = {} 

                            if (isStepOptional(index)){ 
                                labelProps.optional = ( 
                                    <RegularText
                                        fontSize="12px"
                                        variant="caption"
                                        text="Optional"/>
                                )
                            }

                            if (isStepSkipped(index)) { 
                                stepProps.completed = false 
                            }

                            return ( 
                                <Step 
                                    key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>
                                        {label}
                                    </StepLabel>
                                </Step>
                            )

                        })}

                </Stepper>

                {activeStep === publishStep.length ? ( 

                    <Fragment>

                        <RegularText
                            font="18px"
                            text="Review your Recipe and Publish"/>

                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                pt: 2
                            }}>
                            <Box 
                                sx={{
                                    flex: '1 1 auto'
                                }}/>
                            <GenericButton
                                variant="contained"
                                text="Edit"
                                onPress={handleReset}/>

                        </Box>

                    </Fragment>

                ): ( 

                    <Fragment>

                        <RegularText
                            font="14px"
                            text={`Step ${activeStep + 1}`}/>

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

                            {isStepOptional(activeStep) && ( 
                                <Button 
                                    color="inherit"
                                    onClick={handleSkip}
                                    sx={{
                                        mr: 1
                                    }}>
                                    Skip 
                                </Button>
                            )}

                            <Button 
                                color="inherit"
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