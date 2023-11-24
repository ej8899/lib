// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import userData from '../userData';
import './userProfiles.scss';


const UserProfile = () => {
  const { id } = useParams();
  const user = userData[id];

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="profile-wrapper">
      <div>
        <img src={user.photoUrl} alt={`${user.firstName} ${user.lastName}`} />
        <h3>{user.firstName} {user.lastName} - {id}</h3>
        <p>{user.bio}</p>
        <p>Phone: {user.phone}</p>
        <p>Location: {user.location}</p>
        <p>Title: {user.title}</p>

        <h4>Socials</h4>
        <ul>
          <li><a href={user.socials.twitter}><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href={user.socials.instagram}><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href={user.socials.github}><i className="fa-brands fa-github"></i></a></li>
        </ul>

        <h4>Links</h4>
        <ul>
          {user.links.map((link, index) => (
            <li key={index}><a href={link.url}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
