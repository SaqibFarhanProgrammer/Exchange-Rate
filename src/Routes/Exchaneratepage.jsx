import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

const Exchaneratepage = ({ currencydata }) => {
  const [input, setInput] = useState("");
  const [filteredRates, setFilteredRates] = useState(null);
  const [error, setError] = useState(null);

  const filtercurrencycode = () => {
    try {
      if (!currencydata?.conversion_rates) {
        throw new Error("No currency data available");
      }

      if (!input) {
        setFilteredRates(null);
        return;
      }

      const filtered = Object.entries(currencydata.conversion_rates).filter(
        ([currencyCode]) =>
          currencyCode.toLowerCase().includes(input.toLowerCase())
      );

      if (filtered.length === 0) {
        setError("Currency not found");
        setFilteredRates(null);
      } else {
        setError(null);
        setFilteredRates(Object.fromEntries(filtered));
      }
    } catch (err) {
      setError(err.message);
      setFilteredRates(null);
    }
  };

  const displayRates = useMemo(() => {
    return filteredRates || currencydata?.conversion_rates;
  }, [filteredRates, currencydata]);

  return (
    <div className="exchange-rates-table w-full flex-col h-screen overflow-y-scroll bg-white p-6 border text-black border-[#e0e5f0]">
      <div className="search-container mb-8">
        <div className="search-bar relative flex justify-between">
          <FaSearch className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0040ff]" />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Search currencies..."
            className="search-input w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff] shadow-sm"
          />
          <button
            onClick={filtercurrencycode}
            className="m-.5 convert-button bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:from-[#0033cc] hover:to-[#0099dd] py-2 px-7 rounded-lg font-semibold text-white transition"
          >
            Search
          </button>
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
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
        {displayRates ? (
          Object.entries(displayRates).map(([currency, rate]) => (
            <div
              key={currency}
              className="grid grid-cols-1 md:grid-cols-4 items-center gap-2 md:gap-4 border-b border-[#e0e5f0] pb-4"
            >
              <div className="font-medium text-base">{currency}</div>
              <div className="text-1xl text-gray-800">
                {Math.floor(rate.toFixed(4))}
              </div>
              <div>
                <span
                  className={`text-xs px-2 py-1 rounded inline-block ${
                    rate >= 1
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {rate >= 1 ? "+" : ""}
                  {(rate - 1).toFixed(4)}%
                </span>
              </div>
              <div>
                <div className="trend-indicator h-8 w-24 bg-gradient-to-r from-[#f0f5ff] to-white rounded flex items-center justify-center text-[#0040ff] text-xs">
                  Trend
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            {error || "Loading currency data..."}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exchaneratepage;
