

/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose This file contain classes that server as a generic button link through out the webapp
 * 
 */


import React from 'react'


import { Button } from '@mui/material'


const ProfileLink = ({ username, onPress }) => { 

    /**
     * 
     * @purpose ProfileLink display the author of a certain recipe post
     *          allowing users to click on the link, therefore navigating them
     *          to the author of the recipe post
     * 
     * @param username username of the author
     * @returns A Button with appropriate render designs
     * 
     */
        
    return ( 
        <Button 
            variant="text"
            onClick={onPress}
            sx={{
                fontSize: '12px',
                width: '1rem',
                borderRadius: '10px', 
                fontFamily: 'Dishesz1'
            }}>

            {username}
        </Button>
    )
}

export { 
    ProfileLink,
}