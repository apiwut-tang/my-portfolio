// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors')
const apiKeyAuth = require('./api-key-auth');
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use('/api',apiKeyAuth);

app.get('/api/get', (req, res) => res.send('Hello From Email'))
app.post('/api/send-email', async (req, res) => {
    console.log(req.body)  
  const { email, message , phoneNumber , firstName , lastName } = req.body;
  // Validate the form data (optional)

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: { // ข้อมูลการเข้าสู่ระบบ
      user: 'smitdev1122@gmail.com', 
      pass: 'avaqtoeuswtlatzb'
    },
    tls: {
        ciphers: 'SSLv3',
        minVersion: 'TLSv1', // ตั้งค่าเป็น 'TLSv1'
      },
   });

  const mailOptions = {
    from: email,
    to: 'wijitemee@gmail.com', // อีเมล์ที่คุณต้องการส่งไป
    subject: 'Portfolio Contact Me',
    text: `Email From: ${email}\nMessage: ${message} \nPhone Number: ${phoneNumber} \nFirstName: ${firstName} \LastName: ${lastName}`,
  };

  try {
    console.log("send mail");
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});