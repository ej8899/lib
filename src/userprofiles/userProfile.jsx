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

  // TODO will need error checking for no user.links.
  let sortedLinks = user.links;
  if(user.links) {
    sortedLinks = user.links.sort((a, b) => a.order - b.order);
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
        <p><i className="fa-solid fa-phone"></i> {user.phone}</p>
        <p><i className="fa-solid fa-location-dot"></i> {user.location}</p>
        <p>{user.bio}</p>

        <div className='social-menu'>
        <ul>
          <li><a href={user.socials.twitter}><i className="fa-brands fa-x-twitter fab"></i></a></li>
          <li><a href={user.socials.instagram}><i className="fa-brands fa-instagram fab"></i></a></li>
          <li><a href={user.socials.github}><i className="fa-brands fa-github fab"></i></a></li>
        </ul>
        </div>
        
          {sortedLinks.map((link, index) => (
            <button className='link-button' key={index}  onClick={() => window.open(link.url)}>{link.label}</button>
          ))}
        

        <p>add to your contacts:</p>
        <div className="qr-padding">
          <QRCode 
            value={vCardData} 
            size={120}
            background="#fff"
            foreground="#00f"
            margin={10}
            includemargin={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
