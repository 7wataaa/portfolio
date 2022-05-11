import { TypographyProps, Heading } from '@chakra-ui/react';

type HeadingType = TypographyProps &
  React.ComponentProps<typeof Heading> & { children: string };

export type { HeadingType };
