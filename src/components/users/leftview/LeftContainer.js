

import React from "react"

import { Paper, Grow } from ''


const ApproachPanel = ({ children, shadow }) => { 

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
                        width: { xs: '100%', sm: '100%', md: '30vh'},
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        overflow: 'auto',
                    }}>

                        {children}

                </Paper>
        </Grow>
    )
}