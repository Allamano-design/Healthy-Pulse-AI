const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true // Good practice to prevent case-sensitivity issues
  },
  password: { 
    type: String, 
    required: true 
  },
  profilePic: { 
    type: String, 
    default: '' 
  },
  
  // --- VERIFICATION LOGIC ---
  isVerified: { 
    type: Boolean, 
    default: false 
  },
  verificationCode: String,

  // --- PASSWORD RECOVERY LOGIC ---
  resetPasswordToken: String,
  resetPasswordExpires: Date,

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);