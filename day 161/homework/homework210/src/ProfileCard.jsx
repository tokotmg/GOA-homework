import React from 'react';

const ProfileCard = ({ username, biography, profilePicture }) => {
  return (
    <div className="profile-card">
      <img src={profilePicture} alt={`${username}'s profile`} />
      <h2>{username}</h2>
      <p>{biography}</p>
    </div>
  );
};

export default ProfileCard;
