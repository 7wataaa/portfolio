import { Grid, GridItem, HStack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import i from '../../texts/js.json';
import { WorkPageHeader } from '../organisms';

export const WorkPageTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content={i.META_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HStack>
        <WorkPageHeader />
        <Grid
          templateColumns={['1fr', '1fr 1fr']}
          h="100vh"
          w="100%"
          overflowY="scroll"
          overflowX="clip"
          gap={8}
        >
          <GridItem colSpan={1} paddingTop={10}>
            {React.Children.toArray(children)[0]}
          </GridItem>
          <GridItem colSpan={1} paddingTop={20} paddingRight={10}>
            {React.Children.toArray(children)[1]}
          </GridItem>
        </Grid>
      </HStack>
    </>
  );
};
