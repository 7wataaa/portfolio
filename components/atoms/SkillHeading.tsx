import { Heading as ChakraHeading } from '@chakra-ui/react';
import { SkillHeadingType } from './SkillHeadingTypes';

export const SkillHeading = ({
  fontSize = '2xl',
  ...props
}: SkillHeadingType) => {
  return (
    <ChakraHeading fontSize={fontSize} {...props}>
      {props.children}
    </ChakraHeading>
  );
};
