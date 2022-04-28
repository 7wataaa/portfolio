import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ContactLinkType } from './ContactLinkTypes';

const isExternalLink = (str: string) => {
  if (typeof str != 'string') {
    return false;
  }

  return str.startsWith('http');
};

export const ContactLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  children,
  ...props
}: ContactLinkType) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      passHref
    >
      <ChakraLink
        color={'teal.500'}
        {...props}
        onClick={(): void => (document.activeElement as HTMLElement).blur()}
        rel={isExternalLink(href) ? 'nofollow noreferrer' : undefined}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};
