import React from 'react';

const VehicleSelector = ({ selectedVehicle, onVehicleSelect }) => {
  const vehicles = [
    { id: 'auto', name: 'Auto', icon: '🛺', price: '₹15/km' },
    { id: 'car', name: 'Car', icon: '🚗', price: '₹20/km' },
    { id: 'premium', name: 'Premium', icon: '🚙', price: '₹25/km' },
    { id: 'bike', name: 'Bike', icon: '🏍️', price: '₹12/km' }
  ];

  return (
    <div className="vehicle-options">
      <h3>Choose Your Ride</h3>
      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <label
            key={vehicle.id}
            className={`vehicle-option ${selectedVehicle === vehicle.id ? 'selected' : ''}`}
          >
            <input
              type="radio"
              name="vehicle"
              value={vehicle.id}
              checked={selectedVehicle === vehicle.id}
              onChange={(e) => onVehicleSelect(e.target.value)}
            />
            <span className="vehicle-icon">{vehicle.icon}</span>
            <span className="vehicle-name">{vehicle.name}</span>
            <span className="vehicle-price">{vehicle.price}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelector;