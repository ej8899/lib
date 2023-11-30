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
        const sortedUsers = usersData.sort((a, b) => {
          const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
          const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
          return nameA.localeCompare(nameB);
        });
        setUsers(sortedUsers);
      } catch (error) {
        console.error('Error fetching users by title:', error.message);
      }
    };

    fetchUsersByTitle();
    document.title = `${title} Directory`;
  }, [title]);

  return (
    <div className='centerthis'>
      <br></br>
      <h2>{`Users with Title: ${title}`}</h2>
      <ul>
      {users.map((user) => (
          <li className='users-list-item' key={user.id}>
            <Link to={`/user/${user.id}`}>
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>{`${user.location}`}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
