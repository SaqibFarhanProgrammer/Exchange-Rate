import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import currencyCodes from "../Routes/Currencycodes";

const Currencyconvertor = ({ getchartdata }) => {
  const [currencycode, setcurrencycode] = useState([]);
  const [from, setfrom] = useState("USD");
  const [to, setto] = useState("PKR");
  const [amount, setamount] = useState("");
  const [convertedamount, setconvertedamount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [passdatatochart, setpassdatatochart] = useState("");

  const convert = async () => {
    if (!amount || amount <= 0) {
      setconvertedamount("");
      setIsLoading(false);
      return;
    }

    if (from === to) {
      setconvertedamount(amount);
      setIsLoading(false);

      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/49b5574c42f33e2979fd8b8c/pair/${from}/${to}/${amount}`
      );
      const data = await res.json();

      if (data.result === "success") {
        setconvertedamount(data.conversion_result.toFixed(4));
      } else {
        throw new Error(data["error-type"] || "Conversion failed");
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    convert();
  };

  function extractdatachart() {
    getchartdata(convertedamount);
  }

  extractdatachart();

  return (
    <div>
      <div className="currency-converter bg-white p-6 rounded-xl border w-[25vw] border-[#e0e5f0]">
        <h3 className="section-title text-lg font-medium mb-6 text-[#1a1a1a]">
          Currency Converter
        </h3>

        {error && (
          <div className="error-message mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="converter-form flex flex-col gap-4"
        >
          <div className="form-group">
            <label className="input-label text-sm text-zinc-500">Amount</label>
            <div className="amount-input-container flex gap-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                placeholder="100"
                min="0"
                step="0.01"
                className="amount-input w-[80%] flex-1 mt-1 px-4 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
                required
              />
              <select
                value={from}
                onChange={(e) => setfrom(e.target.value)}
                className="currency-selector mt-1 px-3 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
              >
                {currencyCodes.map((code) => (
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
              Converted Amount
            </label>
            <div className="converted-input-container flex gap-2">
              <input
                type="text"
                value={
                  isLoading
                    ? "Converting..."
                    : Math.floor(convertedamount) || ""
                }
                placeholder="0.00"
                className="converted-input w-[80%] flex-1 mt-1 px-4 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
                readOnly
              />
              <select
                value={to}
                onChange={(e) => setto(e.target.value)}
                className="crypto-selector mt-1 px-3 py-2 rounded-lg bg-[#f7f9ff] text-[#1a1a1a] border border-[#e0e5f0] focus:outline-none focus:border-[#0040ff]"
              >
                {currencyCodes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="convert-button mt-2 bg-gradient-to-r from-[#0040ff] to-[#00aaff] hover:from-[#0033cc] hover:to-[#0099dd] py-3 rounded-lg font-semibold text-white transition disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Converting..." : "Convert Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Currencyconvertor;
