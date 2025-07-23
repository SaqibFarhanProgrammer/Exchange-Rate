import React, { useEffect, useState } from "react";
import Chart from "../subcomponent/Chart";
import Cryptocards from "./Cryptocards";
import Exchangerate from "./Exchangerate";
import Currencyconvertor from "./Currencyconvertor";
import Profile from "../componenets/Prifile";
import Login from "../Auth/Login";

const Dashboard = ({ getcurrencydata }) => {
  const [exchangeData, setExchangeData] = useState();
  const [chartamout, setchartamout] = useState("");

  useEffect(() => {
    const getRates = async () => {
      const res = await fetch(
        "https://v6.exchangerate-api.com/v6/49b5574c42f33e2979fd8b8c/latest/USD"
      );
      const datas = await res.json();
      setExchangeData(datas);
    };

    getRates();
  }, []);

  useEffect(() => {
    if (exchangeData) {
      getcurrencydata(exchangeData);
    }
  }, [exchangeData, getcurrencydata]);

  function getchartdata(params) {
    setchartamout(params);
  }

  return (
    <div className="dashboard-container min-h-screen flex h-screen w-full text-[#1a1a1a] bg-[#f7f9ff] font-sans">
      <Profile />
      <div className="main-content flex-1 p-10 overflow-y-auto">
        <Cryptocards />
        <div className="dashboard-content grid grid-cols-3 gap-6">
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
              <Chart datas={chartamout} />
            </div>
          </div>

          <Currencyconvertor getchartdata={getchartdata} />
        </div>

        <Exchangerate dataa={exchangeData} getchartdata={getchartdata} />
      </div>
    </div>
  );
};

export default Dashboard;
