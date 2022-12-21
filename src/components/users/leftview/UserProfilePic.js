

import { Avatar } from "@mui/material"

const UserProfilePic = ({ media }) => { 

    return ( 
        <Avatar
            src={media}
            alt="profile pic"
            sx={{ 
                width: '200px',
                height: '200px'
            }}
            >

        </Avatar>
    )
}


export default UserProfilePic