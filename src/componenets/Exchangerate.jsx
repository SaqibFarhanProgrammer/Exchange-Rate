<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 00bc0f01c333edb171e3b18f410e3b1e62d00977
import { Link } from "react-router-dom";

const Exchangerate = ({ dataa }) => {
  if (!dataa?.conversion_rates) {
    return (
      <div className="text-center py-8 text-gray-500">
        Loading exchange rates...
      </div>
    );
  }
<<<<<<< HEAD

  // Mock function for trend data - replace with real data if available
  const getTrendData = () => {
    const change = (Math.random() * 2 - 1).toFixed(2); // Random number between -1 and 1
    const isPositive = parseFloat(change) >= 0;
    return {
      value: change,
      isPositive,
    };
  };

=======
>>>>>>> 00bc0f01c333edb171e3b18f410e3b1e62d00977
  return (
    <div className="exchange-rates-table mt-10 bg-white p-6 rounded-xl border border-[#e0e5f0]">
      <h3 className="section-title text-lg font-medium mb-4 text-[#1a1a1a]">
        Exchange Rates
      </h3>

      <div className="table-container overflow-x-auto">
        <table className="rates-table w-full">
          <thead>
            <tr className="table-header text-left text-sm text-zinc-500 border-b border-[#e0e5f0]">
              <th className="pb-3">Currency</th>
              <th className="pb-3">Rate (USD)</th>
              <th className="pb-3">24h Change</th>
              <th className="pb-3">Chart</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(dataa?.conversion_rates)
              .slice(0, 8)
              .map(([currency, rate]) => {
<<<<<<< HEAD
                const trend = getTrendData();
=======
>>>>>>> 00bc0f01c333edb171e3b18f410e3b1e62d00977
                return (
                  <tr
                    key={currency}
                    className="table-row border-b border-[#e0e5f0] last:border-0"
                  >
                    <td className="py-4 font-medium">{currency}</td>
                    <td className="py-4">
                      {typeof rate === "number" ? rate.toFixed(4) : "N/A"}
                    </td>
                    <td className="py-4">
<<<<<<< HEAD
                      <div
                        className={`flex items-center text-sm ${
                          trend.isPositive ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {trend.isPositive ? "+" : ""}
                        {trend.value}%
                      </div>
                    </td>
                    <td className="py-4">
=======
>>>>>>> 00bc0f01c333edb171e3b18f410e3b1e62d00977
                      <div className="trend-indicator h-8 w-24 bg-gradient-to-r from-[#f0f5ff] to-white rounded flex items-center justify-center text-[#0040ff] text-xs">
                        Trend
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <div className="text-right mt-4">
          <Link
            to="/exchange"
            className="text-[#0040ff] text-sm font-medium hover:underline"
          >
            See more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exchangerate;
