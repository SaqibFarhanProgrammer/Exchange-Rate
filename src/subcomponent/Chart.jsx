import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ convertedAmounts }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (convertedAmounts && convertedAmounts.length > 0) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      const formattedData = months.map((month, index) => ({
        name: month,
        amount: convertedAmounts[index] || 0,
      }));
      setChartData(formattedData);
    }
  }, [convertedAmounts]);

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0040ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0040ff" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#e0e5f0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            formatter={(value) => [`${value}`, "Converted Amount"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Area
            type="line"
            dataKey="amount"
            stroke="#0040ff"
            fill="url(#colorAmount)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
