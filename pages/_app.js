import { ChakraProvider } from '@chakra-ui/react'
import "../public/index.css";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App