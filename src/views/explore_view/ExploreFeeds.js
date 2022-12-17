

/**
 * 
 * @author Patrick Atta-Baah 
 * @file_purpose ExploreFeed.js handles the feed data from the backend by pulling and displaying on the 
 *               Dishesz Webapp
 * 
 */


import React, { useState, useEffect } from 'react'

import { Box, Stack, Skeleton, Chip, IconButton } from '@mui/material'


import { FeedPanel } from '../../components/panels/GenericPanels'
import ExploreFeedApi from '../../session/ExploreFeedApi'
import RecipeDisplay from '../../components/recipe/RecipeDisplay'

import InFiniteScroll from 'react-infinite-scroll-component'

import { isMobile } from '../../utils/MobileUtils'


import GetAppIcon from '@mui/icons-material/GetApp'



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

    const [ feedContainer, updateFeedContainer ] = useState([])
    
    const [ feedCount, updateFeedCount ] = useState(1)
    const [ feedLoading, setFeedLoading ] = useState(false)


    //console.log('Feed Container', feedContainer)
    const _refreshExploreFeeds = async () => { 

        const feedApi = new ExploreFeedApi() 


        setFeedLoading(true)
        const feedData = await feedApi.getExploreFeeds(feedCount)

        if(feedData){
            updateFeedContainer(feedData)
            updateFeedCount((prev) => prev += 1)
            setFeedLoading(false)
        }

    }

    const _loadExploreFeeds = async () => { 

        const feedApi = new ExploreFeedApi() 


        setFeedLoading(true)
        const feedData = await feedApi.getExploreFeeds(feedCount)

        if(feedData){
            updateFeedContainer([...feedContainer, ...feedData])
            updateFeedCount((prev) => prev += 1)
            setFeedLoading(false)
        }

    }


    const feedLoader = () => { 
        return ( 
            <div>
            {[1,2,3,4,5].map((index) => ( 
                <Skeleton 
                    key={index}
                    variant="rectangular"  
                    width='100%'
                    height='20rem'/>
            ))}
            </div>
        )
    }


    console.log(feedContainer) 
    //console.log('Feed Count', feedCount)

    

    useEffect(() => {
        
            _loadExploreFeeds() 


    }, [])

    return ( 
        <Box 
            justifyContent="center" 
            alignItems="center"
            maxWidth="100%"
            >

            <Stack 
                direction="column"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                >



                {isMobile() && 
                    <Chip
                        variant="outlined"
                        label="Pull Down to Refresh"
                        icon={<GetAppIcon/>}
                        />
                }

                <FeedPanel
                    shadow={0}>

                    <InFiniteScroll
                        dataLength={feedContainer.length}
                        next={_loadExploreFeeds}
                        hasMore={true}
                        loader={feedLoader()}
                        refreshFunction={_refreshExploreFeeds}
                        pullDownToRefresh
                        pullDownToRefreshThreshold={50}
                        height='85vh'>

                            <Stack 
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                                
                                sx={{
                                    overflow: 'auto',
                                }}>

                                    
                                    {feedContainer.map((recipe, key) => (

                                        <RecipeDisplay
                                            key={key}
                                            recipeData={recipe}/>
                                    ))}
                            </Stack>

                    </InFiniteScroll> 

                </FeedPanel>
            </Stack>

        </Box>
    )
}

export default ExploreFeeds