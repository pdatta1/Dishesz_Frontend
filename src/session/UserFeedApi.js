import AuthInstance from "./AuthInstance";



class UserFeedAPI extends AuthInstance{ 

    constructor() { 
        super() 
        this.error = false 
        this.formData = new FormData() 
    }


    publishRecipe = async ( data ) => { 

        const responseData = await this.authInstance.post('create_or_update_recipe/', data)
        const createdRecipeID = responseData.data.id 
        
        return createdRecipeID

    }

    assignPhotos = async ( photos, recipeID) => { 

        console.log(`Configuring Recipe ${recipeID} Photos`)
        
        for( const [key, value] of Object.entries(photos)){ 

            this.formData.append('src', value)
            this.formData.append('recipe_id', parseInt(recipeID))

            this.removeAuthHeaders('Content-Type')
            this.addAuthHeaders('Content-Type', 'multipart/form-data')

            await this.authInstance('recipe/assign_recipe_photos/', this.formData)

            console.log(`Uploaded Photo # ${key}`)

        }
    }

}

export default UserFeedAPI