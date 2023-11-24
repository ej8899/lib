// UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { QRCode } from 'react-qr-code';

import userData from '../userData';
import './userProfiles.scss';


const UserProfile = () => {
  const { id } = useParams();
  const user = userData[id];

  if (!user) {
    return <div>User not found</div>;
  }

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${user.firstName} ${user.lastName}
N:${user.lastName};${user.firstName}
ORG:${user.organization || ''}
TEL:${user.phone || ''}
EMAIL:${user.email || ''}
URL:${user.website || ''}
TITLE:${user.title || ''}
END:VCARD`;

  return (
    <div className="profile-wrapper">
      <div className="profile-card-wrapper">
        <div className="user-profile-image">
          <img
            src={user.photoUrl}
            alt={`${user.firstName} ${user.lastName}`}
          />
        </div>
        <h3>{user.firstName} {user.lastName} - {id}</h3>
        <p>Title: {user.title}</p>
        <p>Phone: {user.phone}</p>
        <p>Location: {user.location}</p>
        <p>{user.bio}</p>

        <ul className="user-social-links">
          <li><a href={user.socials.twitter}><i className="fa-brands fa-x-twitter soclink"></i></a></li>
          <li><a href={user.socials.instagram}><i className="fa-brands fa-instagram soclink"></i></a></li>
          <li><a href={user.socials.github}><i className="fa-brands fa-github soclink"></i></a></li>
        </ul>
        
          {user.links.map((link, index) => (
            <div className="link-item" key={index}><a href={link.url}>{link.label}</a></div>
          ))}
        

        <p>add to your contacts:</p>
        <div className="qr-padding">
          <QRCode 
            value={vCardData} 
            size={120}
            background="#fff"
            foreground="#00f"
            margin={10}
            includeMargin={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
