import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import i from '../../texts/js.json';
import { Heading } from '../atoms';
import { WorkCard } from '../molecules';
import Fade from 'react-reveal/Fade';

export const WorksContent = () => {
  return (
    <Box paddingY="20">
      <Center>
        <Heading marginBottom="10">WORKS</Heading>
      </Center>

      <Center>
        <SimpleGrid spacingX="10" spacingY="5" columns={[1, 2]}>
          {i.WORK_CARDS.map((e, i) => (
            <Fade key={i} bottom delay={i * 100}>
              <WorkCard key={i} {...e} />
            </Fade>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};
