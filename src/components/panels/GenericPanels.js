

/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose This file contain classes that handle a generic panel for the dishesz webapp
 * 
 */


import React from 'react'

import { Paper, Grow } from '@mui/material'


const FeedPanel = ({ children, shadow }) => { 

    /**
     * 
     * @purpose 
     *      Feed Panel serves a the main panel within the exploreFeed class,
     *      it's allow overflow with the height of 85vh so that users get a smooth feel when scrolling thru
     *      the explore feed without disrupting the overall layout
     * 
     * @param children displays the nested components that follows
     * @param shadow the amount of boxshadow to be render
     */

    return ( 
        <Grow 
        in={true}
        style={{ transformOrigin: '0 0 0'}}
        {...(true ? { timeout: 1000} : {} )}>
            <Paper 
                elevation={shadow}
                sx={{
                    height: '85vh', 
                    width: { xs: '100%', sm: '100%', md: '80vh', lg: '100vh'},
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    overflow: 'auto',
                }}>

                    {children}

            </Paper>
        </Grow>
    )
}


const SmallPanel = ({ children, shadow }) => { 
    /**
     * 
     * @purpose 
     *      SmallPanel works as a generic smaller size to be used thru out the webapp
     * 
     * @param children displays the nested components that follows
     * @param shadow the amount of boxshadow to be render
     */
    return ( 
        <Grow 
        in={true}
        style={{ transformOrigin: '0 0 0'}}
        {...(true ? { timeout: 1000} : {} )}>
            <Paper 
                elevation={shadow}
                sx={{
                    height: { sm: '100%', md: '55vh'}, 
                    width: {xs: '100%', sm: '100%', md: '80vh'},
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>

                    {children}

            </Paper>
        </Grow>
    )
}


export { 
    FeedPanel,
    SmallPanel, 
}