import { Heading as ChakraHeading } from '@chakra-ui/react';
import { HeadingType } from './HeadingTypes';

export const Heading = ({ fontSize = 'xl', ...props }: HeadingType) => {
  return (
    <ChakraHeading fontSize={fontSize} {...props}>
      {props.children}
    </ChakraHeading>
  );
};
