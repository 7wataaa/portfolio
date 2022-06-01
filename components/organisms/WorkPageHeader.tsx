import { VStack, useBreakpointValue } from '@chakra-ui/react';
import { LinkButton } from '../atoms';

export const WorkPageHeader = () => {
  const isHeaderVisible = useBreakpointValue({
    base: false,
    md: true,
  });

  if (!isHeaderVisible) {
    return <></>;
  }

  return (
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
  );
};
