
import React from 'react'

import { Box, Stack } from '@mui/material'
import { Dialog, DialogContent, AppBar, Toolbar } from '@mui/material'
import { IconButton } from '@mui/material'
import { Transition } from '../../utils/Transitions'


import CloseIcon from '@mui/icons-material/Close'


import { RegularText } from '../texts/GenericTexts'

import Ingredients from './Ingredients'
import Details from './Details'
import { ReviewSection } from './Reviews'

const RecipeDetails = ({ status, handler, data, authStatus, refresh }) => { 


    return ( 
        <Dialog 
            fullScreen
            open={status}
            onClose={handler}
            TransitionComponent={Transition}>

                <AppBar sx={{ position: 'relative'}}>
                    <Toolbar>

                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handler}
                            aria-label="close">
                                <CloseIcon/>
                        </IconButton>

                        <RegularText
                            size="15px"
                            color="#ffffff"
                            text={data.recipe_name}/>

                        

                    </Toolbar>
                </AppBar>

                <DialogContent>

                    <Box 
                        justifyContent="center"
                        alignItems="center"
                        display="flex">

                        <Stack 
                            direction="column"
                            spacing={2}
                            justifyContent="center"
                            alignItems="center">

                           <Details
                                data={data}/>

                            <Ingredients
                                data={data.ingredients}/>

                            <ReviewSection
                                authStatus={authStatus}
                                fitment="full"
                                reviews={data.recipe_reviews}
                                refresh={refresh}/>

                        </Stack>
                    </Box>

                </DialogContent>



        </Dialog>

            
    )
}

export default RecipeDetails