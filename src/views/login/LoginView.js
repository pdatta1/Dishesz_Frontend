

import React, { useState } from 'react'

import { Box, Stack, TextField } from '@mui/material'
import { RegularText } from '../../components/texts/GenericTexts'

import { AuthForm } from '../../components/panels/GenericPanels'
import { GenericButton, SubmitButton } from '../../components/buttons/Buttons'

import { Link , Navigate, useNavigate } from 'react-router-dom'

import UserAccount from '../../session/UserAccount'
import Display from '../../components/misc/Display' 

const LoginView = () => { 

    const userAccount = new UserAccount() 
    const navigate = useNavigate() 

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const [ displayData, setDisplayData ] = useState({ 
        status: false, 
        indicator: "",
        text: "",
        content: ""
    })


    const handleDisplay = () => { 
        setDisplayData({ status: !displayData.status})
    }

    const handleUsernameInput = ( e ) => { 
        setUsername(e.target.value)
    }

    const handlePasswordInput = ( e ) => { 
        setPassword(e.target.value)
    }

    const validateCredential = () => { 
        
       if (username.length == 0 || password.length == 0){ 
            return false 
       }
       return true 
       
    }

    const refreshComponents = ( relocate ) => { 

        setUsername("")
        setPassword("")

        if ( relocate ){ 
            navigate("/")
        }
    }

    const handleAuthentication = async ( e ) => { 

        e.preventDefault() 
        let isValid = validateCredential() 

        if(!isValid){ 
            setDisplayData({ 
                status: true, 
                indicator: "error",
                text: "Check Login Info"
            })
            return 
        }

        let credential = { 
            username: username,
            password: password
        }

        await userAccount.signInUser(credential)
            .then(() => { 
                refreshComponents(true)
            })
           .catch(() => { 
            setDisplayData({ 
                status: true, 
                indicator: "error",
                text: "Error Signin in",
                content: "Incorrect Username and Password Combination"

            })
            refreshComponents(false)
            
           })

       
    
        
       
        
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
                                        variant="contained"
                                        onPress={validateCredential}/>

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

                <Display
                    handler={handleDisplay}
                    displayData={displayData}/>
                
        </Box>
    )
}

export default LoginView