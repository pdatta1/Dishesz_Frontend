

/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose ExploreFeed.js handles the feed data from the backend by pulling and displaying on the 
 *               Dishesz Webapp
 * 
 */


import React, { useState, useEffect } from 'react'

import { Box, Stack } from '@mui/material'


import { FeedPanel } from '../../components/panels/GenericPanels'
import ExploreFeedApi from '../../session/ExploreFeedApi'
import RecipeDisplay from '../../components/recipe/RecipeDisplay'

const ExploreFeeds = () => { 
    /**
     * @purpose This Class Pull Data from the backend Api and displays it on the appropriate components
     * 
     * @hooks
     *      @feedContainer This hook serves as an array that host all of the feed data from the backend api
     * @methods 
     *      @_loadExploreFeed method fetch data from the getExploreFeeds method from 
     *                        the ExploreFeedApi class and set the data to the feedContainer hook
     *      
     *      @useEffect
     *              Loads the @_loadExploreFeed method before Webapp UI updates
     */

    const feedApi = new ExploreFeedApi() 

    const [ feedContainer, updateFeedContainer ] = useState([])

    const _loadExploreFeeds = async () => { 

        const feedData = await feedApi.getExploreFeeds() 
        if(feedData.data){ 
            updateFeedContainer(feedData.data)
        }
    }

    console.log('Feed Container', feedContainer)

    useEffect(() => {

        _loadExploreFeeds() 

    }, [])

    return ( 
        <Box 
            justifyContent="center" 
            alignItems="center"
            maxWidth="100%"
            display="flex">

                <FeedPanel
                    shadow={0}>

                    <Stack 
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                        sx={{
                            overflow: 'auto',
                        }}>

                            {feedContainer.map((recipe, key) => (

                                <RecipeDisplay
                                    key={key}
                                    recipeData={recipe}/>
                            ))}

                    </Stack>

                </FeedPanel>
                
        </Box>
    )
}

export default ExploreFeeds