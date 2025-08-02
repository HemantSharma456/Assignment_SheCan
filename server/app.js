const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Dummy data for intern dashboard
const internData = {
    name: "Alex Johnson",
    referralCode: "alexj2025",
    totalDonations: 2450.75,
    joinDate: "2025-01-01",
    donationsCount: 18
};

// API endpoint to get intern dashboard data
app.get("/api/intern/dashboard", (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: internData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

// API endpoint to get intern basic info
app.get("/api/intern/profile", (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: {
                name: internData.name,
                referralCode: internData.referralCode
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

// API endpoint to get donation stats
app.get("/api/intern/donations", (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: {
                totalAmount: internData.totalDonations,
                donationsCount: internData.donationsCount,
                joinDate: internData.joinDate
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running",
        timestamp: new Date().toISOString()
    });
});

app.listen(3000, () => {
    console.log("The port is running at 3000");
});