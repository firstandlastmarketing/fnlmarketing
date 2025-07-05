/*
/index.js (or your main server file)
--------------------------------------------------------------------------------
REVISION: 2.0.0
PURPOSE:
This is the master server file, now polished for production. It correctly
routes chat requests to our intelligent `chat.js` and provides a secure,
robust endpoint for handling lead form submissions via Nodemailer SMTP.
*/

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'; // Standard library for sending email from Node.js
import chatRoutes from './routes/chat.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// --- Middleware Setup ---
// Securely allow requests only from your frontend application
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json()); // To parse JSON request bodies

// --- API Routes ---
// Delegate all chat-related logic to our intelligent chat router
app.use('/api/chat', chatRoutes);


// --- LEAD SUBMISSION ENDPOINT ---
// This endpoint securely handles the lead form submission from the chatbot.
app.post('/api/send-lead', async (req, res) => {
  // 1. Destructure and Trim Input
  // Trimming prevents submission of empty whitespace and cleans the data.
  const { name, email, phone, message } = req.body;
  
  // RESILIENT FIELD HANDLING: Accept 'service' or 'services' from the form
  const serviceOfInterest = req.body.service || req.body.services;

  // 2. Robust Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  // 3. Create Nodemailer SMTP Transporter
  // This connects to your email provider (e.g., SendGrid, Mailgun, Google Workspace)
  // using credentials securely stored in your .env file.
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: process.env.EMAIL_PORT === '465', // true for port 465, false for most others (587)
    auth: {
      user: process.env.EMAIL_USER, // Your SMTP username
      pass: process.env.EMAIL_PASS, // Your SMTP password or App Password
    },
  });

  // 4. Construct the Professional HTML Email
  const mailOptions = {
    from: `"${name} (First & Last Chatbot)" <${process.env.EMAIL_FROM}>`, // e.g., "no-reply@yourdomain.com"
    to: process.env.EMAIL_TO, // The address that receives lead notifications
    subject: `🚀 New Project Lead via Chatbot: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #4A00E0;">🚀 New Project Lead via Chatbot</h1>
        <p>You have a new lead submitted through the Jacob AI assistant.</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f7f7f7;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background-color: #f7f7f7;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone || '<em>Not provided</em>'}</td>
          </tr>
           <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service of Interest:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${serviceOfInterest || '<em>Not specified</em>'}</td>
          </tr>
        </table>
        <h3 style="margin-top: 20px; color: #4A00E0;">Message:</h3>
        <div style="background-color: #f0e6ff; padding: 15px; border-left: 4px solid #4A00E0; border-radius: 4px;">
          <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr style="margin-top: 20px;">
        <p style="font-size: 0.9em; color: #777;">This lead was captured from the page: ${req.headers.referer || 'Unknown'}</p>
      </div>
    `,
  };

  // 5. Send the Email with Error Handling
  try {
    await transporter.sendMail(mailOptions);
    
    // Success: Send the exact confirmation message the frontend expects.
    res.status(200).json({ reply: "Thank you! We've received your information and will be in touch shortly to discuss your project." });

  } catch (error) {
    // Log the detailed error to your server console for debugging.
    console.error('--- 🚨 NODEMAILER SEND ERROR 🚨 ---');
    console.error('Failed to send lead email. Check .env SMTP credentials and email provider status.');
    console.error('Timestamp:', new Date().toISOString());
    console.error('Error Details:', error);
    console.error('--- END OF ERROR ---');
    
    // Send a generic, safe error message back to the user's browser.
    res.status(500).json({ error: 'Your message could not be sent due to a server configuration issue. Please contact us directly.' });
  }
});


// --- Start Server ---
app.listen(PORT, () => {
  console.log('----------------------------------------------------');
  console.log(`✅ Jacob's Brain is Online and Running on Port ${PORT}`);
  console.log(`📡 Accepting Requests From: ${process.env.ALLOWED_ORIGIN}`);
  console.log('----------------------------------------------------');
});