import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '../config/theme'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
