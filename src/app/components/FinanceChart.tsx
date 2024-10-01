"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Enero",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Febrero",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Marzo",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Abril",
    income: 2780,
    expense: 3908,
  },
  {
    name: "Mayo",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Junio",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Julio",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Agosto",
    income: 3490,
    expense: 4300,
  },

  {
    name: "Septiembre",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Octubre",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Noviembre",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Diciembre",
    income: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image
          src={"/moreDark.png"}
          alt=""
          width={20}
          height={20}
          className=""
        />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
