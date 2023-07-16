import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;
        try {
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: email,
                to: process.env.EMAIL_USER,
                subject: `Email Subcription  from ${email}`,
                html: `<p>You have an email form Subcription form</p><br>
    <p><strong>Email: </strong> ${email}</p><br>

  `,

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
};

