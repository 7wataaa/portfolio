type ContactProp = {
  itemName: string;
  url: string;
  urlLabel: string;
};

type ContactsType = {
  items: ContactProp[];
};

export type { ContactProp, ContactsType };
