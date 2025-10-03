"use client";
import { useState } from "react";

const tabs = [
  "Profile",
  "Account Settings",
  "ContextHub",
  "Billing & Usage",
  "User Management",
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Billing & Usage");

  return (
    <div className="min-h-screen bg-gray-50 p-6 w-full max-w-[1100px] mx-auto">
      <div className="text-sm text-gray-500 mb-4">
        <span className="px-2 py-1 bg-gray-100 rounded-full">Settings Dashboard</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2">Settings</h1>
      <p className="text-gray-500 mb-6">
        Manage your preferences and configurations with our enhanced interface
      </p>

    <div className="p-[20px] rounded-2xl border-2">
        {/* Tabs */}
      <div className="flex justify-around space-x-8 mb-6 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium ${
              activeTab === tab
                ? "text-gray-900 border-b-2 border-orange-300 cursor-pointer"
                : "text-gray-500 hover:text-gray-800 cursor-pointer"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

  <div className="flex flex-col gap-4">
      <div className="bg-white rounded-2xl shadow-sm p-6 gap-2">
        <h2 className="text-xl font-semibold mb-1">System Overview</h2>
        <p className="text-gray-500 mb-6">
          Current system statistics and usage metrics
        </p>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         
          <div className="p-4 border rounded-xl shadow-sm bg-white">
            <p className="text-gray-500 text-sm font-bold mb-1">Total Users</p>
            <h3 className="text-2xl font-bold">47</h3>
            <p className="text-gray-400 text-xs">From your company</p>
          </div>

   
          <div className="p-4 border rounded-xl shadow-sm bg-white">
            <p className="text-gray-500 text-sm font-bold mb-1">Total Accounts</p>
            <h3 className="text-2xl font-bold">2000</h3>
            <p className="text-gray-400 text-xs">Available across all batches</p>
          </div>


          <div className="p-4 border rounded-xl shadow-sm bg-white">
            <p className="text-gray-500 text-sm font-bold mb-1">Accounts Used</p>
            <h3 className="text-2xl font-bold">1385</h3>
            <p className="text-gray-400 text-xs">of 2000 available</p>
          </div>

    
          <div className="p-4 border rounded-xl shadow-sm bg-white">
            <p className="text-gray-500 text-sm font-bold mb-1">Usage Rate</p>
            <h3 className="text-2xl font-bold">69%</h3>
            <p className="text-gray-400 text-xs">Current batch utilization</p>
          </div>
        </div>
      </div>





       <div className="bg-white rounded-2xl shadow-sm p-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Billing Overview</h2>
        <p className="text-gray-500">Current billing tier, usage, and projected charges</p>
      </div>

    <div className="flex flex-col gap-4">
        {/* Tier & Peak Usage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Current Tier */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <p className="text-sm text-gray-500">Current Tier</p>
          <p className="text-xl font-semibold">Tier 2</p>
          <p className="text-sm text-gray-500 mt-1">Up to 2,000 accounts</p>
          <p className="text-lg font-medium mt-4">$36,000/year</p>
        </div>

        {/* Peak This Period */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <p className="text-sm text-gray-500">Peak This Period</p>
          <p className="text-3xl font-bold">1,385</p>
          <p className="text-sm text-gray-500 mt-1">Highest account count</p>
        </div>
      </div>

      {/* Current Tier Details */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Account Range</p>
            <p className="font-medium">1,001 - 2,000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Annual Price</p>
            <p className="font-medium">$36,000</p>
          </div>
          <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">Tier 2</span>
        </div>
      </div>

      {/* Available Billing Tiers */}
      <div className="border rounded-lg bg-white shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 font-semibold text-gray-600">Tier</th>
              <th className="text-left px-6 py-3 font-semibold text-gray-600">Account Range</th>
              <th className="text-left px-6 py-3 font-semibold text-gray-600">Annual Price</th>
              <th className="text-left px-6 py-3 font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              { tier: 'Tier 1', range: '1 - 1,000', price: '$18,000', status: 'Previous', action: null },
              { tier: 'Tier 2', range: '1,001 - 2,000', price: '$36,000', status: 'Current', action: null },
              { tier: 'Tier 3', range: '2,001 - 3,000', price: '$54,000', status: 'Available', action: 'Upgrade' },
              { tier: 'Tier 4', range: '3,001 - 4,000', price: '$72,000', status: 'Available', action: 'Upgrade' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-4">{row.tier}</td>
                <td className="px-6 py-4">{row.range}</td>
                <td className="px-6 py-4">{row.price}</td>
                <td className="px-6 py-4">
                  <span className={`text-sm px-2 py-1 rounded-full ${row.status === 'Current' ? 'bg-black text-white' : row.status === 'Previous' ? 'bg-gray-100' : 'bg-green-100 text-green-700'}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  {row.action && (
                    <button className="text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                      ↑ {row.action}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>
    
    </div>
    </div>
  );
}
