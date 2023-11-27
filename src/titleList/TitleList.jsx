// TitleList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TitleList = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    // Fetch the list of unique titles from the API
    const fetchTitles = async () => {
      try {
        const response = await fetch('https://erniejohnson.ca/lib/api.py?title=all', {
          method: 'POST',
          mode: 'cors',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch titles');
        }
        const titlesData = await response.json();
        const sortedTitles = titlesData.unique_titles.sort(); // Sort titles alphabetically
        setTitles(sortedTitles);
      } catch (error) {
        console.error('Error fetching titles:', error.message);
      }
    };

    fetchTitles();
    document.title = `Employee Job Titles`;
  }, []);

  return (
    <div>
      <br></br>
      <h2>Filter by Job Titles:</h2>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>
            <Link to={`/users/${encodeURIComponent(title)}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TitleList;
