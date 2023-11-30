// UserProfile.js
import React, {useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { QRCode } from 'react-qr-code';

import './userProfiles.scss';


const UserProfile = ({setHideNav}) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    console.log('togglemenu:',isMenuVisible)
    const { clientX, clientY } = e;
    setMenuPosition({ x: clientX, y: clientY });
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      console.log('closemenu click')
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);


  useEffect(() => {
    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://erniejohnson.ca/lib/api.py?user_id=${id}`, {
          method: 'POST',
          mode: 'cors',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const rawData = await response.json();
        const userData = Object.values(rawData)[0];
        setUser(userData);
        setHideNav(userData.hideNav || false);
        console.log('hideNav:',userData.hideNav)
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  useEffect(() => {
    
  }, [setHideNav]);

  if (loading) {
    // TODO - put a spinner here
    return <p>Loading...</p>;
  }

  if (!user) {
    // TODO - deal with no user
    return <div>no user...</div>;
  }
  if(user.firstName && user.lastName && user.title) {
    document.title = `${user.firstName} ${user.lastName} - ${user.title}`;
  }


  // TODO will need error checking for no user.links.
  let sortedLinks = user.links;
  if(user.links) {
    sortedLinks = user.links.sort((a, b) => a.order - b.order);
  }

  const handlePhoneButtonClick = () => {
    window.location.href = `tel:${user.phone}`;
  };


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
        <div className="user-profile-more">
          <span className='user-profile-extra' onClick={toggleMenu} >
            <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
          </span>
        </div>
        {isMenuVisible && (
        <div className="user-profile-menu"
          style={{ position: 'absolute', top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}
          ref={menuRef}
        >
          <ul>
            <li><i className="fa-solid fa-caret-right fadull"></i>&nbsp;<a href="/">Home</a></li>
            <li><i className="fa-solid fa-caret-right fadull"></i>&nbsp;Share</li>
            <li><i className="fa-solid fa-caret-right fadull"></i>&nbsp;Report</li>
          </ul>
        </div>
        )}
        <div className="user-profile-image">
          <img
            src={user.photoUrl}
            alt={`${user.firstName} ${user.lastName}`}
          />
        </div>
        <h3>{user.firstName} {user.lastName}</h3>
        <p className="user-title">{user.title}</p>
        <p><i className="fa-solid fa-location-dot"></i> {user.location}</p>
        
        <div className='social-menu'>
        <ul>
        {user.socials.twitter && (
          <li><a href={user.socials.twitter} target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter fab"></i></a></li>
        )}
        {user.socials.instagram && (
          <li><a href={user.socials.instagram} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fab"></i></a></li>
        )}
        {user.socials.github && (
          <li><a href={user.socials.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github fab"></i></a></li>
        )}
        {user.socials.youtube && (
          <li><a href={user.socials.youtube} target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube fab"></i></a></li>
        )}
        {user.socials.linkedin && (
          <li><a href={user.socials.linkedin} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fab"></i></a></li>
        )}
        {user.socials.whatsapp && (
          <li><a href={user.socials.whatsapp} target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp fab"></i></a></li>
        )}
        {user.socials.facebook && (
          <li><a href={user.socials.facebook} target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook fab"></i></a></li>
        )}
        {user.socials.tiktok && (
          <li><a href={user.socials.tiktok} target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok fab"></i></a></li>
        )}
        {user.socials.snapchat && (
          <li><a href={user.socials.snapchat} target="_blank" rel="noreferrer"><i className="fa-brands fa-snapchat fab"></i></a></li>
        )}
        </ul>
        </div>

        <div className="text-justify">
          <p>{user.bio}</p>
        </div>

        <button className='link-button' onClick={handlePhoneButtonClick}><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;{user.phone}</button>        
          {sortedLinks.map((link, index) => (
            <button className='link-button' key={index}  onClick={() => window.open(link.url)}>{link.label}</button>
          ))}
        
        {user.showqr && (
          <>
          <p>add to your contacts:</p>
          <div className="qr-padding">
            <QRCode 
              value={vCardData} 
              size={120}
              background="#fff"
              foreground="#00f"
              margin={10}
            />
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
