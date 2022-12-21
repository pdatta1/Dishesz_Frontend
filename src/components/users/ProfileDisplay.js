
import React, { useState } from 'react'

import { Card, Avatar, Stack } from '@mui/material'
import { FollowButton, UnFollowButton, ViewMoreButton } from '../buttons/Buttons'
import UserAccount from '../../session/UserAccount'
import ViewProfile from './ViewProfile'



const ProfilePhoto = ({ media }) => { 

    return ( 
        <Avatar
            src={media}
            alt="profile pic"
            >

        </Avatar>
    )
}


const ProfileDisplay  = ({ data }) => { 

    const userAccount = new UserAccount() 

    const [ followed, setFollowed ] = useState(false)
    const [ viewProfileStatus, setViewProfileStatus ] = useState(false)
    const [ profileData, setProfileData ] = useState() 

    const handleViewProfile = async () => { 

        const profile = await userAccount.viewProfileByUsername(data.username)
        setProfileData(profile.data.user_profile)
        setViewProfileStatus(!viewProfileStatus)
    }

    const followSuggestedUser = async () => { 
        await userAccount.follow(data.username)
        setFollowed(true)
    }

    const unfollowSuggestedUser = async () => { 
        await userAccount.unFollow(data.username)
        setFollowed(false)
    }

    console.log('Profile Data', profileData)

    return ( 
        <Card 
            sx={{
                width: 200,
                height: 100,
                maxWidth: 300,
                maxHeight: 100, 
                boxShadow: 4,
                border: '5%'
            }}>

            <Stack 
                direction="column"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                display="flex">

                <Stack 
                    direction="row"
                    spacing={0}
                    justifyContent="center"
                    alignItems="center"
                    >

                    <ProfilePhoto
                        media={data.profile_pic}/>

                    <ViewMoreButton
                        variant="text"
                        text={data.username}
                        onPress={handleViewProfile}/>


                </Stack>

                {!followed ? (
                    <FollowButton
                        variant="contained"
                        text="follow"
                        onPress={followSuggestedUser}/>
                ): ( 
                    <UnFollowButton
                        variant="contained"
                        text="unfollow"
                        onPress={unfollowSuggestedUser}/>
                )}

            </Stack>
            
            <ViewProfile
                status={viewProfileStatus}
                handler={handleViewProfile}
                profileData={profileData}/>
                
        </Card>

    )
}

export default ProfileDisplay