import { style } from "@mui/system";
import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const PieCharts = () => {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 300 },
    { name: "Apr", value: 200 },
    { name: "May", value: 278 },
    { name: "Jun", value: 189 },
    { name: "Jul", value: 189 },
    { name: "Aug", value: 189 },
    { name: "Sep", value: 189 },
    { name: "Oct", value: 189 },
  ];

  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
  ];
  return (
    <div>
      <BarChart
        width={950}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={50}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="1 1" />
        <Bar
          dataKey="value"
          fill="#8884d8"
          background={{ fill: "transparent" }}
        />
      </BarChart>
    </div>
  );
};

export default PieCharts;
