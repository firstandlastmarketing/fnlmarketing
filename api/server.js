import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'; // This is the standard library for sending email from a Node.js server.
import chatRoutes from './routes/chat.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware Setup
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());

// API Routes - Delegate chat logic to the chat.js file
app.use('/api/chat', chatRoutes);

// === FINAL, CORRECTED /api/send-lead ENDPOINT ===
// This endpoint handles the lead form submission.
app.post('/api/send-lead', async (req, res) => {
  const { name, email, phone, services, message } = req.body;

  // 1. Basic Validation: Ensure required fields are present.
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // 2. Create Nodemailer Transporter: This is how the server connects to EmailJS.
  // It uses the credentials securely stored in your .env file.
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: false, // Port 587 uses STARTTLS, so `secure` is false.
    auth: {
      user: process.env.EMAIL_USER, // Your EmailJS Service ID
      pass: process.env.EMAIL_PASS, // Your EmailJS Account Password from .env
    },
  });

  // 3. Construct the Email: Define what the email will look like.
  const mailOptions = {
    from: `"${name} (Chatbot)" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: `🚀 New Lead from Chatbot: ${name}`,
    html: `
      <h2>New Project Lead via Chatbot</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Interested Services:</strong> ${services || 'Not specified'}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  // 4. Send the Email (with robust error handling)
  try {
    await transporter.sendMail(mailOptions);
    
    // If successful, send a confirmation to the user.
    res.status(200).json({ reply: "Thank you for reaching out! We've received your information and will be in touch shortly." });

  } catch (error) {
    // This logs the exact reason to your server console if anything goes wrong.
    console.error('--- 🚨 EMAILJS SEND ERROR 🚨 ---');
    console.error('Failed to send email. Check .env credentials and EmailJS account status.');
    console.error('Timestamp:', new Date().toISOString());
    console.error('Error Details:', error);
    console.error('--- END OF ERROR ---');
    
    // Send a generic, safe error message back to the user.
    res.status(500).json({ error: 'Failed to send email due to a server configuration issue.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Jacob's brain is running on port ${PORT}`);
  console.log(`📡 Accepting requests from: ${process.env.ALLOWED_ORIGIN}`);
});