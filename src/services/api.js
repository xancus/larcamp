export default async function sendContactForm (data) {
  return fetch('/api/mail', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then((res) => {
      console.log(res)
      if (!res.ok) {
        throw new Error('Error al enviar el mensaje')
      } else {
        return res.json()
      }
    })
}
