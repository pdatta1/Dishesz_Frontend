/**
 * 
 * @author Patrick Atta-Baah 
 * @file ExplooreView.js
 * @purpose Explore View handles the layout of the explore page
 * 
 */


import React, { useEffect, useState } from 'react'


import { Box, Stack } from '@mui/material'
import RecipeAdsView from './RecipeAds'
import ExploreFeeds from './ExploreFeeds'
import ApproachView from './Approach'
import PeopleToFollow from './PeopleToFollow'
import UserAccount from '../../session/UserAccount'


const ExploreView = () => { 
    /**
     * @purpose Explore View handles the layout of the explore page
     *          by implementing a three way layout, RecipeAdsView, ExploreFeeds, ApproachView
     */

    const userAccount = new UserAccount()
    const accessToken = userAccount.getLocalAccessToken() 
    const [ isAuthenticated, updateIsAuthenticated ] = useState(false)


    useEffect(() => { 

        const checkAuth = () => { 
            if(accessToken){ 
                updateIsAuthenticated(true)
            }
        }

        checkAuth()
    }, [])

    return ( 
        <Box 
            display="flex"
            justifyContent="center" 
            alignItems="center"
            maxWidth="100%">

                <Stack
                    direction={{xs: "column", sm:"column", md: "row"}}
                    spacing={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center">

                        
                        <RecipeAdsView/>
                        <ExploreFeeds/>
                        {!isAuthenticated ? (
                            <ApproachView/>
                        ): (
                            <PeopleToFollow/>
                        )
                        }

                </Stack>

        </Box>

    )
}

export default ExploreView