import React, { useState, useEffect } from 'react';

const PassengerDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch passenger's bookings from localStorage
    const savedRides = JSON.parse(localStorage.getItem('rides') || '[]');
    setBookings(savedRides);
  }, []);

  return (
    <div className="passenger-dashboard">
      <h2>Passenger Dashboard</h2>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Rides</h3>
          <p className="stat-value">{bookings.length}</p>
        </div>
      </div>

      <div className="bookings-container">
        <h3>Your Bookings</h3>
        {bookings.length === 0 ? (
          <p className="no-bookings">No rides booked yet</p>
        ) : (
          <div className="rides-list">
            {bookings.map((booking, index) => (
              <div key={index} className="ride-card">
                <h4>Booking #{index + 1}</h4>
                <div className="ride-details">
                  <p><strong>From:</strong> {booking.pickup}</p>
                  <p><strong>To:</strong> {booking.destination}</p>
                  <p><strong>Date:</strong> {booking.date}</p>
                  <p><strong>Time:</strong> {booking.time}</p>
                  <p><strong>Vehicle:</strong> {booking.vehicle}</p>
                  <p><strong>Status:</strong> <span className="status">{booking.status || 'Pending'}</span></p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PassengerDashboard;