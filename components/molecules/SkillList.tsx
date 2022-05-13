import { VStack } from '@chakra-ui/react';
import { SkillListType } from './SkillListTypes';
import { SkillHeading } from '../atoms';

export const SkillList = ({
  skillList,
  spacing = 9,
  ...props
}: SkillListType) => {
  return (
    <VStack spacing={spacing} {...props}>
      {skillList.map((str, i) => {
        return <SkillHeading key={i}>{str}</SkillHeading>;
      })}
    </VStack>
  );
};
