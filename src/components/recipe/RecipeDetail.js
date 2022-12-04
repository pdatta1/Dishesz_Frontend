
import React from 'react'

import { Box, Stack, Grid } from '@mui/material'
import { Dialog, DialogContent, AppBar, Toolbar } from '@mui/material'
import { IconButton } from '@mui/material'
import { Transition } from '../../utils/Transitions'


import CloseIcon from '@mui/icons-material/Close'


import { RegularText, RegularChip, RegularContent } from '../texts/GenericTexts'
import { PhotoGallery } from './RecipePhoto'
import { SmallPanel } from '../panels/GenericPanels'
import { ProfileLink } from '../buttons/LinkButtons'

import ProfileCard from './ProfileCard'
import { IngredientLinkButton } from '../buttons/MenuButtons'

const RecipeDetails = ({ status, handler, data }) => { 



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
                            text={data.recipe_name}/>

                        

                    </Toolbar>
                </AppBar>

                <DialogContent>

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
                                        justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                        alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

                                        <ProfileCard
                                            media={data.profile_pic}/>

                                        <ProfileLink
                                            username={data.author}/>

                                    </Stack>

                                    <Stack 
                                        direction="column"
                                        spacing={2}
                                        justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                        alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

                                            <PhotoGallery
                                                photoList={data.photos}/>
                                    </Stack>


                                    <Stack 
                                        direction="column"
                                        spacing={1}
                                        display="flex"
                                        justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                        alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

                                            

                                            <Stack 
                                                direction="row"
                                                spacing={2}
                                                justifyContent="center"
                                                alignItems="center">

                                            <RegularText
                                                size="20px"
                                                text={data.recipe_name}/>

                                                <RegularChip
                                                    indicator="success"
                                                    text={data.category}/>

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
                                                    text={data.prep_time}/>

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
                                                    text={data.cook_time}/>

                                            </Stack>

                                            <Stack 
                                                direction="column"
                                                spacing={0}
                                                justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                                alignItems={{xs: "center", sm: "center", md: "flex-start"}}
                                                maxWidth="80%"
                                                sx={{
                                                    overflowWrap: 'break-word',
                                                    wordWrap: 'break-word',
                                                }}>

                                                <RegularText 
                                                    size="14px"
                                                    text="Recipe Description"/>

                                                <RegularContent
                                                    size="14px"
                                                    text={data.recipe_description}/>

                                              
                                            </Stack>

                                            <Stack 
                                                direction="column"
                                                spacing={0}
                                                justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                                alignItems={{xs: "center", sm: "center", md: "flex-start"}}
                                                maxWidth="80%"
                                                sx={{
                                                    overflowWrap: 'break-word',
                                                    wordWrap: 'break-word',
                                                }}>

                                                <RegularText 
                                                    size="14px"
                                                    text="Directions"/>

                                                <RegularContent
                                                    size="14px"
                                                    text={data.directions}/>
                                              
                                            </Stack>


                                            <Stack 
                                                direction="column"
                                                spacing={2}
                                                justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                                alignItems={{xs: "center", sm: "center", md: "flex-start"}}>

                                                <RegularText 
                                                    size="14"
                                                    text="Ingredients: "/>

                                                <Stack 
                                                    direction="row"
                                                    spacing={2}
                                                    justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                                    alignItems={{xs: "center", sm: "center", md: "flex-start"}}
                                                    columnGap={5}
                                                    rowGap={5}
                                                    sx={{
                                                        flexWrap: 'wrap',
                                                    }}
                                                    >


                                                    {data.ingredients.map((ingredient, key) => ( 
                                                        <Stack 
                                                            key={key}
                                                            direction="column"
                                                            spacing={0}
                                                            justifyContent={{xs: "center", sm: "center", md: "flex-start"}}
                                                            alignItems={{xs: "center", sm: "center", md: "flex-start"}}
                                                            
                                                           >

                                                            <RegularChip
                                                                indicator="primary"
                                                                text={ingredient.ingredient}/>

                                                            <RegularText    
                                                                size="12px"
                                                                text="Available At"/>

                                                        
                                                            

                                                                {ingredient.available_at.map((location, key) => ( 
                                                                    
                                                                    
                                                                        <Stack 
                                                                            key={key}
                                                                            direction="column"
                                                                            spacing={1}
                                                                            justifyContent="center"
                                                                            alignItems="center"
                                                                            
                                                                        >
                                                                            
                                                                            <IngredientLinkButton
                                                                                text={location.store_name}
                                                                                link={location.store_link}/>

                                                                            <RegularChip
                                                                                indicator="secondary"
                                                                                text={`$ ${location.store_price}`}/>

                                                                        </Stack>


                                                                ))}

                                                        </Stack>
                                                    
                                                    ))}

                                                
                                                </Stack>

                                         
    
                                            </Stack>

                                   
                                    </Stack>


                                </Stack>

                        </SmallPanel>

                    </Box>

                </DialogContent>



        </Dialog>

            
    )
}

export default RecipeDetails