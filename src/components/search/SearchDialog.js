
import React, { useEffect } from 'react'

import { Dialog, DialogContent, Toolbar, AppBar, Stack, IconButton, Skeleton, Box } from '@mui/material'
import { Transition } from '../../utils/Transitions'

import CloseIcon from '@mui/icons-material/Close'
import { RegularText } from '../texts/GenericTexts'

import RecipeDisplay from '../recipe/RecipeDisplay'

import ProfileDisplay from '../users/ProfileDisplay'


const SearchDialog = ({ status, handler, searchData, searchValue, searching, searched, searchedType, authStatus, lookupHandler }) => { 




    console.log('Searched Data', searchData)
    console.log('Search Type', searchedType)
    console.log('Search Status', searched)

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
                                color="#fffff"
                                text={`Searching for ${searchValue}`}/>
                        </Toolbar>

                    </AppBar>

                    <DialogContent>


                    <Box
                        maxWidth="100%"
                        justifyContent="center"
                        alignItems="center"
                        display="flex">

                            {searching ? (
                                <Stack
                                    direction="column"
                                    spacing={2}
                                    justifyContent="center"
                                    alignItems="center"
                                    display="flex">

                                        {[1,2,3].map((index) => ( 
                                            <Skeleton
                                                key={index}
                                                variant="rectangular"
                                                width={300}
                                                height={100}/>
                                        ))}
        
                                </Stack>
                            ): ( 
                            <Stack
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                                display="flex">

                                    {searchedType == "recipes" && 

                                        <Stack
                                            direction="column"
                                            spacing={2}
                                            justifyContent="center"
                                            alignItems="center"
                                            display="flex">

                                                {searchData.map(( data, key ) => ( 
                                                    <RecipeDisplay
                                                        key={key}
                                                        recipeData={data}
                                                        isAuthenticated={authStatus}
                                                        lookupHandler={lookupHandler}/>
                                                ))}

                                        </Stack>
                                    }


                                    {searchedType == "users" && 
                                        <Stack
                                            direction="column"
                                            spacing={2}
                                            justifyContent="center"
                                            alignItems="center"
                                            display="flex">

                                                {searchData.map(( user, key ) => ( 
                                                    <ProfileDisplay
                                                        key={key}
                                                        data={user}
                                                        authStatus={authStatus}/>
                                                ))}

                                        </Stack>
                                    }

                                

                            </Stack>
                            )}

                    </Box>
                    

                    </DialogContent>
                
                
            </Dialog> 
        )
    
}

export default SearchDialog