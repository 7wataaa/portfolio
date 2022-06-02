import { Box, LinkBox, LinkOverlay } from '@chakra-ui/react';
import NextImage from 'next/image';
import { RepositoryType } from './RepositoryCardTypes';

export const RepositoryCard = ({ repository }: RepositoryType) => {
  return (
    <LinkBox>
      <LinkOverlay target="_blank" href={`https://github.com/${repository}`}>
        <Box
          position="relative"
          w="400px"
          h="100px"
          borderRadius="xl"
          overflow="clip"
        >
          <NextImage
            layout="fill"
            objectFit="contain"
            src={`https://gh-card.dev/repos/${repository}.svg?fullname=`}
            alt="Repository link image"
          />
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
};
