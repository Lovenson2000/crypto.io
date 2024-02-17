"use client";
import { useUser } from '@clerk/nextjs';
import React from 'react'

export default function Page() {
  const { isSignedIn, user, isLoaded } = useUser();
  
  return (
    <div>
      <h1>Hello, {user.firstName}</h1>
      <div className="min-h-screen flex items-center justify-center bg-indigo-600">
        <div className="bg-white p-8 rounded shadow-md">
          <label className="block mb-4 text-lg font-bold text-gray-800">Select an option:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select an option</option>
            <option value="currencyConversion">Currency Conversion</option>
            <option value="simulateTrade">Simulate Trade</option>
          </select>
          <button
            className="mt-4 bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700"
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}