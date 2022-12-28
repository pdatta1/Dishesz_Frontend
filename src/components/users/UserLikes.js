

import React, { useEffect, useState } from 'react'

import { Dialog, AppBar, Toolbar, Stack, DialogContent, Checkbox, FormGroup, FormControlLabel, TextField } from '@mui/material'
import { IconButton, Rating } from '@mui/material'

import { Transition } from '../../utils/Transitions'
import { RegularText } from '../texts/GenericTexts'
import UserProfileInfo from './rightview/RightContainer'

import CloseIcon from '@mui/icons-material/Close'
import UserRecipes from './rightview/UserRecipes'


const UserLikes = ({ status, handler, username, data, authStatus }) => { 

    return ( 
        <Dialog 
            fullWidth
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
                        text={`${username}'s Liked Recipes`}/>

                </Toolbar>

            </AppBar>

            <DialogContent>

               <Stack 
                    direction="column"
                    spacing={1} 
                    justifyContent="center"
                    alignItems="center"
                    display="flex">

                        <UserRecipes
                            recipes={data}
                            authStatus={authStatus}/>

                </Stack>

            </DialogContent>

        </Dialog> 

    )
}

export default UserLikes