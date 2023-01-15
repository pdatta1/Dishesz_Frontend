

import React, { useEffect } from 'react'


import { Dialog, DialogContent, AppBar, Toolbar } from '@mui/material'
import { Stack, Box } from '@mui/material'
import { IconButton } from '@mui/material'


import { Transition } from '../../../utils/Transitions'


import CloseIcon from '@mui/icons-material/Close'
import { RegularText } from '../../../components/texts/GenericTexts'
import PublishFeedForm from './PublishFeedForm'
import PublishStepper from './PublishStepper'


const PublishFeedDialog = ({ status, authStatus, handler }) => { 
    

    useEffect(() => { 
       
        const _loadRecipeFormDefaultData = () => { 
            /**
             * Load Default Data from localstorage to avoid error with the hooks array 
            */
            let formData = { 
                recipeName: "",
                prepTime: 5,
                cookTime: 5,
                recipeDescription: "",
                recipeDirections: "", 
                category: "",
            }

        
            localStorage.setItem('formData', JSON.stringify(formData))
            localStorage.setItem('ingredients', JSON.stringify({ data: []}))
        }

        _loadRecipeFormDefaultData()
    }, [])

    
    return ( 
        <Dialog 
            fullScreen
            open={status}
            onClose={handler}
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
                                onClick={handler}>
                                    
                                <CloseIcon/>
                            </IconButton>

                            <RegularText
                                size="14px"
                                text="Publish a Recipe"
                                color="#ffffff"/>

                        </Toolbar>

                </AppBar>


                <DialogContent
                 sx={{
                    maxWidth: '100%'
                 }}>

                    <Stack 
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                        maxWidth="100%"

                        >

                            <PublishStepper/>
                    </Stack>

                </DialogContent>


        </Dialog>
    )
}

export default PublishFeedDialog