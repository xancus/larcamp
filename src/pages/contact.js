import { useState } from 'react'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Checkbox, CheckboxGroup, Icon } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'
import { Button } from '@chakra-ui/button'
import Header from '@/components/Header'
import sendContactForm from '../services/api'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useFilter from '../hooks/useFilter'
import ReCAPTCHA from 'react-google-recaptcha'
import useCart from '@/hooks/useCart'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactForm() {
  const { cart, removeCart, setCart } = useCart()
  const { setFilters } = useFilter()
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [products, setSelectedProducts] = useState([])
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState(false)

  const handleRecaptchaChange = (val) => {
    if (val) {
      setCaptcha(true)
    }
  }

  const handleProducts = (elements) => {
    // en lloc de fer un add del slug fer un add del producte sencer desde el cart
    const addProduct = cart.filter((cartProduct) => elements.some((infoProd) => infoProd === cartProduct.slug))
    setSelectedProducts([...addProduct])
  }

  const handleSubmit = async (event) => {
    if (captcha === false) {
      alert('Please click <I"m not a robot> before sending the job')
    } else {
      event.preventDefault()
      setLoading(true)
      const data = { name, subject, email, message, products }

      if (products.length === 0) {
        toast.error('No has seleccionado ningún producto', {
          position: toast.POSITION.TOP_CENTER,
          closeOnClick: true,
          hideProgressBar: true,
          autoClose: 5000,
          draggable: false
        })
        setLoading(false)
        return
      }

      try {
        if (data.name && data.email && data.products && data.subject) {
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
          // remove elements of products from cart
          const removeFromCart = cart.filter((cartProd) => products.some((infoProd) => infoProd.id === cartProd.id))
          removeFromCart.forEach(prod => {
            removeCart(prod)
          })
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
        setMessage('')
      }
    }
  }

  const onBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.id]: true }))
  }

  return (
    <section className='mb-8 h-screen'>
      <div className='bg-light-blue mx-auto'>
        <Header changeFilters={setFilters} />
      </div>
      <div className='max-w-7xl mx-auto pb-5 h-full flex flex-row gap-4 flex-wrap'>
        <div className='basis-3/5 grow bg-gray-100 p-4'>
          <p className='text-slate-900'>El envío de este formulario no implica la compra del producto por lo que no pediremos ningún dato relacionado con tu cuenta bancaria.
            Este formulario se utiliza únicamente para ponerse en contacto con la nosotros y recibir una factura de respuesta correspondiente.
          </p><br />
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

          <FormControl mb={5} isInvalid={touched.subject && !subject} className='flex flex-col'>
            <FormLabel htmlFor='products' color='black' className='text-black flex flex-row'>Quiero realizar un pedido de los siguientes productos</FormLabel>
            <CheckboxGroup
              colorScheme='blue'
              onChange={handleProducts}
            >
              {cart.map((item) => (
                <Checkbox
                  key={item.id}
                  value={item.slug}
                  className='border-black'
                >
                  <p className='text-black'>{item.name}</p>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </FormControl>

          <FormControl mb={5} colorScheme='teal'>
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
          <Checkbox
            className='border-black'
          >
            <Link href='/avisoLegal' className='text-black'>
              Acepto la Política de Privacidad
            </Link>
          </Checkbox><br /><br />
          <Button
            variant='outline'
            colorScheme='white'
            color='black'
            borderColor='orange.800'
            isLoading={loading}
            isDisabled={!email || !name || !subject}
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </div>
        <section className='min-w-[20rem] flex-100 w-auto grow py-4'>
          <h2 className='text-black font-medium text-md gap-x-4 mx-4'>Tu carrito</h2>
          {cart.length > 0 && (
            cart.map(element => {
              return (
                <div key={element.id} className='flex flex-row py-6 mx-6 gap-x-4 flex-wrap border-b border-gray-300 items-center'>
                  <Link href={`/products/${encodeURIComponent(element.id)}`}>
                    <Image src={element.image} alt={element.name} className='max-w-[100px] object-contain' height={250} width={250} />
                  </Link>
                  <div>
                    <h3 className='text-black font-semibold text-md'>{element.name}</h3>
                    <div className='flex flex-row flex-wrap mt-2'>
                      <p className='text-black font-medium text-md mr-2'>Cantidad</p>
                      <button
                        onClick={() => removeCart(element)}
                        className='text-black rounded-full bg-gray-200 w-[24px] h-[24px] mr-2'
                      >
                        <Icon className='mb-1' as={MinusIcon} boxSize={3} />
                      </button>
                      <p className='mr-2 text-black'>{element.quantity}</p>
                      <button
                        onClick={() => setCart(element)}
                        className='text-black rounded-full bg-gray-200 w-[24px] h-[24px]'
                      >
                        <Icon className='mb-1' as={AddIcon} boxSize={3} />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </section>
      </div>
    </section>
  )
}
