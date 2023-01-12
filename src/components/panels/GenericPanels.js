

/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose This file contain classes that handle a generic panel for the dishesz webapp
 * 
 */


import React from 'react'

import { Paper, Grow, Stack } from '@mui/material'
import { RegularText } from '../texts/GenericTexts'


const GenericPanel = ({ children, shadow, mdWidth, mdHeight }) => { 
    /**
     * 
     * @purpose 
     *      Generic works as a generic smaller size to be used thru out the webapp
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
                    height: { sm: '100%', md: mdHeight}, 
                    width: {xs: '100%', sm: '100%', md: mdWidth},
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginBottom: 1
                }}>

                    {children}

            </Paper>
        </Grow>
    )
}


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
                    width: { xs: '100%', sm: '100%', md: '80vh'},
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    overflow: 'auto',
                }}>

                    {children}

            </Paper>
        </Grow>
    )
}


const PTFPanel = ({ children, shadow }) => { 

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
                            mt: 5
                        }}>

                        <Stack 
                            direction="column"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                            >

                            <RegularText
                                size="12px"
                                text="People To Follow"/>

                            {children}

                        </Stack>

                    </Paper>
        </Grow>
    )
}


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


const SmallPanel = ({ children, shadow, mdWidth }) => { 
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
                    height: { sm: '100%', md: 'auto'}, 
                    width: {xs: '100%', sm: '100%', md: mdWidth},
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginBottom: 1
                }}>

                    {children}

            </Paper>
        </Grow>
    )
}

const ReviewPanel = ({ children, shadow, mdWidth }) => { 
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
                    height: { sm: '100%', md: '50vh'}, 
                    width: {xs: '100%', sm: '100%', md: mdWidth},
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    marginBottom: 1,
                    overflow: 'auto',
                }}>

                    {children}

            </Paper>
        </Grow>
    )
}

const AuthForm = ({ children }) => { 
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
                sx={{
                    height: { sm: '100%', md: 'auto'}, 
                    width: {xs: '100%', sm: '100%', md: '80vh'},
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    boxShadow: {xs : 0, md: 5}
                   
                }}>

                    {children}

            </Paper>
        </Grow>
    )
}





export { 
    GenericPanel,
    FeedPanel,
    SmallPanel, 
    ReviewPanel,
    AuthForm, 
    PTFPanel,
    ApproachPanel,
}