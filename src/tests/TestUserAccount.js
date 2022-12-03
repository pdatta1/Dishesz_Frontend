

import UserAccount from "../session/UserAccount"


const testSignIn = async () => { 

    const userAccount = new UserAccount() 
    const data = { 
        "username": "patrick1", 
        "password": "password123"
    }
    await userAccount.signInUser()
}


const main = async () => { 

    await testSignIn() 
}


main() 