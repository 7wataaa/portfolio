import {
  Box,
  Divider,
  HStack,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { ContactLink, Heading } from '../atoms';
import { RepositoryCard } from './RepositoryCard';
import { WorkDescriptionType } from './WorkDescriptionTypes';

export const WorkDescription = ({ data }: WorkDescriptionType) => {
  return (
    <VStack align="start" paddingX="6">
      <Heading fontSize={['3xl', '5xl']}>{data.title}</Heading>
      <Divider minWidth="80%" />
      <Text fontSize="2xl">{data.summary}</Text>
      <Text whiteSpace="pre-wrap">{data.description}</Text>

      <Box paddingTop="2" paddingBottom="3">
        {data.applicationURL && (
          <ContactLink
            display="inline-block"
            marginBottom="3"
            target="_blank"
            href={data.applicationURL}
          >
            リンクはこちら（{data.applicationURL}）
          </ContactLink>
        )}

        {data.repository && (
          <Box>
            <RepositoryCard repository={data.repository} />
          </Box>
        )}
      </Box>

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
