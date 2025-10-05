 import React, { useState, useEffect } from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/sales_data.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="p-4 text-gray-600">Loading...</p>;

  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Sales Dashboard</h1>

      {/* KPI Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-2">Key Performance Indicators (KPIs)</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-md text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">Total Sales</th>
              <th className="py-2 px-4 border">Total Orders</th>
              <th className="py-2 px-4 border">Avg Order Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-100">
              <td className="py-2 px-4 border">${data.kpis.totalSales}</td>
              <td className="py-2 px-4 border">{data.kpis.totalOrders}</td>
              <td className="py-2 px-4 border">${data.kpis.avgOrderValue}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sales Trend Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-2">Sales Trend (Monthly)</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-md text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">Month</th>
              <th className="py-2 px-4 border">Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.salesTrend.map((item, idx) => (
              <tr key={idx} className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border">{item.month}</td>
                <td className="py-2 px-4 border">${item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4" style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.salesTrend}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Sales Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-2">Sales by Category</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-md text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.categorySales.map((item, idx) => (
              <tr key={idx} className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border">{item.category}</td>
                <td className="py-2 px-4 border">${item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4" style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.categorySales}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Region Sales Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-2">Sales by Region</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-md text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">Region</th>
              <th className="py-2 px-4 border">Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.regionSales.map((item, idx) => (
              <tr key={idx} className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border">{item.region}</td>
                <td className="py-2 px-4 border">${item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4" style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.regionSales}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FFBB28" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Products Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-2">Top Products</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-md text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">Product</th>
              <th className="py-2 px-4 border">Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.topProducts.map((item, idx) => (
              <tr key={idx} className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border">{item.name}</td>
                <td className="py-2 px-4 border">${item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Customers Table */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-2">Top Customers</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-md text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">Customer</th>
              <th className="py-2 px-4 border">Spend</th>
            </tr>
          </thead>
          <tbody>
            {data.topCustomers.map((item, idx) => (
              <tr key={idx} className="bg-white hover:bg-gray-100">
                <td className="py-2 px-4 border">{item.name}</td>
                <td className="py-2 px-4 border">${item.spend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

