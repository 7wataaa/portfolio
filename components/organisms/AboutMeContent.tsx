import { Box, Center, HStack, Text } from '@chakra-ui/react';
import i from '../../text/js.json';
import { Heading, MyIcon } from '../atoms';
import { Contacts } from '../molecules';

export const AboutMeContent = () => {
  return (
    <Box paddingTop="20" paddingBottom="20">
      <Center>
        <Heading marginBottom="10">About me</Heading>
      </Center>

      <Center>
        <HStack spacing="5" align="start">
          <MyIcon />

          <Box>
            <Heading fontSize="1.5rem" color="black">
              Nawata Naoki
            </Heading>
            <Text
              maxWidth="17rem"
              marginTop="3"
              marginBottom="3"
              whiteSpace="pre-wrap"
            >
              {i.SELF_INTRODUCTION}
            </Text>
            <Contacts items={[i.GITHUB_CONTACT, i.EMAIL_CONTACT]} />
          </Box>
        </HStack>
      </Center>
    </Box>
  );
};
