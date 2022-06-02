import { Center, LinkBox, LinkOverlay, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Image, SkillHeading } from '../atoms';
import { WorkCardType } from './WorkCardTypes';

export const WorkCard = ({
  thumbnailPath,
  pagePath,
  title,
  summary,
}: WorkCardType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkBox
      borderRadius="sm"
      w={['90vw', '35vw']}
      h={['180px', '200px']}
      bgColor="#D3D3D3"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Center>
        <LinkOverlay href={pagePath}>
          <>
            <Image src={thumbnailPath} alt={`${title} thumbnail`} />
            <Center
              position="absolute"
              left="0"
              top="0"
              w="100%"
              h="100%"
              color="white"
              transition="all 0.2s ease-in-out"
              backgroundColor={isHovered ? '#00000099' : '#00000000'}
              opacity={isHovered ? 1 : 0}
            >
              <VStack spacing="5">
                <SkillHeading>{title}</SkillHeading>

                <Text>{summary}</Text>
              </VStack>
            </Center>
          </>
        </LinkOverlay>
      </Center>
    </LinkBox>
  );
};
