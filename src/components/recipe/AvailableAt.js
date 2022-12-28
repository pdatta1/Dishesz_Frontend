

import React from 'react'

import { Dialog, DialogContent, Grid, Stack, IconButton, Divider } from '@mui/material'

import { IngredientLinkButton } from '../buttons/Buttons'
import { RegularChip, RegularText } from '../texts/GenericTexts'

import { Transition } from '../../utils/Transitions'

import CloseIcon from '@mui/icons-material/Close'


const AvailableAt = ({ status, handler, data }) => { 

        
    return ( 

            <Dialog 
                fullWidth
                open={status}
                onClose={handler}
                TransitionComponent={Transition}>

                <Stack 
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    display="flex">

                <Stack 
                    direction="row"
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    mt={2}>

                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handler}
                        aria-label="close"
                        sx={{
                            position: 'absolute', 
                            left: 5
                        }}>
                            <CloseIcon/>
                    </IconButton> 

                    <RegularText
                        size="18px"
                        text="Available At: "/>

                </Stack> 

                    <DialogContent>   

                        {!data.length == 0 ? (

                            <Grid 
                                container
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                spacing={1}
                                >

                                    {data.map(( location, key ) => ( 

                                        <Grid 
                                            key={key}
                                            item
                                            >

                                            <Stack 
                                                direction="column"
                                                spacing={2}
                                                justifyContent="center"
                                                alignItems="center"
                                                display="flex"
                                                mb={1}
                                                >
    

                                                <IngredientLinkButton
                                                    text={location.store_name}
                                                    link={location.store_link}/>

                                                <RegularChip
                                                    indicator="secondary"
                                                    text={`$ ${location.store_price}`}/>
                                            </Stack> 


                                            <Divider
                                                variant="middle"
                                                sx={{
                                                    background: '#E5E4E2',
                                                    width: '100%'
                                                }}/>

                                        </Grid> 
                                    ))}

                            </Grid>
                        ): ( 
                            <RegularText
                                size="18px"
                                text="Nothing to Display"/>
                        )}

                    </DialogContent>

                </Stack> 

            </Dialog>
        )

}

export default AvailableAt