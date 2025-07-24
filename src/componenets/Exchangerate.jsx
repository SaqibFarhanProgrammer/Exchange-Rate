import React from "react";
import { Link } from "react-router-dom";

const ExchangeRatePage = ({ dataa }) => {
  const displayRates = dataa?.conversion_rates || {};

  return (
    <div className="exchange-rates-table mt-3 w-full h-screen overflow-y-auto bg-white p-6 border border-[#e0e5f0] text-black">
      <h3 className="text-2xl font-semibold mb-8 text-[#1a1a1a]">
        Exchange Rates Overview
      </h3>
      <div className="hidden md:grid grid-cols-4 text-sm text-zinc-500 border-b border-[#e0e5f0] pb-3">
        <div>Currency</div>
        <div>Rate In USD</div>
        <div>24h Change</div>
        <div>Chart</div>
      </div>

      <div className="flex flex-col gap-5 mt-4">
        {Object.keys(displayRates).length > 0 ? (
          Object.entries(displayRates)
            .slice(0, 7)
            .map(([currency, rate]) => {
              const mockChange = ((Math.random() - 0.5) * 0.1).toFixed(4);
              const isPositive = parseFloat(mockChange) >= 0;

              return (
                <div
                  key={currency}
                  className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 border-b border-[#e0e5f0] pb-4"
                >
                  <div className="font-medium text-base text-[#111827]">
                    {currency}
                  </div>
                  <div className="text-base font-mono text-[#374151]">
                    {rate.toFixed(4)}
                  </div>
                  <div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        isPositive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {isPositive ? "+" : ""}
                      {mockChange}%
                    </span>
                  </div>
                  <div>
                    <div className="h-8 w-24 bg-gradient-to-r from-[#f0f5ff] to-white rounded-lg flex items-center justify-center text-[#0040ff] text-xs font-medium shadow-sm border border-[#d0d8f0]">
                      Trend
                    </div>
                  </div>
                </div>
              );
            })
        ) : (
          <div className="text-center py-10 text-gray-500 text-sm">
            Loading currency data...
          </div>
        )}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-10">
        <Link to="/exchange">
          <button className="px-6 py-2 rounded-md bg-[#0040ff] text-white text-sm font-medium hover:bg-[#0030cc] transition duration-200 shadow-sm">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExchangeRatePage;
