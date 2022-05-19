import { VStack } from '@chakra-ui/react';
import { LinkButton } from '../atoms';

export const WorkPageHeader = () => {
  return (
    <VStack
      minWidth={['0', '50px']}
      height={['0', '100vh']}
      paddingY="3"
      boxSizing="border-box"
      bgImage="/background.png"
      bgPosition="left"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor="white"
    >
      <LinkButton aria-label="Back to home page" />
    </VStack>
  );
};
