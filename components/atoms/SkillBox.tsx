import { Box, Center } from '@chakra-ui/react';
import { Heading } from '../atoms';
import { SkillBoxType } from './SkillBoxTypes';

export const SkillBox = ({
  boxName,
  children,
  css,
  ...props
}: SkillBoxType) => {
  return (
    <Box
      w={['100%', '80%']}
      paddingTop="7"
      paddingBottom="5"
      paddingX={['0', '13rem']}
      bgColor="#E2E2E2"
      {...props}
    >
      <Center>
        <Heading fontSize="3xl">{boxName}</Heading>
      </Center>
      {children}
    </Box>
  );
};
