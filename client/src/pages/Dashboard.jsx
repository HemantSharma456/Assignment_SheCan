import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate(); 

  const [user, setUser] = useState({
    name: "Hemant Sharma",
    referralCode: "hemant2025",
    donations: 12840,
  });

  const backnavigate = (e)=>{
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navbar */}
      <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">SheCan NGO</h1>
        <button className="text-red-500 font-medium" onClick={backnavigate}>Logout</button>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Welcome, {user.name} 👋</h2>
        <p className="text-gray-600 mb-6">Your Referral Code: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{user.referralCode}</span></p>

        {/* Donation stats */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">Total Donations Raised</h3>
          <p className="text-3xl font-bold text-green-600">₹{user.donations.toLocaleString()}</p>
        </div>

        {/* Rewards Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Rewards & Unlockables</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <img src="/badge1.png" alt="badge" className="h-16 mx-auto mb-2" />
              <p className="font-semibold">Bronze Contributor</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <img src="/badge2.png" alt="badge" className="h-16 mx-auto mb-2" />
              <p className="font-semibold">Referral Star</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <img src="/badge3.png" alt="badge" className="h-16 mx-auto mb-2" />
              <p className="font-semibold">Top 10% Intern</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
       <Link
            to="/leaderboard"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
            🏆 Show Leaderboard
        </Link>
        </div>


        {/* Invite button */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            onClick={() => navigator.clipboard.writeText(`https://ngo.com/ref/${user.referralCode}`)}
          >
            📋 Copy Referral Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
