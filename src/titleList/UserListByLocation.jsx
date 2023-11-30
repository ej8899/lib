// UserListByLocation.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserListByLocation = () => {
  const { location } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users in the specific location from the API
    const fetchUsersByLocation = async () => {
      try {
        const response = await fetch(`https://erniejohnson.ca/lib/api.py?location=${location}`, {
          method: 'POST',
          mode: 'cors',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users by location');
        }
        const usersData = await response.json();
        const sortedUsers = usersData.sort((a, b) => {
          const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
          const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
          return nameA.localeCompare(nameB);
        });
        setUsers(sortedUsers);
      } catch (error) {
        console.error('Error fetching users by location:', error.message);
      }
    };

    fetchUsersByLocation();
    document.title = `Employee Locations for ${location}`;
  }, [location]);

  return (
    <div className='centerthis'>
      <br></br>
      <h2>{`Users in ${location}`}</h2>
      <ul>
        {users.map((user) => (
          <li className='users-list-item' key={user.id}>
            <Link to={`/user/${user.id}`}>
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
              <p>{`${user.title}`}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListByLocation;
