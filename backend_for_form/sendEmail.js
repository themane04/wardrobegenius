const nodemailer = require('nodemailer');

async function sendEmail(data) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: `"${data.first_name} ${data.last_name}" <${process.env.EMAIL_USER}>`, // Shows the name but uses your email
        replyTo: data.email, // Replies go to the submitter's email
        to: 'tomevmarjan34@gmail.com', // Your email
        subject: `Message from ${data.first_name} ${data.last_name}`,
        text: `You received a message from ${data.first_name} ${data.last_name} (${data.email}): ${data.message}`,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
}


sendEmail().catch(console.error);
