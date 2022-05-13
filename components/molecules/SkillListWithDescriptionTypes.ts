import { VStack } from '@chakra-ui/react';

type SkillData = { skillName: string; description: string };

type SkillListWithDescriptionType = React.ComponentProps<typeof VStack> & {
  skillData: SkillData[];
};

export type { SkillListWithDescriptionType };
