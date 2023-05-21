import { useState } from 'react'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'
import { Button } from '@chakra-ui/button'
import Header from '@/components/Header'
import sendContactForm from '../services/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useFilter from '../hooks/useFilter'
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm() {
  const { setFilters } = useFilter()
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState(false)

  const handleRecaptchaChange = (val) => {
    if (val) {
      setCaptcha(true)
    }
  }
  const handleSubmit = async (event) => {
    if (captcha === false) {
      alert('Please click <I"m not a robot> before sending the job')
    } else {
      event.preventDefault()
      setLoading(true)
      const data = { name, subject, email, message }

      try {
        if (data) {
          await sendContactForm(data)
          toast.success('Email enviado correctamente !', {
            position: toast.POSITION.TOP_CENTER,
            closeOnClick: true,
            hideProgressBar: true,
            autoClose: 5000,
            draggable: false
          })
          setTouched({})
          setName('')
          setEmail('')
          setSubject('')
          setLoading(false)
          setMessage('')
        }
      } catch (error) {
        toast.error('Error al enviar el mensaje', {
          position: toast.POSITION.TOP_CENTER,
          closeOnClick: true,
          hideProgressBar: true,
          autoClose: 5000,
          draggable: false
        })
        setLoading(false)
        setTouched({})
        setName('')
        setEmail('')
        setSubject('')
        setLoading(false)
        setMessage('')
      }
    }
  }

  const onBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.id]: true }))
  }

  return (
    <section className='mb-8 h-screen overflow-hidden'>
      <div className='bg-light-blue mx-auto px-12'>
        <Header changeFilters={setFilters} />
      </div>
      <div className='max-w-7xl mx-auto bg-gray-200 p-5 h-full'>
        <ToastContainer />
        <FormControl isRequired isInvalid={touched.name && !name} mb={5}>
          <FormLabel htmlFor='name' color='black'>Nombre </FormLabel>
          <Input
            id='name'
            borderColor='gray.500'
            focusBorderColor='black'
            color='black'
            type='text'
            value={name}
            errorBorderColor='red.300'
            required
            onChange={(e) => setName(e.target.value)}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.email && !email} mb={5}>
          <FormLabel htmlFor='email' color='black'>Correo electrónico</FormLabel>
          <Input
            id='email'
            borderColor='gray.500'
            focusBorderColor='black'
            color='black'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.subject && !subject} mb={5}>
          <FormLabel htmlFor='subject' color='black'>Asunto </FormLabel>
          <Input
            id='subject'
            borderColor='gray.500'
            focusBorderColor='black'
            color='black'
            type='text'
            value={subject}
            errorBorderColor='red.300'
            required
            onChange={(e) => setSubject(e.target.value)}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.message && !message} mb={5} colorScheme='teal'>
          <FormLabel htmlFor='message' color='black'>Mensaje</FormLabel>
          <Textarea
            id='message'
            borderColor='gray.500'
            focusBorderColor='black'
            autoFocus
            color='black'
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={onBlur}
          />
        </FormControl>
        <ReCAPTCHA className='mb-4' size='normal' sitekey='6LeNGSgmAAAAADI8AbnmtB1ed3wuAKY2qMIJlU6u' onChange={handleRecaptchaChange} />
        <Button
          variant='outline'
          colorScheme='white'
          color='black'
          borderColor='orange.800'
          isLoading={loading}
          isDisabled={!message || !email || !name}
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </div>
    </section>
  )
}
