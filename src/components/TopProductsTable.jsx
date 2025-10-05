import React from "react";
import { formatCurrency } from "../utils/dataProcessing";

export default function TopProductsTable({ data }) {
  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <h2 className="text-lg font-semibold mb-2">Top Products</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-2 py-1">Product</th>
            <th className="text-right px-2 py-1">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={i} className="border-t">
              <td className="px-2 py-1">{p.name}</td>
              <td className="px-2 py-1 text-right">{formatCurrency(p.sales)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
