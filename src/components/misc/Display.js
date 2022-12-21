

import { 
        Dialog, 
        Stack, 
        IconButton,
    } from '@mui/material'
    
import CloseIcon from '@mui/icons-material/Close'
import { RegularText } from '../texts/GenericTexts'
import { Transition } from '../../utils/Transitions'

const Display = ({ displayData, handler}) => { 


    const handleIndicator = () => { 
        let hex_code = ""

        if(displayData.indicator=="error"){ 
            hex_code = "#FF9494"
            return hex_code
        }

        if(displayData.indicator=="info"){ 
            hex_code = "#000000"
            return hex_code
        }

    }

    return ( 
        <Dialog 
            fullWidth
            open={displayData.status}
            onClose={handler}
            TransitionComponent={Transition}>

            <Stack 
                direction="column"
                spacing={3}
                justifyContent="center"
                alignItems="center"
                display="flex">

                <Stack 
                    direction="column"
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    display="flex">

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
                        size="14px"
                        color={handleIndicator}
                        text={displayData.text}/>
                </Stack>

                <RegularText
                    size="14px"
                    color={handleIndicator}
                    text={displayData.content}/>
                    


            </Stack>

        </Dialog>

    )
}

export default Display 