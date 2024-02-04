"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Define static email and password for demonstration purposes
  const staticEmail = 'demo@example.com';
  const staticPassword = 'demo123';

  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from causing a page reload

    // Check if the entered credentials match the static ones
    if (email === staticEmail && password === staticPassword) {
      // Redirect to the /dashboard route on successful login
      router.push('/dashboard');
    } else {
      // Update the error message state if credentials do not match
      setErrorMessage('Incorrect email or password. Please use the static credentials.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/ue-ihub.webp')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        
        <form className="flex flex-col items-center" onSubmit={handleLogin}>
          <div className="mb-4 w-full">
            <h1 className="text-3xl font-semibold mb-4" style={{ color: '#ef4444' }}>Login</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
        {errorMessage && (
          <p className="text-red-600 text-sm mt-4">{errorMessage}</p>
        )}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Use the following credentials for demo access:</p>
          <p className="text-sm text-gray-600 font-bold">Email: {staticEmail}</p>
          <p className="text-sm text-gray-600 font-bold">Password: {staticPassword}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;




