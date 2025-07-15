import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 300 },
  { name: "Mar", uv: 500 },
  { name: "Apr", uv: 200 },
  { name: "May", uv: 600 },
  { name: "Jun", uv: 1000 },
];

const Chart = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0040ff" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#0040ff" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#d0d7ff" />

          <Tooltip
            contentStyle={{
              background: "linear-gradient(#0040ff, #hover, ##5e34eb)",
              border: "1px solid #0040ff",
              color: "#0040ff",
            }}
            labelStyle={{ color: "#0040ff" }}
            itemStyle={{ color: "#0040ff" }}
          />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#0040ff"
            fill="url(#colorUv)" // 🎯 Gradient applied here
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
