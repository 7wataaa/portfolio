import {
  Divider,
  HStack,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Heading } from '../atoms';
import { WorkDescriptionType } from './WorkDescriptionTypes';

export const WorkDescription = ({ data }: WorkDescriptionType) => {
  return (
    <VStack align="start" paddingX="6">
      <Heading fontSize={['3xl', '5xl']}>{data.title}</Heading>
      <Divider minWidth="80%" />
      <Text fontSize="2xl">{data.summary}</Text>
      <Text whiteSpace="pre-wrap">{data.description}</Text>
      <Wrap>
        {data.languages.map((str, i) => {
          return (
            <WrapItem key={i}>
              <Tag size="lg">{str}</Tag>
            </WrapItem>
          );
        })}
      </Wrap>
      <Wrap>
        {data.tags.map((str, i) => {
          return (
            <WrapItem key={i}>
              <Tag size="lg">{str}</Tag>
            </WrapItem>
          );
        })}
      </Wrap>
    </VStack>
  );
};
