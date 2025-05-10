import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleSelector from './VehicleSelector';

const BookRide = () => {
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [booking, setBooking] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: ''
  });
  
  const handleVehicleSelect = (vehicleId) => {
    setSelectedVehicle(vehicleId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the new ride object
    const newRide = {
      pickup: booking.pickup,
      destination: booking.dropoff,
      date: booking.date,
      time: booking.time,
      vehicle: selectedVehicle
    };
    
    // Get existing rides from localStorage
    const existingRides = JSON.parse(localStorage.getItem('rides') || '[]');
    
    // Add new ride to the array
    const updatedRides = [...existingRides, newRide];
    
    // Save back to localStorage
    localStorage.setItem('rides', JSON.stringify(updatedRides));
    
    // Redirect to the rides page
    navigate('/rides');
  };

  return (
    <div className="book-ride">
      <h2>Book a Ride</h2>
      <VehicleSelector
        selectedVehicle={selectedVehicle}
        onVehicleSelect={handleVehicleSelect}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pickup Location"
          value={booking.pickup}
          onChange={(e) => setBooking({...booking, pickup: e.target.value})}
        />
        <input
          type="text"
          placeholder="Dropoff Location"
          value={booking.dropoff}
          onChange={(e) => setBooking({...booking, dropoff: e.target.value})}
        />
        <input
          type="date"
          value={booking.date}
          onChange={(e) => setBooking({...booking, date: e.target.value})}
        />
        <input
          type="time"
          value={booking.time}
          onChange={(e) => setBooking({...booking, time: e.target.value})}
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookRide;