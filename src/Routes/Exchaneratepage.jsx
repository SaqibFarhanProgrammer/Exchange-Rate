import React from "react";

const Exchaneratepage = () => {
  return (
    <div className=" exchange-rates-table w-full h-screen overflow-y-scroll  bg-white p-6 border text-black  border-[#e0e5f0]">
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
            {[].map((item, index) => (
              <tr
                key={index}
                className="table-row border-b border-[#e0e5f0] last:border-0"
              >
                <td className="py-4 font-medium">{item.currency}</td>
                <td className="py-4">${item.rate}</td>
                <td
                  className={`py-4 ${
                    item.trend === "up" ? "text-[#00a661]" : "text-[#ff3b30]"
                  }`}
                >
                  {item.change}
                </td>
                <td className="py-4">
                  <div className="trend-indicator h-8 w-24 bg-gradient-to-r from-[#f0f5ff] to-white rounded flex items-center justify-center text-[#0040ff] text-xs">
                    Trend
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exchaneratepage;
