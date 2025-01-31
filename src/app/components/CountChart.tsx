"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "human",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "aliens",
    count: 60,
    fill: "#C3EBFA",
  },
  {
    name: "total",
    count: 110,
    fill: "white",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

function CountChart() {
  return (
    <>
      <div className="bg-white rounded-xl w-full h-full p-4">
        {/* // TITLE */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Student</h1>
          <Image
            src={"/moreDark.png"}
            alt=""
            width={20}
            height={20}
            className=""
          />
        </div>
        {/* // CHART */}
        <div className="relative w-full h-[75%]">
          <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="100%"
              barSize={32}
              data={data}
            >
              <RadialBar background dataKey="count" />
            </RadialBarChart>
          </ResponsiveContainer>
          <Image
            src="/maleFemale.png"
            alt=""
            width="50"
            height="50"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
          />
        </div>
        {/* // BOTTON */}
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-briansky rounded-full">
              <h1 className="font-bold">1234</h1>
              <h2 className="text-xs text-gray-300">Humans (55%)</h2>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-brianyellow rounded-full">
              <h1 className="font-bold">1234</h1>
              <h2 className="text-xs text-gray-300">Aliens (45%)</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountChart;
