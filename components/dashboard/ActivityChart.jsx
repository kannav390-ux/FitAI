"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip
} from "recharts";

const data = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 30 },
  { day: "Wed", value: 80 },
  { day: "Thu", value: 60 },
  { day: "Fri", value: 45 },
  { day: "Sat", value: 25 },
  { day: "Sun", value: 35 },
];

export default function ActivityChart() {
  return (
    <div className="card p-6">

      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-400 uppercase tracking-widest">
            Weekly Intensity
          </p>
          <p className="text-xs text-gray-500">
            Metabolic Stress Readout
          </p>
        </div>

        <p className="text-xl font-bold">2,480</p>
      </div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" hide />
            <Tooltip />
            <Bar
              dataKey="value"
              radius={[6, 6, 0, 0]}
              fill="#3b82f6"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}