import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Leaderboard() {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    fetch("/leaderboard.json")
      .then(res => res.json())
      .then(data => {
        // Sort interns by donation descending
        const sorted = data.sort((a, b) => b.donations - a.donations);
        setInterns(sorted);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">🏆 Intern Leaderboard</h1>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Rank</th>
              <th>Name</th>
              <th>Referral Code</th>
              <th>Donations (₹)</th>
            </tr>
          </thead>
          <tbody>
            {interns.map((intern, index) => (
              <tr key={intern.referralCode} className="border-b">
                <td className="py-2 font-semibold">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                </td>
                <td>{intern.name}</td>
                <td className="font-mono text-sm">{intern.referralCode}</td>
                <td className="font-bold text-green-600">{intern.donations.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 text-center">
          <Link to="/dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
    