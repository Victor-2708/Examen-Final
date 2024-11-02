// Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h1 className="text-center text-2xl text-black mb-4">Welcome</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="number">Number</label>
            <input
              type="text"
              id="number"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter your number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-orange-500 text-white p-2 rounded mb-2">Log in</button>
          <h2 className="text-center text-black mb-4">OR</h2>
          <button className="w-full bg-orange-500 text-white p-2 rounded">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;