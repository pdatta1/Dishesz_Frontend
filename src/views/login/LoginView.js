

import React, { useState } from 'react'

import { Box, Stack, TextField } from '@mui/material'
import { RegularText } from '../../components/texts/GenericTexts'

import { AuthForm } from '../../components/panels/GenericPanels'
import { GenericButton, SubmitButton } from '../../components/buttons/MenuButtons'

import { Link , useNavigate } from 'react-router-dom'

import UserAccount from '../../session/UserAccount'

const LoginView = () => { 

    const userAccount = new UserAccount() 
    const navigate = useNavigate() 

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleUsernameInput = ( e ) => { 
        setUsername(e.target.value)
    }

    const handlePasswordInput = ( e ) => { 
        setPassword(e.target.value)
    }

    const handleAuthentication = async ( e ) => { 

        e.preventDefault() 

        let credentials = { 
            username: username, 
            password: password
        }
        await userAccount.signInUser(credentials)
        
        setUsername("")
        setPassword("")

        navigate('/')
        
    }

    return ( 
        <Box 
            mt={{xs: '20%', md: '5%'}}
            display="flex"
            justifyContent="center"
            alignItems="center">

                <Stack 
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">

                        <AuthForm
                            >

                            <form onSubmit={handleAuthentication}>
                                <Stack 
                                   mt={5}
                                   mb={3}
                                   direction="column"
                                   spacing={2}
                                   justifyContent="center"
                                   alignItems="center">

                                    <RegularText
                                        size="25px"
                                        text="Login"/>

                                    <TextField
                                        sx={{
                                            width: { xs: '100%', md: '50%'}
                                        }}
                                        variant="outlined"
                                        label="Username"
                                        type="text"
                                        value={username}
                                        onChange={handleUsernameInput}/>
                                    
                                    <TextField
                                        sx={{
                                            width: { xs: '100%', md: '50%'}
                                        }}
                                        variant="outlined"
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordInput}/>

                                    <SubmitButton
                                        text="Login"
                                        variant="contained"/>

                                    <RegularText
                                        size="12px"
                                        text="New to Dishesz?"/>
                                    
                                    <GenericButton
                                        variant="text"
                                        text="Create An Account"
                                        component={Link}
                                        to={"/signup"}/>

                                </Stack>
                            </form>

                        </AuthForm>

                </Stack>
                
        </Box>
    )
}

export default LoginView