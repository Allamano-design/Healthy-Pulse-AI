const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 🛠️ FIX 1: Increase limits for profile pictures
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("📡 Neural Hub Connected to MongoDB"))
  .catch(err => console.error("❌ Connection Error:", err));

// Routes
app.use('/api/auth', require('./routes/auth'));

// Test Route
app.get('/', (req, res) => res.send("HealthAI Backend is Online"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));