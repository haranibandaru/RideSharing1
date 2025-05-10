import React, { useState, useEffect } from 'react';

const MyRides = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    // Fetch rides from localStorage or your backend API
    const fetchRides = () => {
      const savedRides = localStorage.getItem('rides');
      if (savedRides) {
        setRides(JSON.parse(savedRides));
      }
    };

    fetchRides();
  }, []);

  return (
    <div className="rides-list">
      {rides.length === 0 ? (
        <div>No rides booked yet.</div>
      ) : (
        rides.map((ride, index) => (
          <div key={index} className="ride-card">
            <h3>Ride #{index + 1}</h3>
            <p>From: {ride.pickup}</p>
            <p>To: {ride.destination}</p>
            <p>Date: {ride.date}</p>
            <p>Time: {ride.time}</p>
            <p>Vehicle: {ride.vehicle}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyRides;