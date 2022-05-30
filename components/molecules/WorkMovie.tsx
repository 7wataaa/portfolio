import { Center } from '@chakra-ui/react';
import { WorkMovieType } from './WorkMovieTypes';

export const WorkMovie = ({
  googleCloudMovieURL,
  boxSize = '500px',
}: WorkMovieType) => {
  return (
    <Center boxSize={boxSize}>
      <iframe
        width={boxSize}
        src={googleCloudMovieURL}
        height={boxSize}
        allow="autoplay"
      />
    </Center>
  );
};
