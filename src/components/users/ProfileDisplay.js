
import React, { useEffect, useState } from 'react'

import { Card, Avatar, Stack } from '@mui/material'
import { FollowButton, ViewMoreButton } from '../buttons/Buttons'
import UserAccount from '../../session/UserAccount'
import ViewProfile from './ViewProfile'
import { assignProfilePics } from '../../tests/TestFeeds'
import { GenericCircularProgress } from '../misc/GenericProgress'



const ProfilePhoto = ({ media }) => { 

    return ( 
        <Avatar
            src={assignProfilePics()}
            alt="profile pic"
            >

        </Avatar>
    )
}


const ProfileDisplay  = ({ data, authStatus }) => { 

    const userAccount = new UserAccount() 

    const [ viewProfileStatus, setViewProfileStatus ] = useState(false)
    const [ profileData, setProfileData ] = useState() 
    const [ followStatus, setFollowStatus ] = useState(false)

    const [ loading, setLoading ] = useState(false)

    const handleViewProfile = async () => { 

        setLoading(true)

        const profile = await userAccount.viewProfileByUsername(data.username)
        await isUserFollowing() 
        
        setProfileData(profile.data.user_profile)
        setViewProfileStatus(!viewProfileStatus)

        setLoading(false)
    }

    const refreshUserProfile = async () => { 
        const profile = await userAccount.viewProfileByUsername(data.username)
        setProfileData(profile.data.user_profile)
    }

    const isUserFollowing = async () => { 

        // get following array from api
        const followings = await userAccount.getFollowings() 

        // if following data exists, map and compare element to username, if equals, set isFollowed hook
        if(followings.data.followings){ 
            const followingsData = followings.data.followings 
            followingsData.map(( following ) => { 
                if( following.user_follow && following.user_follow == data.username ){ 
                    setFollowStatus(true)
                    return  
                }
            })
        }
    }


    //console.log('Profile Data', profileData)

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


                    {!loading ? ( 
                        <ViewMoreButton
                            variant="text"
                            text={data.username}
                            onPress={handleViewProfile}/>
                    ): ( 
                        <GenericCircularProgress/>
                    )}


                </Stack>

                <FollowButton
                    variant="contained"
                    username={data.username}
                    refresh={refreshUserProfile}
                    followed={followStatus}/>
               

            </Stack>
            
            <ViewProfile
                status={viewProfileStatus}
                handler={handleViewProfile}
                profileData={profileData}
                authStatus={authStatus}
                loading={loading}
                refreshHandler={refreshUserProfile}/>
                
        </Card>

    )
}

export default ProfileDisplay