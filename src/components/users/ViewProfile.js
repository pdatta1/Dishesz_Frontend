

import React from 'react'

import { Dialog, DialogContent, Toolbar, AppBar, Stack, IconButton } from '@mui/material'
import { Transition } from '../../utils/Transitions'


import CloseIcon from '@mui/icons-material/Close'
import { RegularText } from '../texts/GenericTexts'
import UserProfilePic from './leftview/UserProfilePic'



const ViewProfile = ({ status, handler, profileData }) => { 

    if(profileData){
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
                                text={profileData.username}/>
                        </Toolbar>

                    </AppBar>

                    <DialogContent>
                        <Stack
                            direction="column"
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            display="flex"> 

                            <Stack
                                direction="row"
                                spacing={5}
                                justifyContent="center"
                                alignItems="center"
                                display="flex">

                                    
                                    
                            </Stack>
                        
                        </Stack>

                    </DialogContent>


            </Dialog>
        )
        
    }

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

                        
                    </Toolbar>

                </AppBar>

                <DialogContent>

                    <Stack
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        display="flex">

                            <RegularText
                                size="18px"
                                text="Error Loading User Profile"/>

                    </Stack>
                </DialogContent>


        </Dialog>
    )
    
}

export default ViewProfile