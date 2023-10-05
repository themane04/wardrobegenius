const nodemailer = require('nodemailer');

async function sendEmail() {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',  // you can use other services like 'yahoo', 'outlook', etc.
        auth: {
            user: 'tomevmarjan0@gmail.com', // your email address
            pass: 'hfsf gdmz ddwp vlci' // your email password
        }
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Ben" <tomevmarjan0@gmail.com>', // sender address
        to: "recipient@example.com", // list of receivers
        subject: "Test Subject", // Subject line
        text: "Hello, this is a test email", // plain text body
    });

    console.log("Email sent:", info.response);
}

sendEmail().catch(console.error);
