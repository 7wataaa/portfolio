import { Flex, HStack, Spacer } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import i from '../../texts/js.json';
import { WorkPageHeader } from '../organisms';

export const WorkPageTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const SpacerChildren = [
    <Spacer key="0" />,
    ...React.Children.toArray(children).map((e, i) => [
      e,
      <Spacer key={i + 1} />,
    ]),
  ].flat();

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content={i.META_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HStack>
        <WorkPageHeader />
        
        <Flex align="start" justify="center" direction={['column', 'row']}>
          {SpacerChildren}
        </Flex>
      </HStack>
    </>
  );
};
