

import React from 'react'

import { Dialog, DialogContent, Toolbar, AppBar, Stack, IconButton } from '@mui/material'
import { Transition } from '../../utils/Transitions'


import CloseIcon from '@mui/icons-material/Close'
import { RegularText } from '../texts/GenericTexts'


import UserProfile from './leftview/LeftContainer'
import UserProfileInfo from './rightview/RightContainer'
import { GenericCircularProgress } from '../misc/GenericProgress'



const ViewProfile = ({ status, handler, loading, profileData, authStatus, refreshHandler }) => { 

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


                            {!loading ? ( 
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="close"
                                    onClick={handler}>
                                    
                                    <CloseIcon/>
                                </IconButton>
                            ): ( 
                                <GenericCircularProgress/>
                            )}

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
                                direction={{xs: 'column', md: "row"}}
                                spacing={{ xs: 2, md: 5}}
                                justifyContent="center"
                                alignItems="center"
                                display="flex">

                                    <UserProfile
                                        userData={profileData}
                                        refresh={refreshHandler}
                                        authStatus={authStatus}/> 

                                    <UserProfileInfo
                                        authStatus={authStatus}
                                        userData={profileData}/>
                                    
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