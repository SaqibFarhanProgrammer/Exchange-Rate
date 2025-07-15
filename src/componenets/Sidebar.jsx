import React from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaChartLine,
  FaExchangeAlt,
  FaSearch,
  FaRegUserCircle,
  FaArrowRight,
} from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri"; // ✅ Don't forget this

const Sidebar = () => {
  return (
    <div className="navigation-panel w-[18vw] bg-gradient-to-b from-[#e0e7ff] to-[#f7f9ff] p-6 flex flex-col justify-between shadow-xl border-r border-[#e0e5f0]">
      <div>
        <h1 className="app-title text-2xl font-bold mb-8 tracking-wider text-center bg-gradient-to-r from-[#0040ff] to-[#00aaff] bg-clip-text text-transparent">
          Crypto.
        </h1>
        <nav className="menu-options flex flex-col gap-5 text-sm">
          <button className="menu-item bg-[#f0f5ff] hover:bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 transition text-[#1a1a1a]">
            <FaChartLine className="icon text-[#0040ff]" />
            Market
          </button>
          <button className="menu-item hover:bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 transition text-[#1a1a1a]">
            <FaBitcoin className="icon text-[#f7931a]" />
            Convertor
          </button>
          <button className="menu-item hover:bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 transition text-[#1a1a1a]">
            <FaRegUserCircle className="icon text-[#627eea]" />
            Profile
          </button>
          <button className="menu-item hover:bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 transition text-[#1a1a1a]">
            <FaExchangeAlt className="icon text-[#0040ff]" />
            Exchange Rates
          </button>
          <button className="menu-item hover:bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 transition text-[#1a1a1a]">
            <RiMoneyDollarCircleFill className="icon text-[#0040ff]" />
            Crypto Currency
          </button>
        </nav>
      </div>
      <div className="copyright-info text-xs text-zinc-500 text-center">
        © 2025 Crypto App
      </div>
    </div>
  );
};

export default Sidebar;
