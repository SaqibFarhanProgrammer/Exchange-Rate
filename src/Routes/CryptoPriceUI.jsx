import React, { useState } from "react";
import cryptodata from "../Cryptodata";

const CryptoPriceUI = () => {
  const [filtered, setFiltered] = useState(null);
  const [input, setInput] = useState("");

  const filterCryptocurrencies = () => {
    const filteredData = Object.entries(cryptodata?.prices || {}).filter(
      ([key, item]) => item.symbol.toLowerCase().includes(input.toLowerCase())
    );

    if (filteredData.length === 0) {
      alert("Please enter a valid cryptocurrency symbol.");
    } else {
      setFiltered(Object.fromEntries(filteredData));
    }
  };

  const dataToShow = filtered || cryptodata?.prices || {};

  const cards = Object.entries(dataToShow).map(([key, item]) => (
    <div
      key={`${key}-${item.symbol}`}
      className="stat-card bg-gradient-to-br w-full sm:w-[17vw] mr-7 mt-4 from-white to-[#f0f5ff] hover:from-[#f0f5ff] hover:to-white p-5 rounded-xl shadow-md border border-[#e0e5f0] transition-all"
    >
      <div className="flex justify-between items-start">
        <h2 className="crypto-name text-sm text-zinc-600 mb-2">
          {item.symbol}
        </h2>
        <span
          className={`text-xs px-2 py-1 rounded ${
            item.change24h >= 0
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {item.change24h >= 0 ? "+" : ""}
          {item.change24h}%
        </span>
      </div>
      <p className="crypto-price text-xl font-semibold text-[#1a1a1a]">
        ${item.price}
      </p>
    </div>
  ));

  return (
    <div className="cryptoprice w-full flex flex-col items-center bg-gradient-to-b from-[#e0e7ff] to-[#f7f9ff] text-[#1a1a1a] min-h-screen">
      <div className="search w-full fixed  pt-4 flex items-center justify-center">
        <div className="relative flex items-center w-[80vw] sm:w-[40vw]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="w-full p-3 pr-12 rounded-lg backdrop-blur-lg border border-[#d1d5db] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Search Cryptocurrency"
          />
          <button
            onClick={filterCryptocurrencies}
            className="absolute right-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full mt-10 px-4 sm:px-8 py-6 flex flex-wrap justify-center">
        {cards.length > 0 ? (
          cards
        ) : (
          <h1 className="text-[#0040ff] text-2xl font-medium animate-pulse">
            No cryptocurrencies found
          </h1>
        )}
      </div>
    </div>
  );
};

export default CryptoPriceUI;
