import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [rides, setRides] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    // Fetch data from localStorage
    const savedRides = JSON.parse(localStorage.getItem('rides') || '[]');
    const savedDrivers = JSON.parse(localStorage.getItem('drivers') || '[]');
    const savedPassengers = JSON.parse(localStorage.getItem('passengers') || '[]');
    
    setRides(savedRides);
    setDrivers(savedDrivers);
    setPassengers(savedPassengers);
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Rides</h3>
          <p className="stat-value">{rides.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Drivers</h3>
          <p className="stat-value">{drivers.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Passengers</h3>
          <p className="stat-value">{passengers.length}</p>
        </div>
      </div>

      <div className="admin-section">
        <h3>Recent Rides</h3>
        <div className="rides-list">
          {rides.map((ride, index) => (
            <div key={index} className="ride-card">
              <h4>Ride #{index + 1}</h4>
              <div className="ride-details">
                <p><strong>Passenger:</strong> {ride.passengerName}</p>
                <p><strong>Driver:</strong> {ride.driverName || 'Unassigned'}</p>
                <p><strong>From:</strong> {ride.pickup}</p>
                <p><strong>To:</strong> {ride.destination}</p>
                <p><strong>Date:</strong> {ride.date}</p>
                <p><strong>Status:</strong> <span className="status">{ride.status || 'Pending'}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;