import { Box, Center, HStack, Text } from '@chakra-ui/react';
import i from '../../texts/js.json';
import { BgImageBox, Heading, SkillBox } from '../atoms';
import { SkillList, SkillListWithDescription } from '../molecules';
import Fade from 'react-reveal/Fade';

export const SkillContent = () => {
  return (
    <BgImageBox paddingTop="20" paddingBottom="20">
      <Center>
        <Box padding="1rem 6rem 1rem 6rem" marginBottom="20" bgColor="#E2E2E2">
          <Heading>SKILL</Heading>
        </Box>
      </Center>

      <Fade bottom>
        <Center>
          <SkillBox boxName="Languages" marginBottom="12">
            <Center>
              <HStack marginY="8" spacing="10rem" align="start">
                <SkillList skillList={['★★', ...i.LANGUAGES.TWO_STAR]} />
                <SkillList skillList={['★', ...i.LANGUAGES.ONE_STAR]} />
              </HStack>
            </Center>
            <Center>
              <Text fontSize="sm" whiteSpace="pre-wrap">
                {i.LANGUAGES.STAR_DESCRIPTION}
              </Text>
            </Center>
          </SkillBox>
        </Center>
      </Fade>

      <Fade bottom>
        <Center>
          <SkillBox boxName="Web" marginBottom="12">
            <Center>
              <HStack
                marginTop="8"
                marginBottom="5"
                spacing="10rem"
                align="start"
              >
                <SkillList spacing="10" skillList={i.WEB.COLUMN1} />
                <SkillList spacing="10" skillList={i.WEB.COLUMN2} />
              </HStack>
            </Center>
          </SkillBox>
        </Center>
      </Fade>

      <Fade bottom>
        <Center>
          <SkillBox boxName="Others">
            <SkillListWithDescription
              marginTop="8"
              marginBottom="5"
              skillData={i.OTHERS.data}
            />
          </SkillBox>
        </Center>
      </Fade>
    </BgImageBox>
  );
};
