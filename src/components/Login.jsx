import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'passenger'
  });
  const [error, setError] = useState('');

  // Predefined user credentials
  const userCredentials = {
    passenger: {
      email: 'passenger@rideshare.com',
      password: 'passenger123'
    },
    driver: {
      email: 'driver@rideshare.com',
      password: 'driver123'
    },
    admin: {
      email: 'admin@rideshare.com',
      password: 'admin123'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Check if credentials match predefined users
    const roleCredentials = userCredentials[formData.role];
    if (roleCredentials.email === formData.email && 
        roleCredentials.password === formData.password) {
      try {
        // Store user info in localStorage
        localStorage.setItem('userRole', formData.role);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', formData.email);
        
        // Redirect based on role
        switch(formData.role) {
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'driver':
            navigate('/driver-dashboard');
            break;
          default:
            navigate('/book');
        }
      } catch (err) {
        setError('Failed to login. Please try again.');
      }
    } else {
      setError('Invalid email or password for selected role');
    }
  };

  // Auto-fill credentials when role changes
  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setFormData({
      ...formData,
      role: selectedRole,
      email: userCredentials[selectedRole].email,
      password: userCredentials[selectedRole].password
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Login to your account</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="role">Login as</label>
              <select
                id="role"
                value={formData.role}
                onChange={handleRoleChange}
              >
                <option value="passenger">Passenger</option>
                <option value="driver">Driver</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
          </div>

          <div className="credentials-info">
            <h3>Demo Credentials</h3>
            <div className="credential-set">
              <p><strong>Passenger:</strong> passenger@rideshare.com / passenger123</p>
              <p><strong>Driver:</strong> driver@rideshare.com / driver123</p>
              <p><strong>Admin:</strong> admin@rideshare.com / admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;