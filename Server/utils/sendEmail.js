const nodemailer = require('nodemailer');
// We call config again here just to be 100% sure the variables are loaded
require('dotenv').config(); 

const sendEmail = async (options) => {
  // LOGGING CHECK: This will show in your terminal to confirm the server sees your credentials
  console.log("Checking credentials...", process.env.EMAIL_USER ? "Email Found" : "Email MISSING");

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Note: Nodemailer uses 'pass', not 'password'
    },
  });

  const mailOptions = {
    from: `"HealthAI Neural Hub" <${process.env.EMAIL_USER}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: `
      <div style="background-color: #020617; color: white; padding: 40px; font-family: sans-serif; border: 1px solid #10b981; border-radius: 20px;">
        <h1 style="color: #10b981; font-style: italic; text-transform: uppercase;">Neural Link Initialized</h1>
        <p style="font-size: 16px;">Your verification cipher is below:</p>
        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; text-align: center; border-radius: 10px;">
          <span style="font-size: 32px; font-weight: 900; letter-spacing: 10px; color: #10b981;">${options.message.split(': ')[1]}</span>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📨 Neural Link sent successfully!");
  } catch (error) {
    console.error("❌ Nodemailer Error Detail:", error.message);
    throw error;
  }
};

module.exports = sendEmail;