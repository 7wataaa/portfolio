import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import i from '../../texts/js.json';
import { Heading } from '../atoms';
import { WorkCard } from '../molecules';

export const WorksContent = () => {
  return (
    <Box paddingY="20">
      <Center>
        <Heading marginBottom="10">WORKS</Heading>
      </Center>

      <Center>
        <SimpleGrid spacingX="10" spacingY="5" columns={[1, 2]}>
          {i.WORK_CARDS.map((e, i) => (
            <WorkCard key={i} {...e} />
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};
