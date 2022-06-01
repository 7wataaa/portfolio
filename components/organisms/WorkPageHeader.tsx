import { VStack, useBreakpointValue } from '@chakra-ui/react';
import { LinkButton } from '../atoms';

export const WorkPageHeader = () => {
  const isHeaderVisible = useBreakpointValue({
    base: true,
    sm: false,
    md: true,
  });

  return (
    <>
      {isHeaderVisible && (
        <VStack
          minWidth={['50px']}
          height={['100vh']}
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
      )}
    </>
  );
};
