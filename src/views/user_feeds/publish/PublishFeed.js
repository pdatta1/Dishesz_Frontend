

import React, { useState } from 'react'

import { SmallPanel } from '../../../components/panels/GenericPanels'
import { RegularText } from '../../../components/texts/GenericTexts'
import { GenericButton } from '../../../components/buttons/Buttons'

import { Stack } from '@mui/material'
import PublishFeedDialog from './PublishFeedDialog'


const PublishFeed = ({ authStatus }) => { 


    const [ publishDialogStatus, setPublishDialogStatus ] = useState(false)
    

    const handlePublishDialog = () => { 
        setPublishDialogStatus(!publishDialogStatus)
    }

    return ( 
        <SmallPanel
            shadow={3}
            mdWidth="35vh">

            <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center" 
                display="flex"
                mt={5}
                mb={5}>

                    <RegularText
                        size="14px"
                        text="Post Something"/>
                    
                    <GenericButton
                        variant="outlined"
                        text="Publish a recipe"
                        onPress={handlePublishDialog}/>

            </Stack>

            <PublishFeedDialog
                status={publishDialogStatus}
                handler={handlePublishDialog}
                authStatus={authStatus}/>

        </SmallPanel>
    )
}

export default PublishFeed