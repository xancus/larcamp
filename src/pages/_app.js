import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '../config/theme'
import { useEffect } from 'react'
import useCart from '@/hooks/useCart'

export default function App({ Component, pageProps }) {
  const { initializeCartFromLocalStorage } = useCart()
  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem('LarCart');
    if (cartFromLocalStorage) {
      initializeCartFromLocalStorage(JSON.parse(cartFromLocalStorage))
    }
  }, [initializeCartFromLocalStorage])

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
