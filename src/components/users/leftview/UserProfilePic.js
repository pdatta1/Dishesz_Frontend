

import { Avatar } from "@mui/material"

const UserProfilePic = ({ media }) => { 

    return ( 
        <Avatar
            src={media}
            alt="profile pic"
            sx={{ 
                width: '100px',
                height: '100px'
            }}
            >

        </Avatar>
    )
}


export default UserProfilePic