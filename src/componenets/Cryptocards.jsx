import React from "react";
import { Link } from "react-router-dom";
import cryptodata from "../Cryptodata";

const Cryptocards = () => {
  const dataa = cryptodata;

  console.log(cryptodata);

  dataa.map(([key, item]) => (
    <div
      key={key}
      className="stat-card bg-gradient-to-br from-white to-[#f0f5ff] hover:from-[#f0f5ff] hover:to-white p-5 rounded-xl shadow-md border border-[#e0e5f0] transition-all"
    >
      <h2 className="crypto-name text-sm text-zinc-500 mb-2">
        {item.prices.symbol}
      </h2>
      <p className="crypto-price text-xl font-semibold text-[#1a1a1a]">
        {Math.floor(item.prices.price)}
      </p>
    </div>
  ));

  return (
    <div className="crypto-stats grid grid-cols-4 gap-6 mb-10">
      {dataa ? (
        cards
      ) : (
        <h1 className="text-[#0040ff] pl-2 text-2xl font-medium animate-pulse">
          Loading...
        </h1>
      )}

      <div className="text-right pr-40 col-span-4">
        <Link
          to="/crypto"
          className="text-[#0040ff] text-sm font-medium hover:underline"
        >
          See more →
        </Link>
      </div>
    </div>
  );
};

export default Cryptocards;
