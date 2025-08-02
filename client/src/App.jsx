import React, { useState, useEffect } from 'react'

// Background configuration - easily customize your background here
const BACKGROUND_CONFIG = {
  // Set to 'image', 'gradient', or 'none'
  type: 'image',
  
  // Background image options
  image: {
    // You can use any of these image URLs or add your own
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80', // Business/Team
    // Alternative images you can use:
    // url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Office space
    // url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // City skyline
    // url: './background.jpg', // Use this for local images in public folder
    opacity: 0.2,
    overlay: 'from-blue-50/80 to-indigo-100/80'
  },
  
  // Gradient fallback
  gradient: 'from-blue-50 to-indigo-100'
};

// Reusable Background Wrapper Component
const BackgroundWrapper = ({ children, config = BACKGROUND_CONFIG, errorMode = false }) => {
  const baseClasses = "min-h-screen relative";
  const gradientClasses = errorMode 
    ? "bg-gradient-to-br from-red-50 to-pink-100" 
    : `bg-gradient-to-br ${config.gradient}`;

  return (
    <div className={`${baseClasses} ${gradientClasses}`}>
      {/* Background Image */}
      {config.type === 'image' && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${config.image.url}')`,
              opacity: errorMode ? config.image.opacity * 0.5 : config.image.opacity
            }}
          ></div>
          {/* Gradient overlay for better readability */}
          <div className={`absolute inset-0 bg-gradient-to-br ${errorMode ? 'from-red-50/80 to-pink-100/80' : config.image.overlay}`}></div>
        </>
      )}
      
      {/* Content with proper z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch dashboard data from backend
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/api/intern/dashboard');
        const result = await response.json();
        
        if (result.success) {
          setDashboardData(result.data);
        } else {
          setError('Failed to load dashboard data');
        }
      } catch (err) {
        setError('Unable to connect to server');
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Rewards data (static)
  const rewards = [
    { id: 1, title: "First Donation", description: "Complete your first referral", icon: "🎯", unlocked: true, threshold: 1 },
    { id: 2, title: "Rising Star", description: "Raise $500 in donations", icon: "⭐", unlocked: true, threshold: 500 },
    { id: 3, title: "Team Player", description: "Raise $1000 in donations", icon: "🏆", unlocked: true, threshold: 1000 },
    { id: 4, title: "Champion", description: "Raise $2500 in donations", icon: "👑", unlocked: false, threshold: 2500 },
    { id: 5, title: "Legend", description: "Raise $5000 in donations", icon: "🔥", unlocked: false, threshold: 5000 },
    { id: 6, title: "Ultimate Hero", description: "Raise $10000 in donations", icon: "💎", unlocked: false, threshold: 10000 }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const getProgressToNext = () => {
    if (!dashboardData) return 0;
    const nextReward = rewards.find(reward => !reward.unlocked && dashboardData.totalDonations < reward.threshold);
    if (!nextReward) return 100;
    return (dashboardData.totalDonations / nextReward.threshold) * 100;
  };

  const getNextReward = () => {
    if (!dashboardData) return null;
    return rewards.find(reward => !reward.unlocked && dashboardData.totalDonations < reward.threshold);
  };

  if (loading) {
    return (
      <BackgroundWrapper config={BACKGROUND_CONFIG} errorMode={false}>
        <div className="flex items-center justify-center min-h-screen">
                      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 text-center">Loading dashboard...</p>
            </div>
          </div>
        </BackgroundWrapper>
    );
  }

  if (error) {
    return (
      <BackgroundWrapper config={BACKGROUND_CONFIG} errorMode={true}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center border border-white/20">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Dashboard</h2>
          <p className="text-gray-600">{error}</p>
                        <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </BackgroundWrapper>
    );
  }

      return (
      <BackgroundWrapper config={BACKGROUND_CONFIG} errorMode={false}>
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Intern Dashboard</h1>
          <p className="text-gray-600">Track your fundraising progress and rewards</p>
        </header>

        {/* Profile Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-white/20">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {dashboardData?.name?.charAt(0) || 'U'}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{dashboardData?.name}</h2>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Referral Code:</span>
                <code className="bg-gray-100 px-3 py-1 rounded-md font-mono text-indigo-600 font-semibold">
                  {dashboardData?.referralCode}
                </code>
                <button 
                  onClick={() => navigator.clipboard?.writeText(dashboardData?.referralCode)}
                  className="text-indigo-500 hover:text-indigo-700 transition-colors"
                  title="Copy referral code"
                >
                  📋
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Donations */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Donations Raised</p>
                <p className="text-3xl font-bold text-green-600">
                  {formatCurrency(dashboardData?.totalDonations || 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>

          {/* Donations Count */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Donations</p>
                <p className="text-3xl font-bold text-blue-600">{dashboardData?.donationsCount || 0}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>

          {/* Join Date */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Member Since</p>
                <p className="text-3xl font-bold text-purple-600">
                  {dashboardData?.joinDate ? new Date(dashboardData.joinDate).toLocaleDateString() : 'N/A'}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress to Next Reward */}
        {getNextReward() && (
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-white/20">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Progress to Next Reward</h3>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{getNextReward().icon}</span>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">{getNextReward().title}</span>
                  <span className="text-sm text-gray-600">
                    {formatCurrency(dashboardData.totalDonations)} / {formatCurrency(getNextReward().threshold)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(getProgressToNext(), 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{getNextReward().description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Rewards Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Rewards & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rewards.map((reward) => {
              const isUnlocked = dashboardData?.totalDonations >= reward.threshold;
              return (
                <div 
                  key={reward.id}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    isUnlocked 
                      ? 'border-green-200 bg-green-50 shadow-md' 
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-2xl ${isUnlocked ? 'grayscale-0' : 'grayscale'}`}>
                      {reward.icon}
                    </span>
                    <div className="flex-1">
                      <h4 className={`font-bold ${isUnlocked ? 'text-green-800' : 'text-gray-600'}`}>
                        {reward.title}
                      </h4>
                      <p className={`text-sm ${isUnlocked ? 'text-green-600' : 'text-gray-500'}`}>
                        {reward.description}
                      </p>
                      <p className={`text-xs mt-1 ${isUnlocked ? 'text-green-500' : 'text-gray-400'}`}>
                        {formatCurrency(reward.threshold)}
                      </p>
                    </div>
                    {isUnlocked && (
                      <div className="text-green-500">
                        ✅
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-600">
          <p>Keep up the great work! Every donation makes a difference. 🌟</p>
        </footer>
      </div>
    </BackgroundWrapper>
  );
};

export default App