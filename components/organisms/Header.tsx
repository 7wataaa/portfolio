import { Center } from '@chakra-ui/react';
import { BgImageBox, Heading, MyIcon } from '../atoms';

export const Header = () => {
  return (
    <BgImageBox h="40vh" w="100%">
      <Center h="100%">
        <MyIcon />
        <Heading
          fontSize="6xl"
          color="#ffffff"
          marginLeft={'1rem'}
          textShadow="0 5px 6px #00000062"
        >
          {"'s Portfolio"}
        </Heading>
      </Center>
    </BgImageBox>
  );
};
