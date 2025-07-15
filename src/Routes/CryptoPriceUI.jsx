import React from "react";

const CryptoPriceUI = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#e0e7ff] to-[#f7f9ff] text-[#1a1a1a]">
      <h1 className="text-3xl font-bold mb-4">Bitcoin (BTC) Live Price</h1>

      <div className="bg-white rounded-2xl shadow-xl px-10 py-6">
        <p className="text-xl text-gray-500 mb-2">Current Price</p>
        <div className="text-5xl font-bold text-[#0040ff] tracking-wide">
          $66,923.00
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">Updated just now</p>
    </div>
  );
};

export default CryptoPriceUI;
