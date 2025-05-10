import React, { useState, useEffect } from 'react';

const DriverDashboard = () => {
  const [assignedRides, setAssignedRides] = useState([]);
  const [earnings, setEarnings] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    // Fetch driver's assigned rides
    const savedRides = JSON.parse(localStorage.getItem('rides') || '[]');
    setAssignedRides(savedRides);
  }, []);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  const updateRideStatus = (index, newStatus) => {
    const updatedRides = [...assignedRides];
    updatedRides[index] = { ...updatedRides[index], status: newStatus };
    setAssignedRides(updatedRides);
    localStorage.setItem('rides', JSON.stringify(updatedRides));
  };

  return (
    <div className="driver-dashboard">
      <h2>Driver Dashboard</h2>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Rides</h3>
          <p className="stat-value">{assignedRides.length}</p>
        </div>
        <div className="stat-card">
          <h3>Earnings</h3>
          <p className="stat-value">${earnings}</p>
        </div>
        <div className="status-toggle">
          <h3>Availability</h3>
          <button 
            className={`toggle-button ${isAvailable ? 'available' : 'unavailable'}`}
            onClick={toggleAvailability}
          >
            {isAvailable ? 'Available' : 'Unavailable'}
          </button>
        </div>
      </div>

      <div className="rides-container">
        <h3>Assigned Rides</h3>
        {assignedRides.length === 0 ? (
          <p className="no-rides">No rides assigned yet</p>
        ) : (
          <div className="rides-list">
            {assignedRides.map((ride, index) => (
              <div key={index} className="ride-card">
                <h4>Ride #{index + 1}</h4>
                <div className="ride-details">
                  <p><strong>Passenger:</strong> {ride.passengerName}</p>
                  <p><strong>From:</strong> {ride.pickup}</p>
                  <p><strong>To:</strong> {ride.destination}</p>
                  <p><strong>Date:</strong> {ride.date}</p>
                  <p><strong>Time:</strong> {ride.time}</p>
                  <p><strong>Status:</strong> <span className={`status ${ride.status}`}>{ride.status || 'Pending'}</span></p>
                  {ride.status !== 'completed' && (
                    <div className="action-buttons">
                      {ride.status === 'pending' && (
                        <button onClick={() => updateRideStatus(index, 'started')}>Start Ride</button>
                      )}
                      {ride.status === 'started' && (
                        <button onClick={() => updateRideStatus(index, 'completed')}>Complete Ride</button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard;