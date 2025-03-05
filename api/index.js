const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors({ origin: 'https://ai-agency-d-llc-veel.vercel.app' }));


app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'goldmaster631026@gmail.com',
        pass: 'nanltrifupmwxiaq',
      },
    });

    const mailOptions = {
      from: 'goldmaster631026@gmail.com',
      to: 'auction221business@gmail.com',
      subject: `Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

module.exports = app;
