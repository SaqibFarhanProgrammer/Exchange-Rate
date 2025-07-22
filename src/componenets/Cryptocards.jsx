import React from "react";
import { Link } from "react-router-dom";
import cryptodata from "../Cryptodata";

const Cryptocards = () => {
  const cards = Object.entries(cryptodata.prices)
    .slice(0, 4)
    .map(([key, item]) => (
      <div
        key={key}
        className="stat-card bg-gradient-to-br from-white to-[#f0f5ff] hover:from-[#f0f5ff] hover:to-white p-5 rounded-xl shadow-md border border-[#e0e5f0] transition-all"
      >
        <div className="flex justify-between items-start">
          <h2 className="crypto-name text-sm text-zinc-500 mb-2">
            {item.symbol}
          </h2>
          <span
            className={`text-xs px-2 py-1 rounded ${
              item.change24h >= 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {item.change24h >= 0 ? "+" : ""}
            {item.change24h}%
          </span>
        </div>
        <p className="crypto-price text-xl font-semibold text-[#1a1a1a]">
          ${item.price.toLocaleString()}
        </p>
      </div>
    ));

  return (
    <div className="crypto-stats grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10 px-4">
      {cards.length > 0 ? (
        <>
          {cards}
          <div className="text-right col-span-2 sm:col-span-3 md:col-span-4 mt-4">
            <Link
              to="/crypto"
              className="text-[#0040ff] text-sm font-medium hover:underline"
            >
              See more →
            </Link>
          </div>
        </>
      ) : (
        <div className="col-span-2 sm:col-span-3 md:col-span-4">
          <h1 className="text-[#0040ff] pl-2 text-2xl font-medium animate-pulse">
            Loading...
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cryptocards;
