import {
  Box,
  Center,
  HStack,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { WorkCarouselType } from './WorkCarouselTypes';

export const WorkCarousel = ({ contents }: WorkCarouselType) => {
  const mainContentTabPanels = contents.map((e, i) => {
    return (
      <TabPanel key={i}>
        <Box>{e.main}</Box>
      </TabPanel>
    );
  });

  const digistContentTabs = contents.map((e, i) => {
    return (
      <Tab key={i} _selected={{ boxShadow: '0 0 0 3px #4299e199' }}>
        <Center boxSize="100px">{e.digest ?? e.main}</Center>
      </Tab>
    );
  });

  return (
    <Tabs variant="line" align="center">
      <TabPanels>{mainContentTabPanels}</TabPanels>

      <Center>
        <HStack spacing="5">{digistContentTabs}</HStack>
      </Center>
    </Tabs>
  );
};
