import React, { useState, useMemo, useEffect } from "react";
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
        setError(null);
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

  useEffect(() => {
    filtercurrencycode();
  }, [input]);

  const displayRates = useMemo(() => {
    return filteredRates || currencydata?.conversion_rates;
  }, [filteredRates, currencydata]);

  return (
    <div className="w-full h-screen overflow-y-auto bg-white p-6 border border-[#e0e5f0] text-black">
      {/* Search Box */}
      <div className="sticky top-0 z-10 bg-white pb-4">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0040ff]" />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Search currencies..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff] shadow-sm"
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {/* Section Heading */}
      <h3 className="text-xl font-semibold text-[#1a1a1a] mt-8 mb-4">
        Exchange Rates
      </h3>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-4 text-sm font-medium text-zinc-500 border-b border-[#e0e5f0] py-2 mb-2">
        <div>Currency</div>
        <div>Rate</div>
        <div>24h Change</div>
        <div>Chart</div>
      </div>

      {/* Table Content */}
      <div className="flex flex-col gap-4">
        {displayRates ? (
          Object.entries(displayRates).map(([currency, rate]) => {
            const change = (rate - 1).toFixed(4);
            const isPositive = rate >= 1;
            return (
              <div
                key={currency}
                className="grid grid-cols-1 md:grid-cols-4 items-center gap-2 md:gap-4 border-b border-[#e0e5f0] pb-3"
              >
                <div className="text-base font-medium">{currency}</div>
                <div className="text-lg text-gray-800">{rate.toFixed(4)}</div>
                <div>
                  <span
                    className={`text-xs px-2 py-1 rounded font-semibold ${
                      isPositive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {change}
                  </span>
                </div>
                <div>
                  <div className="h-8 w-24 bg-gradient-to-r from-[#e6edff] to-white rounded flex items-center justify-center text-[#0040ff] text-xs font-semibold shadow-sm">
                    Trend
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 text-gray-500">
            {error || "Loading currency data..."}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exchaneratepage;
