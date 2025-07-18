import React from "react";
import cryptodata from "../Cryptodata";

const CryptoPriceUI = () => {
  const cards = Object.entries(cryptodata.prices).map(([key, item]) => (
    <div
      key={key}
      className="stat-card bg-gradient-to-br w-[17vw] mr-7  mt-4  from-white to-[#f0f5ff] hover:from-[#f0f5ff] hover:to-white p-5 rounded-xl shadow-md border border-[#e0e5f0] transition-all"
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
    <div className="cryptoprice flex gap-1  flex-wrap hide-scrollbar  overflow-y-scroll items-center justify-center h-screen bg-gradient-to-b from-[#e0e7ff] to-[#f7f9ff] text-[#1a1a1a]">
      {cards.length > 0 ? (
        cards
      ) : (
        <h1 className="text-[#0040ff] text-2xl font-medium animate-pulse">
          Loading...
        </h1>
      )}
    </div>
  );
};

export default CryptoPriceUI;
