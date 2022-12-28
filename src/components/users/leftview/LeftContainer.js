

import React, { useState } from "react"

import { Paper, Grow, Box, Divider } from '@mui/material'
import { Stack } from "@mui/material"

import { ClickableChip, RegularChip, RegularText } from '../../texts/GenericTexts'

import UserProfilePic from "./UserProfilePic"
import { FollowButton } from "../../buttons/Buttons"
import UserFollowers from "./UserFollowers"
import Userfollowings from "./UserFollowings"
import { assignProfilePics } from "../../../tests/TestFeeds"
import UserLikes from "../UserLikes"


const UserProfilePanel = ({ children, shadow }) => { 

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
                        width: { xs: '100%', sm: '100%', md: '30vh'},
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        overflow: 'auto',
                    }}>

                        {children}

                </Paper>
        </Grow>
    )
}

const UserSocialView = ({ followers, username, followings, likes, authStatus }) => { 

    const [ followersDialogStatus, setFollowerDialogStatus ] = useState(false)
    const [ followingsDialogStatus, setFollowingsDialogStatus ] = useState(false)
    const [ likesDialogStatus, setLikesDialogStatus ] = useState(false)

    const handleFollowersDialog = () => { 
        setFollowerDialogStatus(!followersDialogStatus)
    }

    const handleFollowingsDialog = () => { 
        setFollowingsDialogStatus(!followingsDialogStatus)
    }

    const handleLikesDialog = () => { 
        setLikesDialogStatus(!likesDialogStatus)
    }


    return ( 
        <Stack 
            direction="column"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            display="flex">

                <Stack 
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    display="flex">

                    <Stack 
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        display="flex">

                            <ClickableChip
                                indicator="primary"
                                onPress={handleFollowersDialog}
                                text={followers.length}/>

                            <RegularText
                                size="11px"
                                text="Followers"/>

                    </Stack>

                    
                     <Stack 
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        display="flex">

                            <ClickableChip
                                indicator="primary"
                                onPress={handleFollowingsDialog}
                                text={followings.length}/>

                            <RegularText
                                size="11px"
                                text="Followings"/>

                     </Stack>


                     <Stack 
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        display="flex">

                            <ClickableChip
                                indicator="primary"
                                text={likes.length}
                                onPress={handleLikesDialog}/>

                            <RegularText
                                size="11px"
                                text="Likes"/>

                     </Stack>





                </Stack>

                <UserFollowers
                    status={followersDialogStatus}
                    handler={handleFollowersDialog}
                    username={username}
                    followers={followers}
                    authStatus={authStatus}/>

                <Userfollowings
                    status={followingsDialogStatus}
                    handler={handleFollowingsDialog}
                    username={username}
                    followings={followings}
                    authStatus={authStatus}/>

                <UserLikes
                    status={likesDialogStatus}
                    handler={handleLikesDialog}
                    username={username}
                    data={likes}
                    authStatus={authStatus}/>            

        </Stack>
    )
}


const UserProfile = ({ userData, authStatus, refresh }) => { 

    return (
        
        <Box>
        <UserProfilePanel
            shadow={0}>

            <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                display="flex">

                    <UserProfilePic
                        media={assignProfilePics()}/>

                    <RegularText
                        size="16px"
                        text={userData.username}/>

                    <FollowButton
                        variant="contained"
                        username={userData.username}
                        refresh={refresh}/>

                    <UserSocialView
                        followers={userData.followers}
                        followings={userData.followings}
                        likes={userData.likes}
                        username={userData.username}
                        authStatus={authStatus}/>

                    <Divider
                        variant="middle"
                        sx={{
                            background: '#E5E4E2',
                            width: '100%'
                        }}/>

                    <RegularText
                        size="14px"
                        text="Interests"/>

                    <Stack 
                        direction="column"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                        display="flex">

                            {userData.interests.map(( interest, key) => ( 
                                <RegularChip
                                    key={key}
                                    text={interest}
                                    indicator="primary"/>
                            ))}

                    </Stack>


            </Stack>

        </UserProfilePanel>
        </Box>
    )
}

export default UserProfile