import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const Chart = ({ datas }) => {
  const numdata = parseFloat(datas) || 0;

  const data = [
    { name: "", uv: 100 },
    { name: "", uv: 200 },
    { name: "", uv: 500 },
    { name: "", uv: numdata },
  ];

  return (
    <div className="w-full h-[300px] overflow-hidden">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 25, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0040ff" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#0040ff" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <Tooltip
            contentStyle={{
              background: "#f5f9ff",
              color: "#0040ff",
            }}
            labelStyle={{ color: "#0040ff" }}
            itemStyle={{ color: "#0040ff" }}
          />

          <Area type="line" dataKey="uv" fill="url(#colorUv)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
