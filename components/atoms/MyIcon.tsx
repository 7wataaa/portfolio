import { Avatar } from '@chakra-ui/react';
import { MyIconType } from './MyIconTypes';

const photoName = '7wataaa';
const photoURL = 'https://avatars.githubusercontent.com/u/65275342?v=4';

export const MyIcon = ({
  size = '2xl',
  boxShadow = 'lg',
  ...props
}: MyIconType) => {
  return (
    <Avatar
      size={size}
      name={photoName}
      src={photoURL}
      boxShadow={boxShadow}
      {...props}
    />
  );
};
