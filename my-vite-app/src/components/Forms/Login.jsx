// src/components/Login.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password,
            });
    
            alert('Login successful!'); // Show alert for successful login
            navigate('/home')
        } catch (error) {
            alert('Error logging in: ' + (error.response?.data?.detail || 'Please try again.')); // Show alert for error
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
          <p>Create new Account? <NavLink className='text-blue-700' to='/signup'>Create</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
