import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <ChakraProvider>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
            </ChakraProvider>
        </MoralisProvider>
    )
}

export default MyApp
//
