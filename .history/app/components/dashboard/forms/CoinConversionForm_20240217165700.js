"use client";
import React, { useState } from "react";

const CoinConversionForm = () => {
  const [baseCoin, setBaseCoin] = useState("Bitcoin/BTC");
  const [toCoin, setToCoin] = useState("Ethereum");
  const [amount, setAmount] = useState("");

  const handleBaseCoinChange = (e) => {
    setBaseCoin(e.target.value);
  };

  const handleToCoinChange = (e) => {
    setToCoin(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your coin conversion logic here
    console.log("Convert", amount, baseCoin, "to", toCoin);
  };

  return (
    <form className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Coin Conversion Form</h2>
      <div className="mb-4">
        <label htmlFor="baseCoin" className="block text-sm font-medium text-gray-600">
          Base Coin
        </label>
        <select
          id="baseCoin"
          name="baseCoin"
          value={baseCoin}
          onChange={handleBaseCoinChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          {/* Add options for base coins */}
          <option value="Bitcoin/BTC">Bitcoin (BTC)</option>
          <option value="Ethereum/ETH">Ethereum (ETH)</option>
          {/* Add more base coin options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="toCoin" className="block text-sm font-medium text-gray-600">
          To Coin
        </label>
        <input
          type="text"
          id="toCoin"
          name="toCoin"
          value={toCoin}
          onChange={handleToCoinChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
          Amount to Convert
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        Convert
      </button>
    </form>
  );
};

export default CoinConversionForm;
