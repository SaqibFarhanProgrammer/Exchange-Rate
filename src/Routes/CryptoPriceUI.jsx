import React from "react";

const CryptoPriceUI = ({ cryptodata }) => {
  const data = cryptodata?.data;
  console.log(data);

  const cards = data
    ? Object.entries(data)
        .slice(0, 4)
        .map(([key, item], index) => (
          <div
            key={index}
            className="stat-card bg-gradient-to-br from-white to-[#f0f5ff] hover:from-[#f0f5ff] hover:to-white p-5 rounded-xl shadow-md border border-[#e0e5f0] transition-all"
          >
            <h2 className="crypto-name text-sm text-zinc-500 mb-2">
              {item.code}
            </h2>
            <p className="crypto-price text-xl font-semibold text-[#1a1a1a]">
              {Math.floor(item.value)}
            </p>
          </div>
        ))
    : [];

  return (
    <div className="flex gap-6 flex-wrap items-center justify-center h-screen bg-gradient-to-b from-[#e0e7ff] to-[#f7f9ff] text-[#1a1a1a]">
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
