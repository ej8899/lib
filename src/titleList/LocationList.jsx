// LocationList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch the list of all locations from the API
    const fetchLocations = async () => {
      try {
        const response = await fetch('https://erniejohnson.ca/lib/api.py?location=all', {
          method: 'POST',
          mode: 'cors',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch locations');
        }
        
        const locationsData = await response.json();
        const strippedData = locationsData.unique_locations;
        const sortedLocations = strippedData.sort(); // Sort locations alphabetically
        setLocations(sortedLocations);
      } catch (error) {
        console.error('Error fetching locations:', error.message);
      }
    };

    fetchLocations();
    document.title = `Employee Locations`;
  }, []);

  return (
    <div>
      <br></br>
      <h2>Review Employees by Locations:</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            <Link to={`/location/${encodeURIComponent(location)}`}>{location}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
