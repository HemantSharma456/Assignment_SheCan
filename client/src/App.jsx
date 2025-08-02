import React from 'react'
import Dashboard from "./pages/Dashboard";
import SignIn from './components/SignIn'
import Leaderboard from './pages/Leaderboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard/>}/>
      </Routes>
    </Router>
  )
}

export default App