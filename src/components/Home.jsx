import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to RideShare</h1>
        <p>Your trusted ride-sharing platform for safe and comfortable journeys</p>
        <Link to="/book" className="cta-button">Book a Ride</Link>
      </div>
      
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Safe Rides</h3>
            <p>Verified drivers and real-time tracking for your safety</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-clock"></i>
            <h3>24/7 Service</h3>
            <p>Available round the clock for your convenience</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-dollar-sign"></i>
            <h3>Best Prices</h3>
            <p>Competitive rates and transparent pricing</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-star"></i>
            <h3>Top Rated</h3>
            <p>Highly rated service by our satisfied customers</p>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Book Your Ride</h3>
            <p>Enter your pickup and drop-off locations</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Get Matched</h3>
            <p>We'll connect you with the nearest driver</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Enjoy the Ride</h3>
            <p>Track your ride in real-time and travel safely</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;