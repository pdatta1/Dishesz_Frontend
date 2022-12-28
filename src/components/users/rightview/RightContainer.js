
import React from 'react'
import { Grow, Paper, Box, Stack, Divider } from '@mui/material'
import CoverPhoto from './CoverPhoto'
import UserRecipes from './UserRecipes'
import { SmallPanel } from '../../panels/GenericPanels'
import { RegularText } from '../../texts/GenericTexts'


const UserProfileInfoPanel = ({ children, shadow }) => { 

    /**
     * 
     * @purpose 
     *      Feed Panel serves a the main panel within the exploreFeed class,
     *      it's allow overflow with the height of 85vh so that users get a smooth feel when scrolling thru
     *      the explore feed without disrupting the overall layout
     * 
     * @param children displays the nested components that follows
     * @param shadow the amount of boxshadow to be render
     */

    return ( 
        <Grow 
            in={true}
            style={{ transformOrigin: '0 0 0'}}
            {...(true ? { timeout: 1000} : {} )}>
                <Paper 
                    elevation={shadow}
                    sx={{
                        height: '85vh', 
                        width: { xs: '100%', sm: '100%', md: '70vh'},
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        overflow: 'auto', 
                        
                    }}>

                        {children}

                </Paper>
        </Grow>
    )
}


const UserProfileInfo = ({ userData, authStatus }) => { 

    return ( 
        <Stack 
            direction="column"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            display="flex">

            <RegularText
                size="18px"
                text="User Recipes"/>

            <Divider
                variant="middle"
                sx={{
                    background: '#E5E4E2',
                    width: '100%'
                }}/>



            <UserProfileInfoPanel
                shadow={0}>
                <Stack 
                    direction="column"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                    display="flex">

                      

                        <Stack 
                            direction="row"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                            display="flex">

                                <UserRecipes
                                    recipes={userData.recipes}
                                    authStatus={authStatus}/>

                        </Stack>

                        

                </Stack>

            </UserProfileInfoPanel>
        </Stack> 
    )
}

export default UserProfileInfo