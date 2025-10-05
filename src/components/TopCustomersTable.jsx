import React from "react";
import { formatCurrency } from "../utils/dataProcessing";

export default function TopCustomersTable({ data }) {
  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <h2 className="text-lg font-semibold mb-2">Top Customers</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-2 py-1">Customer</th>
            <th className="text-right px-2 py-1">Spend</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c, i) => (
            <tr key={i} className="border-t">
              <td className="px-2 py-1">{c.name}</td>
              <td className="px-2 py-1 text-right">{formatCurrency(c.spend)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
