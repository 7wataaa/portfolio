import { Center, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Image } from '../atoms';
import { WorkCardType } from './WorkCardTypes';

export const WorkCard = ({ thumbnailPath, pagePath, name }: WorkCardType) => {
  return (
    <LinkBox
      borderRadius="sm"
      w={['90vw', '35vw']}
      h={['180px', '200px']}
      bgColor="#D3D3D3"
      overflow="hidden"
      _hover={{
        shadow: 'xl',
        transition: 'all 0.2s ease-in-out',
      }}
    >
      <Center>
        <LinkOverlay href={pagePath}>
          <Image src={thumbnailPath} alt={`${name} thumbnail`} />
        </LinkOverlay>
      </Center>
    </LinkBox>
  );
};
