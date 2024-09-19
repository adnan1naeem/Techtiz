import nodemailer from "nodemailer";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, content } = req.body;
    console.log("==>", Object.keys({ email, content }));
    console.log(req.body);
    if (!(email && content)) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Invalid Body",
      });
    }
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hr@techtiz.co",
          pass: "fnwe tzxa pkei iqzu",
        },
      });
      const mailOptions = {
        from: "Applicant <hr@techtiz.co>",
        to: "hr@techtiz.co",
        subject: `CV Received from ${email}`,
        html: `<p>Email Received: ${email}</>`,
        attachments: [
          {
            filename: `${email}.pdf`,
            content,
            encoding: "base64",
          },
        ],
      };
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).send(`Error sending email: ${error.message}`);
        }
        console.log(info);
        return res.send("File uploaded and email sent successfully!");
      });
    } catch (error) {
      console.error("Error reading PDF file:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Handle any other HTTP method
  }
}
export const config = {
  maxDuration: 10,
  api: {
    bodyParser: {
      sizeLimit: "5mb", // Set desired value here
    },
  },
};
