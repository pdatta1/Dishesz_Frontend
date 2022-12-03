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


    getExploreFeeds = async () => { 
        return await this.authInstance.get('/recipe/view_recipes/')
    }
}

export default ExploreFeedApi

