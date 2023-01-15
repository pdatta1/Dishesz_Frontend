
import React, { useEffect, useRef, useState } from 'react'

import { IconButton, CardMedia, Grid, Stack } from '@mui/material'
import { RegularChip, RegularText } from '../../../components/texts/GenericTexts'
import { GenericPanel } from '../../../components/panels/GenericPanels'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'


const PublishFeedPhotos = ({ errorStatus, errorHandler }) =>  { 
    /**
     * 
     * PublishFeedPhotos is the third stage of publishing a recipe,
     * it handles the upload of files into the webui
     * 
     * @param errorStatus: indicates whether the is an error within the component upon uploads
     * @param errorHandler: handle the error that is detected
     * 
     */

    // useRef's

    const hiddenFileInput = useRef(null)

    // hooks 

    const [ photos, setPhotos ] = useState([])
    const [ photoError, setPhotoError ] = useState(errorStatus)


    //handlers

    const handleCustomButton = () => { 
        hiddenFileInput.current.click()
    }

    const handlePhotos = ( event ) => { 
        /***
         * 
         * @purpose handlePhotos takes care of the uploading of photos to the webui
         *          it detects when the length of the files is greater than 1, 
         *          proceeds to map the files and add it to the photos array of the element and 
         *          such index as 1, due to th photo file been at index 1
         * 
         *          if the files length is not greater than 1
         *          it makes the proceeds and map the file and insert the element index 1
         * 
         *          both choices are similar but the reason why it's done this way is due to 
         *          when there are multiple files, each upload is within a nested array of all the files
         *          within that specific upload, inorder to combat this, when each upload length is greater than 1,
         *          it finds those nested arrays and thet the index 1 of such nested arrays
         * 
         * @param event: gets the event.target.files of upload
         *          
         */
        
        let files = event.target.files 

        if ( files.length > 1 ){ 

            Object.entries(files).map((file) => { 
                setPhotos(( prevState ) => [...prevState, file[1]])
            })

            return 
        }

        Object.entries(files).map((file) => { 
            setPhotos(( prevState ) => [...prevState, file[1]])
        })

        console.log('File Length', files.length)

    }

    const displayPhoto = ( photo ) => { 
        /**
         * @purpose displayPhoto is responsible for generating a url to 
         *          be display on the webui
         * 
         * @param photo: The photo to be translated to a uri
         */
        let photoURL = URL.createObjectURL(photo)
        return photoURL
    }

    useEffect(() => { 

        errorHandler(photos)

    }, [photoError, photos.length])

    console.log('Photos', photos)

    return ( 
        <GenericPanel
            shadow={3}
            mdWidth="100%"
            mdHeight={"75vh"}>
            

                <Stack 
                    direction="column"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                    mt={5}
                    >

                    <RegularText
                        size="18px"
                        text="Upload Recipe Photos"/>

                    <RegularChip
                        indicator="primary"
                        text="Going back will result in lost of uploaded photos"/>      

                   

                    <IconButton
                        onClick={handleCustomButton}
                        size="large"
                        aria-label="upload">
                        <CloudUploadIcon/>
                    </IconButton>

                    <input 
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotos}
                        ref={hiddenFileInput}
                        style={{ display: 'none'}}/>

                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                        spacing={1}
                        width="100vh"
                        height="50vh"
                        overflow="auto">

                            {photos.map((photo, index) => ( 

                                <Grid 
                                    item 
                                    key={index}>

                                    <CardMedia
                                        src={displayPhoto(photo)}
                                        component="img"
                                        sx={{ 
                                            height: 'auto',
                                            width: '250px',
                                            objectFit: 'contain'
                                        }}/>
                                    
                                </Grid> 

                            ))}

                    </Grid>

                </Stack>

        </GenericPanel>

    )
}

export default PublishFeedPhotos