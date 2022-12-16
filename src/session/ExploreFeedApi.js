/**
 * 
 * @author Patrick Atta-Baah
 * @file ExploreFeedApi.js
 * @purpose This file handles the explore feed rest api data
 * 
 */


import AuthInstance from "./AuthInstance"


class ExploreFeedApi extends AuthInstance{ 

    /**
     * 
     * @purpose ExploreFeedApi class handle retrieve of json restful api from dishesz backend
     * 
     */

    constructor() { 
        super() 
        this.error = false 
    }


    getExploreFeeds = async (page_count) => { 

        const feeds = await this.authInstance.get(`/recipe/view_recipes/?page=${page_count}`)

        const feedArray = feeds.data.results 
        const randomized_feeds = feedArray.sort(() => 0.5 - Math.random())
        
        return randomized_feeds

    }
}

export default ExploreFeedApi

