require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({origin: '*'}));
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
        from: `"${data.first_name} ${data.last_name}" <${process.env.EMAIL_USER}>`,
        to: 'tomevmarjan34@gmail.com',
        subject: 'Somebody filled out the form!',
        html: `
        <div style="font-family: sans-serif; color: #444; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h2 style="color: #FFC37B;">New Contact Form Submission</h2>
            <p><strong>From:</strong> ${data.first_name} ${data.last_name} (${data.email})</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
    `,
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

