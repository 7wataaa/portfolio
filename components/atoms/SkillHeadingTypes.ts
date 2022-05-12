import { Heading as ChakraHeading } from '@chakra-ui/react';

type SkillHeadingType = React.ComponentProps<typeof ChakraHeading> & {
  children: string;
};

export type { SkillHeadingType };
