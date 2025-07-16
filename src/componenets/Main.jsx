import React, { useEffect } from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaChartLine,
  FaExchangeAlt,
  FaSearch,
  FaRegUserCircle,
  FaArrowRight,
} from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import Chart from "../subcomponent/Chart";
import Sidebar from "./Sidebar";
import Cryptocards from "./Cryptocards";
import Exchangerate from "./Exchangerate";
import axios from "axios";

const Dashboard = () => {
  return (
    <div className="dashboard-container min-h-screen flex h-screen w-full text-[#1a1a1a] bg-[#f7f9ff] font-sans">
      {/* Left Navigation Panel */}
      {/* Main Content Area */}
      <div className="main-content flex-1 p-10 overflow-y-auto">
        {/* Search Component */}
        <div className="search-container mb-8">
          <div className="search-bar relative flex justify-between">
            <FaSearch className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0040ff]" />
            <input
              type="text"
              placeholder="Search cryptocurrencies..."
              className="search-input w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff] shadow-sm"
            />
            <button className="m-.5 convert-button bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:from-[#0033cc] hover:to-[#0099dd] py-2 px-7 rounded-lg font-semibold text-white transition">
              Search
            </button>
          </div>
        </div>

        {/* Crypto Stats Cards */}
        <Cryptocards />

        {/* Main Dashboard Content */}
        <div className="dashboard-content grid grid-cols-3 gap-6">
          {/* Market Chart Section */}
          <div className="market-chart col-span-2 bg-white p-6 rounded-xl border border-[#e0e5f0]">
            <div className="chart-header flex justify-between items-center mb-4">
              <h3 className="section-title text-lg font-medium text-[#1a1a1a]">
                Market Trends
              </h3>
              <div className="time-filters flex gap-2">
                <button className="time-filter-btn px-3 py-1 text-x6 bg-[#f0f5ff] rounded-md text-[#0040ff]">
                  20$
                </button>
              </div>
            </div>
            <div className="chart-wrapper h-[240px] rounded-lg bg-gradient-to-tr from-[#e0f0ff] to-[#f0f5ff] flex items-center justify-center text-[#0040ff] font-semibold border border-[#e0e5f0]">
              <Chart />
            </div>
          </div>

          {/* Currency Converter */}
          <div className="currency-converter bg-white p-6 rounded-xl border border-[#e0e5f0]">
            <h3 className="section-title text-lg font-medium mb-6 text-[#1a1a1a]">
              Currency Converter
            </h3>
            <div className="converter-form flex flex-col gap-4">
              <div className="form-group">
                <label className="input-label text-sm text-zinc-500">
                  Amount
                </label>
                <div className="amount-input-container flex gap-2">
                  <input
                    type="number"
                    placeholder="100"
                    className="amount-input flex-1 mt-1 px-4 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
                  />
                  <select className="currency-selector mt-1 px-3 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>INR</option>
                  </select>
                </div>
              </div>

              <div className="conversion-arrow flex justify-center">
                <div className="arrow-icon bg-[#f0f5ff] p-2 rounded-full text-[#0040ff]">
                  <FaArrowRight />
                </div>
              </div>

              <div className="form-group">
                <label className="input-label text-sm text-zinc-500">
                  Converted
                </label>
                <div className="converted-input-container flex gap-2">
                  <input
                    type="number"
                    placeholder="0.0021"
                    className="converted-input flex-1 mt-1 px-4 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
                    readOnly
                  />
                  <select className="crypto-selector mt-1 px-3 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]">
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>SOL</option>
                    <option>XRP</option>
                  </select>
                </div>
              </div>

              <button className="convert-button mt-2 bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:from-[#0033cc] hover:to-[#0099dd] py-3 rounded-lg font-semibold text-white transition">
                Convert Now
              </button>
            </div>
          </div>
        </div>
        <Exchangerate />
      </div>
    </div>
  );
};

export default Dashboard;
