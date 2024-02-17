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
          className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"

        >
          <option value="" disabled>
            Select an action
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