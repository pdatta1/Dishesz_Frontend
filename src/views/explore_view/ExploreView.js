/**
 * 
 * @author Patrick Atta-Baah 
 * @file ExplooreView.js
 * @purpose Explore View handles the layout of the explore page
 * 
 */


import React from 'react'


import { Box, Stack } from '@mui/material'
import RecipeAdsView from './RecipeAds'
import ExploreFeeds from './ExploreFeeds'
import ApproachView from './Approach'


const ExploreView = () => { 
    /**
     * @purpose Explore View handles the layout of the explore page
     *          by implementing a three way layout, RecipeAdsView, ExploreFeeds, ApproachView
     */

    return ( 
        <Box 
            display="flex"
            justifyContent="center" 
            alignItems="center"
            maxWidth="100%">

                <Stack
                    direction="row"
                    spacing={4}
                    display="flex">

                        <RecipeAdsView/>
                        <ExploreFeeds/>
                        <ApproachView/>

                </Stack>

        </Box>

    )
}

export default ExploreView