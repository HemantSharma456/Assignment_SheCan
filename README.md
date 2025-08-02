# Intern Dashboard Application

A modern React.js dashboard for tracking intern fundraising progress with a Node.js backend API. Features include profile management, donation tracking, and a gamified rewards system.

## 🚀 Features

- **Intern Profile**: Display name and referral code
- **Donation Tracking**: Real-time donation statistics
- **Rewards System**: Gamified achievements and progress tracking
- **Modern UI**: Beautiful Tailwind CSS design with responsive layout
- **REST API**: Backend endpoints for data management
- **Real-time Updates**: Live data fetching from backend

## 📁 Project Structure

```
/
├── client/                 # React.js frontend
│   ├── src/
│   │   ├── App.jsx        # Main dashboard component
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Tailwind CSS imports
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── app.js             # Express server with API endpoints
│   └── package.json
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The backend server will run on `http://localhost:3000`

### Frontend Setup

1. Open a new terminal and navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or the next available port)

## 🔗 API Endpoints

### Dashboard Data
```
GET /api/intern/dashboard
```
Returns complete intern dashboard data including name, referral code, and donation statistics.

**Response Example:**
```json
{
  "success": true,
  "data": {
    "name": "Alex Johnson",
    "referralCode": "alexj2025",
    "totalDonations": 2450.75,
    "joinDate": "2025-01-01",
    "donationsCount": 18
  }
}
```

### Profile Information
```
GET /api/intern/profile
```
Returns basic profile information.

### Donation Statistics
```
GET /api/intern/donations
```
Returns donation-specific data.

### Health Check
```
GET /api/health
```
Server health check endpoint.

## 🎮 Dashboard Features

### Profile Section
- **Intern Name**: Dynamic display from backend
- **Referral Code**: Copy-to-clipboard functionality
- **Avatar**: Auto-generated from first letter of name

### Statistics Cards
- **Total Donations Raised**: Formatted currency display
- **Donations Count**: Number of individual donations
- **Member Since**: Join date with proper formatting

### Rewards System
- **Progress Bar**: Visual progress to next reward
- **Achievement Cards**: 6 different reward tiers
- **Unlock Status**: Visual indicators for achieved rewards

#### Reward Tiers
1. 🎯 **First Donation** - $1
2. ⭐ **Rising Star** - $500
3. 🏆 **Team Player** - $1,000
4. 👑 **Champion** - $2,500
5. 🔥 **Legend** - $5,000
6. 💎 **Ultimate Hero** - $10,000

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Gradient Backgrounds**: Modern blue-to-indigo gradients
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages
- **Interactive Elements**: Hover effects and transitions
- **Card-based Layout**: Clean, organized information display

## 🧪 Testing with Postman

You can test the API endpoints using Postman or any HTTP client:

1. **Dashboard Data**: `GET http://localhost:3000/api/intern/dashboard`
2. **Profile Info**: `GET http://localhost:3000/api/intern/profile`
3. **Donations**: `GET http://localhost:3000/api/intern/donations`
4. **Health Check**: `GET http://localhost:3000/api/health`

## 🔄 Data Flow

1. Frontend loads and shows loading state
2. React component fetches data from backend API
3. Backend returns dummy data (easily replaceable with real database)
4. Frontend processes data and updates UI
5. Rewards system calculates progress and unlocked achievements
6. User sees complete dashboard with real-time data

## 🛠️ Customization

### Backend Data
Edit the `internData` object in `server/app.js` to change:
- Intern name
- Referral code
- Donation amounts
- Join date

### Rewards Configuration
Modify the `rewards` array in `client/src/App.jsx` to:
- Add new achievement tiers
- Change reward descriptions
- Update threshold amounts
- Customize icons and styling

### Styling
The application uses Tailwind CSS. Customize:
- Color schemes in the component classes
- Layout spacing and sizing
- Animation and transition effects

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.