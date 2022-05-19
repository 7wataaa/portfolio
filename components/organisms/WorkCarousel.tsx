import {
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
    return <TabPanel key={i}>{e.main}</TabPanel>;
  });

  const digistContentTabs = contents.map((e, i) => {
    return (
      <Tab
        key={i}
        width="100px"
        height="100px"
        overflow="clip"
        _selected={{ boxShadow: '0 0 0 3px #4299e199' }}
      >
        {e.digest ?? e.main}
      </Tab>
    );
  });

  return (
    <Tabs variant="line" align="center">
      <TabPanels marginBottom="5">{mainContentTabPanels}</TabPanels>

      <Center>
        <HStack spacing="5">{digistContentTabs}</HStack>
      </Center>
    </Tabs>
  );
};
