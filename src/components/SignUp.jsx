import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'passenger'
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Get current counts from localStorage
      const currentDrivers = JSON.parse(localStorage.getItem('totalDrivers') || '0');
      const currentPassengers = JSON.parse(localStorage.getItem('totalPassengers') || '0');

      // Store user data
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));

      // Update counts based on role
      if (formData.role === 'driver') {
        localStorage.setItem('totalDrivers', JSON.stringify(currentDrivers + 1));
      } else if (formData.role === 'passenger') {
        localStorage.setItem('totalPassengers', JSON.stringify(currentPassengers + 1));
      }

      // Store authentication info
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', formData.role);
      localStorage.setItem('userEmail', formData.email);

      // Redirect based on role
      if (formData.role === 'driver') {
        navigate('/driver-dashboard');
      } else {
        navigate('/book');
      }
    } catch (error) {
      setError('Failed to create account. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-box">
          <h2>Create Account</h2>
          <p className="signup-subtitle">Join our ride-sharing community</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="role">Sign up as</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="passenger">Passenger</option>
                <option value="driver">Driver</option>
              </select>
            </div>
            
            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>
          
          <div className="signup-footer">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;