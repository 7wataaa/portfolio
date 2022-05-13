import { VStack, Text, Box } from '@chakra-ui/react';
import { SkillHeading } from '../atoms';
import { SkillListWithDescriptionType } from './SkillListWithDescriptionTypes';

export const SkillListWithDescription = ({
  skillData,
  spacing = '6',
  ...props
}: SkillListWithDescriptionType) => {
  return (
    <VStack spacing={spacing} {...props}>
      {skillData.map((e, i) => {
        return (
          <VStack key={i} spacing="1" align="center">
            <SkillHeading>{e.skillName}</SkillHeading>
            <Text>{e.description}</Text>
          </VStack>
        );
      })}
    </VStack>
  );
};
