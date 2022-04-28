import { Box, HStack, Text } from '@chakra-ui/react';
import { ContactLink } from '../atoms/ContactLink';
import { ContactsType } from './ContactsTypes';

export const Contacts = ({ items }: ContactsType) => {
  return (
    <>
      {items.map((e, i) => (
        <HStack key={i}>
          <Box width={'3.8rem'}>
            <Text>{e.itemName}</Text>
          </Box>
          <Text>-</Text>
          <ContactLink href={e.url}>{e.urlLabel}</ContactLink>
        </HStack>
      ))}
    </>
  );
};
