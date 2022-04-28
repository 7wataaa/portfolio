import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/link';

type ContactLinkType = NextLinkProps &
  ChakraLinkProps & { href: any; as?: any };

export type { ContactLinkType };
