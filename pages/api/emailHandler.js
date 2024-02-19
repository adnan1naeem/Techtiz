import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, path } = req.body
        if (!(email && path)) {
            return res.status(400).json({
                error: 'Bad Request',
                message: "Invalid Body"
            })
        }
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'hr@techtiz.co',
                    pass: 'aitc qooa myjt lcwf'
                }
            });
            const mailOptions = {
                from: 'mbhatti@techtiz.co',
                to: 'mbhatti@techtiz.co',
                subject: `CV Received from ${email}`,
                html: `<p>Email Received: ${email}</>`,
                attachments: [
                    {
                        filename: `${email}.jpg`,
                        path,
                    }
                ]
            };
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error)
                    return res.status(500).send(`Error sending email: ${error.message}`);
                }
                console.log(info)
                return res.send('File uploaded and email sent successfully!');
            });
            // return res.status(200).send();
        } catch (error) {
            console.error('Error reading PDF file:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handle any other HTTP method
    }
}
export const config = {
    maxDuration: 30
}