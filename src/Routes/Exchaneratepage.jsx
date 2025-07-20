import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Exchaneratepage = ({ currencydata }) => {
  const [input, setinput] = useState("");
  const filtercurrencycode = () => {
    const filtered = Object.entries(currencydata.conversion_rates).filter(
      ([currencyCode]) => {
        if (currencyCode !== input) {
          alert("Currency not found");
        } else {
          currencyCode === input;
        }
      }
    );

    console.log(filtered);

    const result = Object.fromEntries(filtered);

    return result;
  };

  return (
    <div className="exchange-rates-table w-full flex-col h-screen overflow-y-scroll bg-white p-6 border text-black border-[#e0e5f0]">
      <div className="search-container mb-8">
        <div className="search-bar relative flex justify-between">
          <FaSearch className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0040ff]" />
          <input
            onChange={(e) => {
              setinput(e.target.value);
            }}
            type="text"
            value={input}
            placeholder="Search cryptocurrencies..."
            className="search-input w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff] shadow-sm"
          />
          <button
            onClick={filtercurrencycode}
            className="m-.5 convert-button bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:from-[#0033cc] hover:to-[#0099dd] py-2 px-7 rounded-lg font-semibold text-white transition"
          >
            Search
          </button>
        </div>
      </div>
      <h3 className="section-title text-lg font-medium mb-9 text-[#1a1a1a]">
        Exchange Rates
      </h3>
      {/* Table Header */}
      <div className="hidden md:grid grid-cols-4 text-sm text-zinc-500 border-b border-[#e0e5f0] pb-3">
        <div>Currency</div>
        <div>Rate (USD)</div>
        <div>24h Change</div>
        <div>Chart</div>
      </div>

      {/* Table Rows */}
      <div className="table-rows flex flex-col gap-4 mt-4">
        {currencydata?.conversion_rates &&
          Object.entries(currencydata.conversion_rates).map(
            ([currency, rate]) => (
              <div
                key={currency}
                className="grid grid-cols-1 md:grid-cols-4 items-center gap-2 md:gap-4 border-b border-[#e0e5f0] pb-4"
              >
                <div className="font-medium text-base">{currency}</div>
                <div className="text-1xl text-gray-800">
                  {" "}
                  {Math.floor(rate)}
                </div>
                <div>
                  <span
                    className={`text-xs px-2 py-1 rounded inline-block ${
                      Math.floor(rate) >= 0
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {Math.floor(rate) >= 0 ? "" : ""}
                    {Math.floor(rate)}%
                  </span>
                </div>
                <div>
                  <div className="trend-indicator h-8 w-24 bg-gradient-to-r from-[#f0f5ff] to-white rounded flex items-center justify-center text-[#0040ff] text-xs">
                    Trenda
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Exchaneratepage;
