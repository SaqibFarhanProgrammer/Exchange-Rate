import React from "react";

const Cryptocards = () => {
  return (
    <div className="crypto-stats grid grid-cols-4 gap-6 mb-10">
      {[
        { title: "Bitcoin", price: "$14,538" },
        { title: "Ethereum", price: "$17,900" },
        { title: "Ripple", price: "$0.96" },
        { title: "Solana", price: "$50.21" },
      ].map((item, i) => (
        <div
          key={i}
          className="stat-card bg-gradient-to-br from-white to-[#f0f5ff] hover:from-[#f0f5ff] hover:to-white p-5 rounded-xl shadow-md border border-[#e0e5f0] transition-all"
        >
          <h2 className="crypto-name text-sm text-zinc-500 mb-2">
            {item.title}
          </h2>
          <p className="crypto-price text-xl font-semibold text-[#1a1a1a]">
            {item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cryptocards;
