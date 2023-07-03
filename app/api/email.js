import nodemailer from "nodemailer";

export default async (req, res) => {
  const {  email } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Email Subcription  from ${email}`,
      html: `<p>You have an email form Subcription form</p><br>
        <p><strong>Email: </strong> ${email}</p><br>

      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};

