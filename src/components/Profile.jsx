import React from 'react';
import "./profile.scss"
import {Person} from "@mui/icons-material";

const Profile = ({data}) => {
  return (
    <div className="profile-container">
      <Person style={{fontSize: "120px"}}/>
      <h3>{data.username}</h3>
      <div>{data.email}</div>
    </div>
  );
};

export default Profile;