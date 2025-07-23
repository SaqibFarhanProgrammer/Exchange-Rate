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

const Chart = ({ datas }) => {
  const numdata = parseInt(datas);

  const data = [
    { name: "Jan", uv: 100 },
    { name: "Feb", uv: 200 },
    { name: "Mar", uv: 500 },
    { name: "Mar", uv: numdata },
  ];

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0040ff" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#0040ff" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="1 3" stroke="#d0d7ff" />

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
            type="line"
            dataKey="uv"
            stroke="#0040ff"
            fill="url(#colorUv)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
