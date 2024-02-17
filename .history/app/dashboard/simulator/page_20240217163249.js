"use client";
import { useUser } from '@clerk/nextjs';
import React from 'react'

const actions = [
  {
    label: "Simulate Trade",
    value: "trade"
  },
  {
    label: "Currency Conversion",
    value: "conversion"
  }
];

export default function Page() {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn);
  console.log(isLoaded);
  console.log(user);
  return (
    <div>
      <h1>Hello, {user.firstName}</h1>
      <form>
        <select
          id="customer"
          name="customerId"
          className=""
        >
          <option value="" disabled>
            Select a customer
          </option>
          {actions.map((action) => (
            <option key={action.value} value={action.value}>
              {action.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}