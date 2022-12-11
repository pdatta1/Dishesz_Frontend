

import React from 'react'
import { Link } from 'react-router-dom'


import { Box, Stack } from '@mui/material'


import { RegularText } from '../../components/texts/GenericTexts'
import { SmallPanel } from '../../components/panels/GenericPanels'
import { GenericButton } from '../../components/buttons/MenuButtons'
const ApproachView = () => { 

    return ( 
        <Box 
            width="25vh"
            maxWidth="100%"
            sx={{
                display: {
                    xs: 'none', sm: 'none', md: 'none', lg: 'flex'
                }
            }}
            >
            <SmallPanel
                shadow={0}>
                <Stack 
                    mt={5}
                    direction="column"
                    spacing={3}
                    justifyContent="center"
                    alignItems="center">

                    <Stack 
                        mt={5}
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center">

                        <RegularText
                            size={"18px"}
                            text="New to Dishesz?"/>
                        
                        <GenericButton
                            text="Sign up"
                            variant={"contained"}/>

                    </Stack>


                    <Stack 
                        mt={5}
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center">

                        <RegularText
                            size={"18px"}
                            text="or"/>

                        <GenericButton
                            variant={"contained"}
                            text="Login"
                            component={Link}
                            width={"100vh"}
                            to={'/login'}/>

                    </Stack>

                        


                        
                            

                </Stack>

            </SmallPanel>
                
        </Box>
    )
}

export default ApproachView