require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({origin: 'https://mane004.github.io/'}));
app.use(bodyParser.json());

async function sendEmail(data) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: `"${data.first_name} ${data.last_name}" <${data.email}>`,
        to: 'tomevmarjan0@gmail.com',
        subject: 'Somebody filled out the form!',
        text: `Message from ${data.first_name} ${data.last_name}: ${data.message}`,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
}

app.post('/sendEmail', async (req, res) => {
    try {
        await sendEmail(req.body);
        res.status(200).send('Email sent');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on http://0.0.0.0:3000/');
});

