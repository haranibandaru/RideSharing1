import React from 'react';

const RiderDashboard = () => {
  return (
    <div className="rider-dashboard">
      <h2>Rider Dashboard</h2>
      <div className="dashboard-content">
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button className="action-btn">
              <i className="fas fa-car"></i>
              Book a Ride
            </button>
            <button className="action-btn">
              <i className="fas fa-history"></i>
              View History
            </button>
          </div>
        </div>
        
        <div className="recent-rides">
          <h3>Recent Rides</h3>
          <div className="rides-list">
            {/* This will be populated with actual ride data */}
            <p>No recent rides to display</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;