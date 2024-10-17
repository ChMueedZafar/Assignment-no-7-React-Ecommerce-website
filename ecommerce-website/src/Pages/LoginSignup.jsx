// src/components/Auth.js
import React, { useState } from 'react';
import './LoginSignup.css'; // CSS file for styling

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      console.log('Login credentials:', { email, password });
    } else {
      // Handle signup
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      console.log('Signup credentials:', { email, password });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>{isLogin ? 'Login' : 'Signup'}</h2>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="input-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
          <div className="form-footer">
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign up' : 'Login'}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
