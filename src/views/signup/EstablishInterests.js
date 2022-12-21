

import React, { useState, useEffect } from 'react'

import { Box, Card, Checkbox, FormControlLabel, FormGroup, Grid, Stack } from '@mui/material'
import { FeedPanel, SmallPanel } from '../../components/panels/GenericPanels'
import { RegularText } from '../../components/texts/GenericTexts'
import { GenericButton, GenericLinkButton, SubmitButton } from '../../components/buttons/Buttons'

import { Link } from 'react-router-dom'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AccountCreatedLogo from '../../icons/thumbs_up.png'


import UserAccount from '../../session/UserAccount'
import ImageLoader from '../../components/misc/ImageLoader'


const EstablishInterests = () => { 


    const [ interestCollection, setInterestCollection ] = useState([])

    const loadInterestCollections = async () => { 

        const userAccount = new UserAccount() 
        const interests = await userAccount.getAllInterests() 
        setInterestCollection(interests)

    }

    useEffect(() => { 
        
        loadInterestCollections() 
    }, [])


    return ( 
        <Box    
            justifyContent="center"
            alignItems="center"
            display="flex">

               
                   
                        <Stack 
                            direction="column"
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            mt={5}>



                            {!interestCollection.length == 0 ? (
                                <InterestCollections
                                    collection={interestCollection}/>
                            ): ( 
                                <Stack 
                                    direction="column"
                                    spacing={2}
                                    justifyContent="center"
                                    alignItems="center">

                                    <RegularText
                                        size="14px"
                                        text="Error Loading Interests"
                                        color="#ff3333"/>

                                    <GenericButton
                                        text="Reload"
                                        onPress={loadInterestCollections}/>

                                </Stack>
                            )}

                
                        </Stack>


        </Box>
    )
}

const InterestCollections = ({ collection }) => { 

    const userAccount = new UserAccount() 
    const [ addToInterest, setAddToInterest ] = useState([])
    const [responseStatus, updateResponseStatus ] = useState({ 
        success: false, 
        error: true,
    })

    
    const handleInterestCheck = ( event ) => { 
        if(event.target.checked){
            let config = { 
                'interest_name': event.target.value
            }
            setAddToInterest((prev) => [...prev, config])
        }else{ 
            setAddToInterest(addToInterest.filter(interest => interest.interest_name !== event.target.value))
        }

    }

    const establishUserInterests = async ( event ) => { 

        event.preventDefault() 

        if ( addToInterest.length >= 5){

            const response = await userAccount.establishInterests(addToInterest)
            if(response.status == 200){ 
                updateResponseStatus({ 
                    success: true 
                })
                return 
            }

        }

    }

    useEffect(() => { 


        if( addToInterest.length >= 5){ 
            updateResponseStatus({ 
                error: false  
            })
        }else{ 
            updateResponseStatus({ 
                error: true 
            })
        }


    }, [addToInterest.length])

    console.log("Interests Added", addToInterest.length)
    console.log('Min 5', responseStatus.error)
    return ( 

       
            <div>
            
            
                {!responseStatus.success ? (

                <Stack 
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    mb={5}>

                    <RegularText
                        text="Choose Your Interests (min. 5)"
                        size="18px"/>

                    <FeedPanel
                        shadow={5}>

                        <form onSubmit={establishUserInterests}>
                            <Stack
                                mt={5} 
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                                display="flex"
                                mb={5}>

                                    <Grid 
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="row"
                                        spacing={1}>

                                        {collection.map( (interest, key) => (

                                            <Grid item 
                                                key={key}>
                                                <Card
                                                    sx={{
                                                        width: { xs: '15rem', md: '20rem'},
                                                        height: 'auto',
                                                        boxShadow: 2,
                                                        justifyContent: 'center', 
                                                        alignItems: 'center',
                                                    }}>

                                                    
                                                            <FormGroup
                                                            sx={{
                                                                justifyContent: 'center', 
                                                                alignItems: 'center',
                                                            }}>
                                                                <FormControlLabel
                                                                    control={<Checkbox
                                                                                label={interest}
                                                                                icon={<FavoriteBorderIcon/>}
                                                                                checkedIcon={<FavoriteIcon/>}
                                                                                onChange={handleInterestCheck}
                                                                                value={interest}
                                                                                
                                                                                />
                                                                            }
                                                                    label={interest}/>
                                                            </FormGroup>
                                                                
                                                </Card>
                                            </Grid>
                                        ))}

                                    </Grid>

                                <SubmitButton
                                    text="Continue"
                                    variant="contained"
                                    disabled={responseStatus.error}/>
                            </Stack>
                        </form>
                    </FeedPanel>
            </Stack> 
                ): (
                    
                    <SmallPanel>
                        <Stack 
                            direction="column"
                            spacing={0}
                            justifyContent="center"
                            alignItems="center"
                            mb={5}
                            >

                                <RegularText
                                    size="18px"
                                    text="Interests Added"/>

                                <ImageLoader
                                    height="20%"
                                    image={AccountCreatedLogo}/>

                                <GenericButton
                                    variant="contained"
                                    text="Continue"
                                    onPress={() => { 
                                        window.location.reload() 
                                    }}/>
                        </Stack>
                    </SmallPanel>
                )}
        </div>
    )
}


export default EstablishInterests