import { mailOptions, transporter } from '../../config/nodemailer'

const generateEmailContent = (data) => {
  const html1 = `
  <h4>Has rebut una comanda a través de la pàgina web</h4>
  <p>El mail de la persona és:  ${data.email}</p> \n \n
  <h4>Els productes que ha demanat són:</h4>`
  const htmlProd = data.products.map(prod => {
    return `<p style='margin: 0'>${prod.name} i n'ha demanat un total de: ${prod.quantity}</p>`
  })
  const html2 = htmlProd + `
   \n \n
  <h4>Si ha deixat un missatge el veuràs aquí a sota:</h4>
  <p>${data.message}
  </p>
  `
  return { html: html1 + html2 }
}

export default async function mail(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    // const captcha = await verifyRecaptcha(data.token)

    if (!data.name || !data.email || !data.subject || !data.products) {
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
