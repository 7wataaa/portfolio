import { VStack } from '@chakra-ui/react';

type SkillListType = React.ComponentProps<typeof VStack> & {
  skillList: string[];
};

export type { SkillListType };
