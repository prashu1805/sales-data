import React from "react";
import { formatCurrency, formatNumber } from "../utils/dataProcessing";

export default function KPISection({ kpis }) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-white shadow rounded-xl text-center">
        <h2 className="text-lg font-semibold">Total Sales</h2>
        <p className="text-xl font-bold text-green-600">
          {formatCurrency(kpis.totalSales)}
        </p>
      </div>
      <div className="p-4 bg-white shadow rounded-xl text-center">
        <h2 className="text-lg font-semibold">Total Orders</h2>
        <p className="text-xl font-bold text-blue-600">
          {formatNumber(kpis.totalOrders)}
        </p>
      </div>
      <div className="p-4 bg-white shadow rounded-xl text-center">
        <h2 className="text-lg font-semibold">Avg. Order Value</h2>
        <p className="text-xl font-bold text-purple-600">
          {formatCurrency(kpis.avgOrderValue)}
        </p>
      </div>
    </div>
  );
}
