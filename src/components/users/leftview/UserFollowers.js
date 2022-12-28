

import React, { useEffect, useState } from 'react'

import { Dialog, DialogContent, AppBar, Toolbar, Stack, IconButton } from '@mui/material'

import { RegularText } from '../../texts/GenericTexts'
import { Transition } from '../../../utils/Transitions'

import CloseIcon from '@mui/icons-material/Close'
import ProfileDisplay from '../ProfileDisplay'
import UserAccount from '../../../session/UserAccount'

const UserFollowers = ({ status, handler, username, followers, authStatus }) => { 

    const userAccount = new UserAccount() 
    const [ UserFollowers, setUserFollowers ] = useState([])

    console.log('Followers', UserFollowers)

    useEffect(() => { 

       const _loadUserFollowers = async () => { 
            
            followers.map( async ( follower ) => { 

                const responseData = await userAccount.viewProfileByUsername(follower)
                setUserFollowers(( prev ) => [...prev, responseData.data.user_profile])

            })
       }

       _loadUserFollowers() 

    }, [])

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
                            text={`${username}'s Followers`}/>

                    </Toolbar>

                </AppBar>

                <DialogContent>

                    {!followers.length == 0 ? (
                        <Stack 
                            direction="column"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                            display="flex">

                                {UserFollowers.map((follower, key) => ( 
                                    <ProfileDisplay
                                        key={key}
                                        data={follower}
                                        authStatus={authStatus}/>

                                ))}


                        </Stack>
                    ): ( 
                        <Stack 
                            direction="column"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                            display="flex">


                        </Stack>
                    )}

                </DialogContent>
        </Dialog>
    )
}

export default UserFollowers