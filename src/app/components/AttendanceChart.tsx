"use client";

import Image from "next/image";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: "Monday",
    present: 4000,
    absent: 2400,
  },
  {
    name: "Tuesday",
    present: 3000,
    absent: 1398,
  },
  {
    name: "Wednesday",
    present: 2000,
    absent: 9800,
  },
  {
    name: "Thursday",
    present: 2780,
    absent: 3908,
  },
  {
    name: "Friday",
    present: 1890,
    absent: 4800,
  },
];

const AttendanceChart = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-4 h-full">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Attendance</h1>
          <Image src={"/moreDark.png"} alt="" width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
            <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
            <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
            <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
            <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}/>
            <Bar
              dataKey="present"
              fill="#FAE27C"
              type="circle"
              radius={[5,5,0,0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              type="circle"
              radius={[5,5,0,0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default AttendanceChart;
