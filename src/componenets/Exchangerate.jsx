import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Exchangerate = ({ dataa }) => {
  useEffect(() => {
    const getRates = async () => {
      const res = await fetch(
        "https://v6.exchangerate-api.com/v6/49b5574c42f33e2979fd8b8c/latest/USD"
      );
      const datas = await res.json();
      setexchange(datas);
      console.log("Exchange Rate Data:", datas);
    };

    getRates();
  }, []);

  const data = [
    {
      currency: "Bitcoin (BTC)",
      rate: "47,892.34",
      change: "+2.34%",
      trend: "up",
    },
  ];

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
            {data.map((item, index) => (
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

        {/* ✅ Move Link OUTSIDE table */}
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
