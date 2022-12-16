

import React, { useState, useEffect } from 'react'


import { Box, Stack } from '@mui/material'


import { RegularText } from '../../components/texts/GenericTexts'
import { PTFPanel, SmallPanel } from '../../components/panels/GenericPanels'
import UserAccount from '../../session/UserAccount'
import ProfileDisplay from '../../components/users/ProfileDisplay'


const PeopleToFollow = () => { 

    const [ suggestedPeople, updateSuggestedPeople ] = useState([])

    useEffect(() => { 

        const userAccount = new UserAccount() 
        
        const _loadSuggestedPeople = async () => { 
            
            const response = await userAccount.listPeopleToFollow() 
            updateSuggestedPeople(response.data.data)
        }

        _loadSuggestedPeople() 
    }, [])

    return ( 
        <Box 
            width="25vh"
            maxWidth="100%"
            sx={{
                display: {
                    xs: 'none', sm: 'none', md: 'none', lg: 'block'
                }
            }}
            justifyContent="center"
            alignItems="center"
            >
            <Stack 
                direction="column"
                justifyContent="center"
                alignItems="center"
                >

                <RegularText
                    size={"18px"}
                    text="People To Follow"/>

                    
                <PTFPanel
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

                        
        

                            <Stack 
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                                display="flex">

                                {suggestedPeople.map((people, key) => ( 

                                    <ProfileDisplay
                                        key={key}
                                        data={people}/>
                                        
                                ))}
                            </Stack> 

                        
                        </Stack>

                    </Stack>

                </PTFPanel>
            </Stack>
                
        </Box>
    )
}

export default PeopleToFollow