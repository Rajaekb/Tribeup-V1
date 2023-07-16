import nodemailer from 'nodemailer';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        //console.log(email)

        try {
            const transporter = nodemailer.createTransport({
                // Configure your email provider settings here
                // Example using Gmail SMTP:
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: email,
                to: process.env.EMAIL_USER,
                subject: `Contact form submission from ${name}`,
                html: `<p>You have a contact form submission</p><br>
                  <p><strong>Email: </strong> ${email}</p><br>
                  <p><strong>Message: </strong> ${message}</p><br>
                `
            };

            await transporter.sendMail(mailOptions);
            res.status(200).end();
        } catch (error) {
            console.error(error);
            res.status(500).end();
        }
    } else {
        res.status(404).end();
    }
}
