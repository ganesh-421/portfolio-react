import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Category A", value: 40 },
  { name: "Category A", value: 400 },
  { name: "Category A", value: 97 },
  { name: "Category A", value: 40 },
  { name: "Category A", value: 200 },
  { name: "Category A", value: 40 },
  { name: "Category A", value: 340 },
];

const COLORS = ["#247BA0", "#70C1B3", "#B2DBBF", "#F3FFBD", "#FF1654"];
const Graph = () => {
  return (
    // <PieChart width={200} height={225 + data.length * 25}>
    <PieChart width={310} height={25 + data.length * 25}> {/**mobile */}
      <Pie
        data={data}
        cx={90}
        cy={100}
        innerRadius={60}
        outerRadius={90}
        fill="#8884d8"
        dataKey="value"
        cursor="pointer"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip
        formatter={(value, name) => [value, `${name}%`]}
        itemStyle={{
          color: "#fff",
          padding: "0.5rem",
          margin: 0,
          borderRadius: "2rem",
          display: "block",
        }}
        contentStyle={{
          backgroundColor: "rgb(31 41 55 / 0.7)",
          padding: 0,
          border: "none",
          borderRadius: "2rem",
          fontSize: "0.8rem",
          boxShadow: "0 0.5em 1em 0 rgba(31, 41, 55, 1)",
        }}
      />
      <Legend
        layout="vertical"
        // align="right"
        align="right" //mobile
        // verticalAlign="bottom"
        verticalAlign="middle"  //mobile
        iconSize={12}
        iconType="circle"
        wrapperStyle={{ color: "black", cursor: "pointer"}}
      />
    </PieChart>
  );
};

export default Graph;
