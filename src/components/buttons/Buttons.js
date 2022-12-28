/**
 * 
 * @author Patrick Atta-Baah 
 * @file Buttons.js
 * @purpose contain custom buttons for the webapp
 * 
 */

import React, { useEffect, useState } from 'react'

import { IconButton, Button } from '@mui/material'

import WidgetsIcon from '@mui/icons-material/Widgets'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import GroupRemoveIcon from '@mui/icons-material/GroupRemove'
import LogoutIcon from '@mui/icons-material/Logout'
import UserAccount from '../../session/UserAccount'


const userAccount = new UserAccount() 

const MobileMenuButton = ({ onPress }) => { 
    /**
     * @purpose Display only on mobile viewport, this button
     *          allows mobile web users to open the menu dialog
     * @param onPress: handle the click event 
     */

    return ( 

        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onPress}>

            <WidgetsIcon />
        </IconButton>


    )
}


const GenericButton = ({ text, onPress, component, to, variant }) => { 
    /**
     * @purpose generic webapp button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            component={component}
            to={to}
            sx={{
                fontSize: '15px',
                width: '12rem',
                borderRadius: '10px', 
                fontFamily: 'Dishesz1'
            }}>

            {text}
        </Button>

    )
}


const FollowButton = ({ followed, variant, username, refresh }) => { 
    /**
     * @purpose generic follow button 
     *          when click, it follows a user by username,
     *          checks whether a user is followed or not and display appropriate ui
     * @param text: text to be display on button
     * @param username: username to follow
     */
    const userAccount = new UserAccount() 

    const [ isFollowed, setIsFollowed ] = useState(followed)
    const [ isRequestUser, setIsRequestUser ] = useState(false)

    const followUserByUsername = async () => { 
        await userAccount.follow(username)
        await refresh() 
        setIsFollowed(true)
    }

    const unFollowUserByUsername = async () => { 
        await userAccount.unFollow(username)
        await refresh() 
        setIsFollowed(false)
    }


    useEffect(() => { 

        const isUserFollowing = async () => { 

            // get following array from api
            const followings = await userAccount.getFollowings() 

            // if following data exists, map and compare element to username, if equals, set isFollowed hook
            if(followings.data.followings){ 
                const followingsData = followings.data.followings 
                followingsData.map(( following ) => { 
                    if( following.user_follow && following.user_follow == username ){ 
                        setIsFollowed(true)
                        return 
                    }
                })
            }
        }

        const avoidUserFollowingSelf = () => { 

            const currentUsername =userAccount.getUsername() 
            if( username == currentUsername){ 
                setIsRequestUser(true)
            }

        }

        isUserFollowing() 
        avoidUserFollowingSelf() 

    }, [isFollowed, followed, isRequestUser])

    return ( 

        <div>
            {!isFollowed ? (
                <Button 
                    variant={variant}
                    onClick={followUserByUsername}
                    endIcon={<GroupAddIcon/>}
                    disabled={isRequestUser}
                    sx={{
                        fontSize: '12px',
                        width: '7rem',
                        borderRadius: '10px', 
                        fontFamily: 'Dishesz1'
                    }}>

                    Follow 
                </Button>
            ): ( 
                <Button 
                    variant={variant}
                    onClick={unFollowUserByUsername}
                    endIcon={<GroupRemoveIcon/>}
                    disabled={isRequestUser}
                    sx={{
                        fontSize: '12px',
                        width: '7rem',
                        borderRadius: '10px', 
                        fontFamily: 'Dishesz1', 
                        bgcolor: '#FF3333', 
                        ":hover": {
                            bgcolor: '#FF6666'
                        }
                    }}>

                    UnFollow 
                </Button>
            )}
        </div> 

    )
}



const SubmitButton = ({ text, onPress, variant, disabled }) => { 
    /**
     * @purpose generic webapp button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    console.log('Submit Enabled? ', disabled)

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            type="submit"
            disabled={disabled}
            sx={{
                fontSize: '15px',
                width: '12rem',
                borderRadius: '10px', 
                fontFamily: 'Dishesz1'
            }}>

            {text}
        </Button>

    )
}

const ViewMoreButton = ({ text, onPress, component, to, variant }) => { 
    /**
     * @purpose generic webapp button for recipeDisplay
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            component={component}
            to={to}
            sx={{
                fontSize: '12px',
                width: '7rem',
                borderRadius: '10px', 
                fontFamily: 'Dishesz1',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            }}>

            {text}
        </Button>

    )
}

const GenericLinkButton = ({ text, onPress, component, to, variant }) => { 
    /**
     * @purpose generic webapp link button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    return ( 
        <Button 
            variant={variant}
            onClick={onPress}
            component={component}
            to={to}
            sx={{
                borderRadius: '10px', 
                fontFamily: 'Dishesz1',
            }}>

            {text}
        </Button>

    )
}


const IngredientLinkButton = ({ text, link }) => { 
    /**
     * @purpose generic webapp link button
     * @param text: text to be display on button
     * @param onPress: button click event handler
     */

    const openIngredientLink = () => { 
        window.open(link, '_blank')
    }

    return ( 
        <Button 
            variant="contained"
            onClick={openIngredientLink}
            sx={{
                borderRadius: '10px', 
                fontFamily: 'Dishesz1',
            }}>

            {text}
        </Button>

    )
}


const LogoutButton = () => { 
    return ( 
        <IconButton
            size="large"
            aria-label="logout"
            color="inherit"
            onClick={() => { 
                userAccount.logoutUser() 
            }}>
            <LogoutIcon/>
        </IconButton>
    )
}


export { 
    MobileMenuButton, 
    GenericButton,
    GenericLinkButton,
    ViewMoreButton,
    IngredientLinkButton,
    SubmitButton,
    FollowButton,
    LogoutButton,
}

