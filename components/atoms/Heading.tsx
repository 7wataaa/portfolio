import { Heading as ChakraHeading } from '@chakra-ui/react';
import { HeadingType } from './HeadingTypes';

export const Heading = ({ fontSize = '5xl', ...props }: HeadingType) => {
  return (
    <ChakraHeading fontSize={fontSize} color={'heading.main'} {...props}>
      {props.children}
    </ChakraHeading>
  );
};
