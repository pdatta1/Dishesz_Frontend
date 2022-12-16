

import React, { useState } from 'react'


import { Box, Stack, Typography } from "@mui/material"
import { TextField } from "@mui/material"

import { GenericButton, SubmitButton } from '../../components/buttons/MenuButtons'
import {  AuthForm} from '../../components/panels/GenericPanels'
import { RegularText } from '../../components/texts/GenericTexts'
import { Link } from 'react-router-dom'

import ImageLoader from '../../components/misc/ImageLoader'
import UserAccount from '../../session/UserAccount'


import AccountCreatedLogo from '../../icons/thumbs_up.png'


const SignupView = () => { 

    const userAccount = new UserAccount() 
    
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("") 
    const [ passwordAgain, setPasswordAgain ] = useState("") 


    const [ successCreated, setSuccessCreated ] = useState(false)
   // const [ errorCreating, setErrorCreating ] = useState(false)

    const [ helperText, updateHelperText ] = useState("")



    const handleUsernameInput = ( e ) => { 
        setUsername(e.target.value)
    }

    const handleEmailInput = ( e ) => { 
        setEmail(e.target.value)
    }

    const handlePasswordInput = ( e ) => { 
        setPassword(e.target.value)
    }

    const handlePasswordAgainInput = ( e ) => { 
        setPasswordAgain(e.target.value)
    } 



    const createUserAccount = async ( e ) => { 
        e.preventDefault() 
        const data = await userAccount.createUser(username, email, password, passwordAgain) 

        updateHelperText(data.data.message)
        setSuccessCreated(true)
    }



    return ( 

        <Box 
            mt={{xs: '20%', md: '5%'}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            >

                <AuthForm
                    shadow={2}>

                    {!successCreated ? (

                        <form onSubmit={createUserAccount}>
                            <Stack 
                                mt={5}
                                mb={3}
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center">

                                    <RegularText
                                        size="25px"
                                        text="Create An Account"/>

                                    <TextField
                                        sx={{
                                            width: { xs: '100%', md: '50%'}
                                        }}
                                        variant="outlined"
                                        label="Username"
                                        value={username}
                                        onChange={handleUsernameInput}
                                        type="text"/>

                                    <TextField
                                        sx={{
                                            width: { xs: '100%', md: '50%'}
                                        }}
                                        variant="outlined"
                                        label="Email Address"
                                        value={email}
                                        onChange={handleEmailInput}
                                        type="email"/>

                                    <TextField
                                        sx={{
                                            width: { xs: '100%', md: '50%'}
                                        }}
                                        variant="outlined"
                                        label="Password"
                                        value={password}
                                        onChange={handlePasswordInput}
                                        type="password"/>

                                    <TextField
                                        sx={{
                                            width: { xs: '100%', md: '50%'}
                                        }}
                                        variant="outlined"
                                        label="Password Again"
                                        value={passwordAgain}
                                        onChange={handlePasswordAgainInput}
                                        type="password"/>

                                    <SubmitButton
                                        text="Create Account"
                                        variant="contained"
                                        />

                                    <RegularText
                                        size="12px"
                                        text="Already have an Account?"/>

                                    <GenericButton
                                        variant="text"
                                        text="Login"
                                        to={"/login"}
                                        component={Link}/>

                            </Stack>
                        </form>
                    ): ( 
                        <Stack 
                            direction="column"
                            spacing={2}
                            justifyContent="center"
                            alignItems="center">
                            
                            <Typography
                                fontFamily="dishesz-regular"
                                fontSize={{ xs: '11px', md: '18px'}}>
                                {helperText}
                            </Typography>

                            <ImageLoader
                                height="50%"
                                image={AccountCreatedLogo}/>
                        </Stack>

                    )}


                </AuthForm>


        </Box>
    )
}

export default SignupView