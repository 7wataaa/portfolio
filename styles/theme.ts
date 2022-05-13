import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
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
