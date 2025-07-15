import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Chart from "../subcomponent/Chart"; // Replace with your Chart component

const DashboardContent = () => {
  return (
    <div className="bg-white p-6  h-screen w-full border border-[#e0e5f0] shadow-sm">
      {/* Currency Converter */}
      <h3 className="text-xl font-semibold text-[#1a1a1a] mb-6 tracking-wide">
        Currency Converter
      </h3>

      <div className="flex flex-col gap-5">
        {/* Amount Input */}
        <div>
          <label className="block text-sm text-zinc-500 mb-1">Amount</label>
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="100"
              className="flex-1 px-4 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:ring-2 focus:ring-[#0040ff]"
            />
            <select className="px-3 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:ring-2 focus:ring-[#0040ff]">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="bg-[#f0f5ff] p-2 mt-4 rounded-full text-[#0040ff] shadow">
            <FaArrowRight />
          </div>
        </div>

        {/* Converted Output */}
        <div>
          <label className="block text-sm text-zinc-500 mb-1">Converted</label>
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="0.0021"
              readOnly
              className="flex-1 px-4 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none"
            />
            <select className="px-3 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:ring-2 focus:ring-[#0040ff]">
              <option>BTC</option>
              <option>ETH</option>
              <option>SOL</option>
              <option>XRP</option>
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button className="mt-2 w-full bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:from-[#0033cc] hover:to-[#0099dd] py-3 rounded-xl text-white font-semibold transition shadow-md">
          Convert Now
        </button>
      </div>
    </div>
  );
};

export default DashboardContent;
