import { ArrowBackIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { UrlObject } from 'url';

export const LinkButton = ({
  href = '/',
  icon = <ArrowBackIcon fontSize="2rem" />,
  ...props
}: React.ComponentProps<typeof IconButton> & { href?: string | UrlObject }) => {
  return (
    <NextLink href={href} passHref>
      <IconButton
        as="a"
        variant="solid"
        colorScheme="green"
        icon={icon}
        {...props}
      />
    </NextLink>
  );
};
