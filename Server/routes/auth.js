const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

// --- MIDDLEWARE: PROTECT ROUTE ---
// This prevents crashing by ensuring 'req.user' exists for private routes
const protect = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith('Bearer')) {
    try {
      token = token.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ msg: "Not authorized" });
    }
  } else {
    res.status(401).json({ msg: "No token, authorization denied" });
  }
};

// --- 1. REGISTER OPERATOR ---
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "Operator already exists." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const vCode = Math.floor(100000 + Math.random() * 900000).toString();

    user = new User({
      name,
      email,
      password: hashedPassword,
      verificationCode: vCode
    });

    await user.save();

    try {
      await sendEmail({
        email: user.email,
        subject: 'HealthAI | Neural Protocol Verification',
        message: `Your 6-digit verification cipher is: ${vCode}`
      });
      res.status(201).json({ msg: "Registration successful. Check your Comm-Link." });
    } catch (err) {
      res.status(500).json({ msg: "User saved, but email failed to dispatch." });
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// --- 2. VERIFY IDENTITY ---
router.post('/verify-email', async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Operator link not found." });
    if (user.isVerified) return res.status(400).json({ msg: "Neural Link already active." });

    if (user.verificationCode && user.verificationCode.toString() === code.toString().trim()) {
      user.isVerified = true;
      user.verificationCode = undefined; 
      await user.save();
      return res.status(200).json({ msg: "Neural Link Verified! Access granted." });
    } else {
      return res.status(400).json({ msg: "Invalid verification cipher." });
    }
  } catch (err) {
    res.status(500).json({ msg: "Server Error during identity sync." });
  }
});

// --- 3. LOGIN (Updated to send full user object) ---
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });
    if (!user.isVerified) return res.status(401).json({ msg: "Neural Link not verified." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    
    // Send full data so the frontend store can save it immediately
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email,
        location: user.location,
        bio: user.bio,
        profilePic: user.profilePic
      } 
    });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// --- 4. FORGOT PASSWORD ---
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Operator link not found." });

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    const resetUrl = `http://localhost:8080/reset-password/${resetToken}`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'HealthAI | Access Recovery Protocol',
        message: `Reset your key here: ${resetUrl}`
      });
      res.json({ msg: "Recovery link dispatched. Check your Email." });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();
      res.status(500).json({ msg: "Mail delivery failed." });
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// --- 5. RESET PASSWORD ---
router.post('/reset-password/:token', async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) return res.status(400).json({ msg: "Invalid or expired recovery token." });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ msg: "Neural link restored. Password updated." });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// --- 6. GET CURRENT USER (For persistence on refresh) ---
router.get('/me', protect, async (req, res) => {
  res.json(req.user);
});

// --- 7. UPDATE PROFILE (The "Save" function) ---
router.put('/update-profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    const { name, location, bio, profilePic } = req.body;
    
    user.name = name || user.name;
    user.location = location || user.location;
    user.bio = bio || user.bio;
    user.profilePic = profilePic || user.profilePic;

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).send("Sync Error");
  }
});

module.exports = router;