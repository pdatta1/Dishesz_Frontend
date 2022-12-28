/**
 * 
 * @author Patrick Atta-Baah 
 * @file DisheszAppBar.js
 * @purpose custom AppBar that renders a UI based on the user's authentication state
 * 
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { Box, AppBar, Stack, Toolbar, IconButton, Badge } from '@mui/material'

import { RegularText } from '../texts/GenericTexts'
import { MobileMenuButton, GenericLinkButton, LogoutButton }from '../buttons/Buttons'
import SearchBar from '../search/SearchBar'
import { isMobile } from '../../utils/MobileUtils'

import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ExploreIcon from '@mui/icons-material/Explore'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'


const DisheszAppBar = ({ isAuthenticated }) => { 

    /**
     * @purpose  displays components that handles basic user interactivities & navigation 
     * @param isAuthenticated: determines if user is authenticated, based on authentication status, specifics components UI are render
     */




    console.log('Auth Status', isAuthenticated)

    if(!isAuthenticated){ 
        return ( 
            <Box 
                display="flex">
                
                <AppBar 
                    position="fixed"
                    component="nav"
                    sx={{
                        'backgroundColor': '#0093E9',
                        'backgroundImage': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
                        }}>

                        <Toolbar>

                        {!isMobile() && 
                                <RegularText 
                                    variant="h4"
                                    text="Dishesz"
                                    color="#ffffff"/>
                        }

                                <Box sx={{ flexGrow: { xs: 0, md: .9}}}></Box>

                                <Box 
                                    sx={{ 
                                        display: { xs: 'block', sm: 'block', md: 'block' },
                                        flexGrow: {xs: 1, md:  0}
                                        }}>

                                    <SearchBar/> 
                                </Box>

                                <Box sx={{ flexGrow: { xs: 1, md: .8}}}></Box>

                                                            

                            <Box 
                                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>

                                <Stack 
                                    direction="row"
                                    spacing={3}>

                                        <GenericLinkButton
                                            variant="inherit"
                                            component={Link}
                                            to={"/signup"}
                                            text="Sign up"/>

                                        <GenericLinkButton
                                            variant="inherit"
                                            component={Link}
                                            to={"/login"}
                                            text="Login"/>
                                </Stack>

                            </Box> 

                            <Box
                                sx={{ 
                                    display: {xs: 'block', md: 'none'}, 
                                    position: "absolute", 
                                    right: -5
                                    }}>

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
                position="fixed"
                component="nav"
                sx={{
                    'backgroundColor': '#0093E9',
                    'backgroundImage': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
                    }}>

                    <Toolbar>

                            {!isMobile() && 
                                <RegularText 
                                    variant="h4"
                                    text="Dishesz"
                                    color="#ffffff"/>
                            }

                            <Box sx={{ flexGrow: { xs: 0, md: .75}}}></Box>

                            <Box 
                                sx={{ 
                                    display: { xs: 'block', sm: 'block', md: 'block' },
                                    flexGrow: {xs: 1, md:  0}
                                    }}>

                                <SearchBar
                                    authStatus={isAuthenticated}/> 
                            </Box>

                            <Box sx={{ flexGrow: { xs: 1, md: .8}}}></Box>

                            <Box 
                                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>

                                <Stack 
                                    direction="row"
                                    spacing={0}>


                                        <IconButton
                                            aria-label="feeds"
                                            size="large"
                                            color="inherit"
                                            to={"/explore"}
                                            component={Link}>

                                                <ExploreIcon/>

                                        </IconButton>

                                        <IconButton
                                            aria-label="explore"
                                            size="large"
                                            color="inherit"
                                            to={"/my_feeds"}
                                            component={Link}>

                                                <DynamicFeedIcon/>

                                        </IconButton>


                                        <IconButton
                                            aria-label="profile"
                                            size="large"
                                            color="inherit"
                                            to={"/my_profile"}
                                            component={Link}
                                            >

                                                <PersonOutlineIcon/>

                                        </IconButton>


                                        <IconButton
                                            aria-label="notification"
                                            size="large"
                                            color="inherit">

                                                <Badge
                                                    badgeContent={3}
                                                    color="error">
                                                        <NotificationsNoneIcon
                                                            color="#fff"/>
                                                </Badge>

                                        </IconButton>
                                        
                                        <LogoutButton/>

                                        
                                </Stack>

                            </Box> 

                            <Box
                                sx={{ 
                                    display: {xs: 'block', md: 'none'}, 
                                    position: "absolute", 
                                    right: -5
                                    }}>

                                <MobileMenuButton/>
                            </Box>

                    </Toolbar>

            </AppBar>



        </Box>
    )


}

export default DisheszAppBar