import { isArray } from "chart.js/helpers";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Currencyconvertor = () => {
  const [currencycode, setcurrencycode] = useState([]);
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [amount, setamount] = useState("");
  const [convertedrate, setconvertedrate] = useState("");
  console.log(from);
  console.log(to);

  const getRates = async () => {
    const res = await fetch(
      "https://v6.exchangerate-api.com/v6/49b5574c42f33e2979fd8b8c/latest/USD"
    );
    const datas = await res.json();
    setcurrencycode(Object.entries(datas.conversion_rates));
    console.log(datas);
  };

  useEffect(() => {
    getRates();
  }, []);

  return (
    <div>
      <div className="currency-converter bg-white p-6 rounded-xl border w-[25vw] border-[#e0e5f0]">
        <h3 className="section-title text-lg font-medium mb-6 text-[#1a1a1a]">
          Currency Converter
        </h3>
        <div className="converter-form flex flex-col gap-4">
          <div className="form-group">
            <label className="input-label text-sm text-zinc-500">Amount</label>
            <div className="amount-input-container flex gap-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                placeholder="100"
                className="amount-input w-[80%] flex-1 mt-1 px-4 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
              />
              <select
                onChange={(e) => {
                  setfrom(e.target.value);
                }}
                className="currency-selector mt-1 px-3 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
              >
                {currencycode.map(([code]) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="conversion-arrow flex justify-center">
            <div className="arrow-icon mt-7 bg-[#f0f5ff] p-2 rounded-full text-[#0040ff]">
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
                value={to}
                onChange={(e) => setto(e.target.value)}
                placeholder="0.0021"
                className="converted-input w-[80%] flex-1 mt-1 px-4 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
                readOnly
              />
              <select
                onChange={(e) => {
                  setto(e.target.value);
                }}
                className="crypto-selector mt-1 px-3 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
              >
                {currencycode.map(([code]) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="convert-button mt-2 bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:from-[#0033cc] hover:to-[#0099dd] py-3 rounded-lg font-semibold text-white transition">
            Convert Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Currencyconvertor;
