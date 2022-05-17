import { default as NextImage } from 'next/image';
import { Box } from '@chakra-ui/react';

export const Image = ({
  width = '200px',
  height = '200px',
  ...props
}: React.ComponentProps<typeof NextImage>) => {
  return (
    <Box position="relative" w={width} h={height}>
      <NextImage layout="fill" objectFit="contain" {...props} />
    </Box>
  );
};
