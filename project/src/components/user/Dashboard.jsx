import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { month: 'Jan', actions: 4 },
  { month: 'Feb', actions: 6 },
  { month: 'Mar', actions: 3 },
  { month: 'Apr', actions: 7 },
];

export default function Dashboard() {
  const { user } = useAuth0();
  const userRole = localStorage.getItem("userRole") || "donor";

  return (
    <div className="min-h-screen w-full  bg-gradient-to-br from-gray-100 to-blue-100 p-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <img src={user.picture} alt="Profile" className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">{user.name}</h2>
            <p className="text-gray-700 text-lg">{user.email}</p>
            <p className="mt-2 text-blue-700 font-semibold capitalize">Role: {userRole}</p>
            <div className="mt-4 text-gray-600 text-sm space-y-1">
              <p>Member since: <span className="font-medium">January 2024</span></p>
              <p>Last login: <span className="font-medium">2 hours ago</span></p>
              <p>Status: <span className="text-green-600 font-bold">Active</span></p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-3">Total {userRole === 'donor' ? 'Donations' : 'Collections'}</h3>
            <p className="text-5xl font-extrabold">15</p>
            <p className="text-md mt-2 opacity-90">Reflects completed activities</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Monthly Activity Overview</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dummyData}>
                <XAxis dataKey="month" stroke="#4B5563" />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="actions" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
