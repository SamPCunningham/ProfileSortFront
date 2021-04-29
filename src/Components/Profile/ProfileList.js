import React from 'react';

const ProfileList = (props) => {
    return (
    <div>
        Profile List
        <ul>
        {props.profiles.map(profile => 
        <div key={profile._id} style={{border: "1px solid", paddingBottom: '10px'}}>
            <li style={{listStyleType: 'none', paddingBottom: '10px'}} key={profile.name}>{profile.name}</li>
            <li style={{listStyleType: 'none', paddingBottom: '10px'}} key={profile.bio}>{profile.bio}</li>
        </div>
        )}
        </ul>
    </div>
    
    );
}
 
export default ProfileList;