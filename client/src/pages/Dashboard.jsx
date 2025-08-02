import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate(); 

  const [user, setUser] = useState({
    name: "Hemant Sharma , Hiren Jain",
    referralCode: "hemant2025",
    donations: 12840,
  });

  const backnavigate = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://ngo.com/ref/${user.referralCode}`);
    alert("Referral link copied!");
  };

  return (
    <div className="min-h-screen bg-black ">

      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-3">
            {/* LOGO IMAGE */}
            <img src="/logo.jpg" alt="logo" className="h-8 w-8 object-contain" />
            
            {/* TEXT AFTER LOGO */}
            <h1 className="font-inter text-2xl font-bold text-blue-600 ">SheCan NGO</h1>
            <span className="text-sm text-gray-500 border-l pl-4">Intern Dashboard</span>
        </div>

        <div className="flex items-center space-x-4">
            <Link
            to="/leaderboard"
            className="text-sm bg-blue-100 text-blue-700 px-4 py-1.5 rounded-md hover:bg-blue-200 transition"
            >
            🏆 Leaderboard
            </Link>
            <button
            onClick={handleCopy}
            className="text-sm bg-green-100 text-green-700 px-4 py-1.5 rounded-md hover:bg-green-200 transition"
            >
            🔗 Copy Referral
            </button>
            <button
            onClick={backnavigate}
            className="text-sm text-red-500 hover:underline"
            >
            Logout
            </button>
        </div>
    </nav>

      {/* Main content */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4 text-red-600 font-inter">Welcome, {user.name} 👋</h2>
        <p className="text-white mb-6">
          Your Referral Code:{" "}
          <span className="font-mono bg-gray-200 px-2 py-1 rounded text-black">
            {user.referralCode}
          </span>
        </p>

        {/* Donation stats */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 h-[150px]">
          <h3 className="text-xl font-semibold mb-2">Total Donations Raised</h3>
          <p className="text-3xl font-bold text-green-600">
            ₹{user.donations.toLocaleString()}
          </p>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Current Milestone */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold mb-2 text-blue-600">🎯 Current Milestone</h4>
            <p className="text-gray-700">Reached ₹10,000 donation mark</p>
        </div>

        {/* Next Goal */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold mb-2 text-purple-600">🚀 Next Goal</h4>
            <p className="text-gray-700">Hit ₹15,000 to unlock the Silver Badge</p>
        </div>

        {/* Impact */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold mb-2 text-green-600">👶 Impact Created</h4>
            <p className="text-gray-700">Helped 12 underprivileged children</p>
        </div>
        </div>


        {/* Rewards Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Rewards & Unlockables</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center h-[250px]">
              <img src="/badge1.png" alt="badge" className="h-[230px] mx-auto mb-2" />
              <p className="font-semibold text-white">Bronze Contributor</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center h-[250px]">
              <img src="/badge2.png" alt="badge" className="h-[230px] mx-auto mb-2" />
              <p className="font-semibold text-white">Referral Star</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center h-[250px]">
              <img src="/badge3.png" alt="badge" className="h-[230px] mx-auto mb-2" />
              <p className="font-semibold text-white">Top 50% </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
