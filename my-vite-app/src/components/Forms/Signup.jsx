// src/components/Signup.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/signup/', {
        username,
        email,
        password,
      });
      alert('Sign up successful!'); // Show alert instead of console.log
      navigate('/home')
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up: ' + error.response?.data?.detail || 'Please try again.'); // Optional: show error alert
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
          >
            Sign Up
          </button>
          <p>Already have an account? <NavLink className='text-blue-700' to='/login'>Login</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
