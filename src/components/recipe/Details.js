
import React from 'react'

import { Stack } from '@mui/material'
import { RegularText, RegularChip, RegularContent } from '../texts/GenericTexts'
import { PhotoGallery } from './RecipePhoto'
import { SmallPanel } from '../panels/GenericPanels'
import { ProfileLink } from '../buttons/LinkButtons'

import ProfileCard from './ProfileCard'

const Details = ({ data }) => { 

    return ( 
            <SmallPanel
                shadow={5}
                mdWidth="70vh">
                
                <Stack 
                    mt={-3}
                    ml={{ sm: 0, md: 4}}
                    mb={5}
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
                                direction={{ xs: "column", sm: "column", md: "row"}}
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
                
                    </Stack>


                </Stack>

            </SmallPanel>
    )
}

export default Details