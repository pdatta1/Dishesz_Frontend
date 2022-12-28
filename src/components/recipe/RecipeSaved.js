

import React, { useState, useEffect } from 'react'

import Stack from '@mui/material/Stack'

import { RegularChip } from '../texts/GenericTexts'
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import UserAccount from '../../session/UserAccount'


const RecipeSaved = ({ saves, recipeID, refresh, savedStatus, authStatus }) => { 

    
    const userAccount = new UserAccount() 

    const [ isSaved, setIsSaved ] = useState(savedStatus) 
    
    const getSaves = () => { 
        return saves.length
    }

    const saveRecipePost = async () => { 
        
        if(!isSaved){
            await userAccount.savedRecipe(recipeID, 'saving')
            setIsSaved(true )
            await refresh() 
            return 
        }

        await userAccount.savedRecipe(recipeID, 'unsaving')
        setIsSaved(false)
        await refresh() 
        
    
    }

    //console.log(`Saved Status ID: ${recipeID} = ${savedStatus}`)

    useEffect(() => { 


        const isPostAlreadySaved = async () => { 
            
            if(authStatus){
                const responseData = await userAccount.getMyProfile() 
                saves.map(( user ) => { 
                    if ( user.user == responseData.dishesz_user){ 
                        setIsSaved(true)
                        return 
                    }
                })
            }
        }

        isPostAlreadySaved() 

    }, [isSaved, savedStatus])

    return ( 
     

            
            <form>
                {authStatus ? (
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    label={getSaves()}
                                    icon={<ThumbUpOffAltIcon/>}
                                    checkedIcon={<ThumbUpAltIcon/>}
                                    checked={isSaved}
                                    onClick={saveRecipePost} 
                                    />
                                }
                            label={getSaves()}
                        >

                        </FormControlLabel>
                    </FormGroup>
                ): ( 
                    <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                label={getSaves()}
                                icon={<ThumbUpOffAltIcon/>}
                                checkedIcon={<ThumbUpAltIcon/>}
                                disabled
                                />
                            }
                        label={getSaves()}
                    >

                    </FormControlLabel>
                </FormGroup>
                )}
            </form>

                

    )
}

export default RecipeSaved