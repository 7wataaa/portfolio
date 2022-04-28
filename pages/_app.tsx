import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    heading: {
      main: '#047800',
    },
  },
  fonts: {
    heading: 'Hue-Medium',
  },
  styles: {
    global: {
      body: {
        backgroundColor: '#E2E2E2',
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
