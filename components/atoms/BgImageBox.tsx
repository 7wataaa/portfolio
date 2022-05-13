import { Box } from '@chakra-ui/react';
import BgImage from '../../public/background.png';

export const BgImageBox = ({
  children,
  css,
  ...props
}: React.ComponentProps<typeof Box>) => {
  return (
    <Box
      boxSizing="border-box"
      bgImage={BgImage.src}
      bgPosition="center"
      bgAttachment="fixed"
      bgSize="cover"
      bgRepeat="no-repeat"
      {...props}
    >
      {children}
    </Box>
  );
};
