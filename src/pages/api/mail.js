import { mailOptions, transporter } from '../../config/nodemailer'

const generateEmailContent = (data) => {
  const htmlD = `<p>Has recibido un mensaje por la web de este mail: ${data.email}</p> \n \n<h4>Mesaje:</h4><p>${data.message}</p>`
  return { html: htmlD }
}

export default async function mail(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    // const captcha = await verifyRecaptcha(data.token)

    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: 'Bad request: Missing some values' })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  }
  return res.status(500).json({ message: 'Failed to send email' })
}

/* const verifyRecaptcha = async token => {
  const secretKey = process.env.CAPTCHA_PRIVATE_KEY;

  const verificationUrl =
    'https://www.google.com/recaptcha/api/siteverify?secret=' +
    secretKey +
    '&response=' +
    token;

  return await fetch(verificationUrl, { method: 'POST' })
} */
