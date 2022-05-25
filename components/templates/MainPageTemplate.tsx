import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import i from '../../texts/js.json';

export const MainPageTemplate = ({
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

      <Box>{children}</Box>
    </>
  );
};
