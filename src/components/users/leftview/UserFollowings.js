import React, { useEffect, useState } from 'react'

import { Dialog, DialogContent, AppBar, Toolbar, Stack, IconButton } from '@mui/material'

import { RegularText } from '../../texts/GenericTexts'
import { Transition } from '../../../utils/Transitions'

import CloseIcon from '@mui/icons-material/Close'
import ProfileDisplay from '../ProfileDisplay'
import UserAccount from '../../../session/UserAccount'

const Userfollowings = ({ status, handler, username, followings, authStatus }) => { 

    const userAccount = new UserAccount() 
    const [ Userfollowings, setUserfollowings ] = useState([])

    console.log('followings', Userfollowings)

    useEffect(() => { 

       const _loadUserfollowings = async () => { 
            
            followings.map( async ( follower ) => { 

                const responseData = await userAccount.viewProfileByUsername(follower)
                setUserfollowings(( prev ) => [...prev, responseData.data.user_profile])

            })
       }

       _loadUserfollowings() 

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
                            text={`${username}'s followings`}/>

                    </Toolbar>

                </AppBar>

                <DialogContent>

                    {!followings.length == 0 ? (
                        <Stack 
                            direction="column"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                            display="flex">

                                {Userfollowings.map((follower, key) => ( 
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

export default Userfollowings