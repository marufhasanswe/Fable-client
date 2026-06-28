"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import { Card } from "@heroui/react";

const COLORS = ["#6366f1", "#f59e0b", "#8b5cf6", "#06b6d4", "#22c55e"];
const AdminCharts = ({ monthlySales = [], ebooksByGenre = [] }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
      {/* Monthly Sales */}

      <Card className="xl:col-span-2 p-5">
        <div className="mb-5">
          <h2 className="text-lg font-semibold">Monthly Sales</h2>

          <p className="text-sm text-default-500">
            Revenue performance overview
          </p>
        </div>

        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="sales"
                strokeWidth={3}
                dot={{
                  r: 5,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Genre Pie Chart */}

      <Card className="p-5">
        <div className="mb-5">
          <h2 className="text-lg font-semibold">Ebook Genres</h2>

          <p className="text-sm text-default-500">
            Published ebooks distribution
          </p>
        </div>

        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ebooksByGenre}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {ebooksByGenre.map((item, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default AdminCharts;
