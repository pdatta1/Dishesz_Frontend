

import React, { useState, useEffect } from 'react'

import { Box, Stack, Skeleton, Chip } from '@mui/material'


import { FeedPanel } from '../../components/panels/GenericPanels'
import ExploreFeedApi from '../../session/ExploreFeedApi'
import RecipeDisplay from '../../components/recipe/RecipeDisplay'

import InFiniteScroll from 'react-infinite-scroll-component'

import { isMobile } from '../../utils/MobileUtils'


import GetAppIcon from '@mui/icons-material/GetApp'

const MyFeed = ({ authStatus }) => { 

    const exploreFeed = new ExploreFeedApi() 

    const [ feedContainer, updateFeedContainer ] = useState([])

    const [ lookedUp, setLookedUp ] = useState(false)

    const [ feedCount, updateFeedCount ] = useState(1)

    const _loadUserFeeds = async () => { 
        
        
        const userFeeds = await exploreFeed.getUserFeeds(feedCount) 

        if ( userFeeds ){

            updateFeedContainer([...feedContainer, ...userFeeds])
            updateFeedCount((counter) => counter + 1)

        }

    }

    const _refreshUserFeeds = async () => { 


        const refreshFeeds = await exploreFeed.getUserFeeds(feedCount)

        if ( refreshFeeds ){ 

            updateFeedContainer(refreshFeeds)
            updateFeedCount((counter) => counter + 1)
        }
    }

    const _lookupHandler = async ( interestName ) => { 

        const feedData = await exploreFeed.lookupRecipeByInterest(interestName)
        if(feedData){ 
            updateFeedContainer(feedData)
            updateFeedCount((prev) => prev + 1)
            setLookedUp(true)
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


    useEffect(() => { 

        _loadUserFeeds() 

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

                    {!lookedUp ? (
                        <InFiniteScroll
                            dataLength={feedContainer.length}
                            next={_loadUserFeeds}
                            hasMore={true}
                            loader={feedLoader()}
                            refreshFunction={_refreshUserFeeds}
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
                                                recipeData={recipe}
                                                isAuthenticated={authStatus}
                                                lookupHandler={_lookupHandler}
                                                />
                                        ))}
                                </Stack>

                        </InFiniteScroll> 
                    ): ( 

                       
                           

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
                                    recipeData={recipe}
                                    isAuthenticated={authStatus}
                                    lookupHandler={_lookupHandler}
                                    />
                            ))}
                        </Stack>

                               
                               
                    )}

                </FeedPanel>
            </Stack>

        </Box>
    )
}

export default MyFeed