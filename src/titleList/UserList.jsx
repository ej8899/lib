// UserList.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserList = () => {
  const { title } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users based on the selected title from the API
    const fetchUsersByTitle = async () => {
      try {
        const response = await fetch(`https://erniejohnson.ca/lib/api.py?title=${title}`, {
          method: 'POST',
          mode: 'cors',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users by title');
        }
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users by title:', error.message);
      }
    };

    fetchUsersByTitle();
  }, [title]);

  return (
    <div className='centerthis'>
      <h2>{`Users with Title: ${title}`}</h2>
      <ul>
      {users.map((user) => (
          <li className='users-list-item' key={user.id}>
            <Link to={`/user/${user.id}`}>
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>{`Location: ${user.location}`}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
