/**
 * 
 * @author Patrick Atta-Baah 
 * @file DisheszAppBar.js
 * @purpose custom AppBar that renders a UI based on the user's authentication state
 * 
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { Box, AppBar, Stack, Toolbar } from '@mui/material'

import { RegularText } from '../texts/GenericTexts'
import { MobileMenuButton, GenericLinkButton }from '../buttons/MenuButtons'

const DisheszAppBar = ({ isAuthenticated }) => { 

    /**
     * @purpose  displays components that handles basic user interactivities & navigation 
     * @param isAuthenticated: determines if user is authenticated, based on authentication status, specifics components UI are render
     */


    console.log('Auth Status ', isAuthenticated)
    if(!isAuthenticated){ 
        return ( 
            <Box 
                display="flex"
                sx={{ 
                    'backgroundColor': '#0093E9',
                    'backgroundImage': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
                }}>
                
                <AppBar 
                    position="fixed"
                    component="nav">

                        <Toolbar>

                           <RegularText 
                                variant="h4"
                                text="Dishesz"/>

                            <Box 
                                sx={{ flexGrow: 1}}></Box>

                            <Box 
                                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>

                                <Stack 
                                    direction="row"
                                    spacing={3}>

                                        <GenericLinkButton
                                            component={Link}
                                            to={"/signup"}
                                            text="Sign up"/>

                                        <GenericLinkButton
                                            component={Link}
                                            to={"/login"}
                                            text="Login"/>
                                </Stack>

                            </Box> 

                            <Box
                                sx={{ display: {xs: 'block', md: 'none'}}}>

                                <MobileMenuButton/>
                            </Box>

                        </Toolbar>

                </AppBar>

            </Box>
        )
    }


    return (
        <Box 
            display="flex">

            <AppBar 
                component="nav">

            </AppBar>

        </Box>
    )


}

export default DisheszAppBar