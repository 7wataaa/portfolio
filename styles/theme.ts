import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: { fontWeight: 'normal' },
    },
    Divider: {
      baseStyle: {
        borderColor: '#707070',
      },
    },
  },
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
