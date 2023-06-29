import React from 'react';
import '../css/Profile.css';
import MissionProfile from './MissionProfile';
import RocketProfile from './RocketProfile';

const Profile = () => (
  <div className="profile-container">
    <MissionProfile />
    <RocketProfile />
  </div>
);

export default Profile;
