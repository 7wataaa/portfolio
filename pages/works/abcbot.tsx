import { useBreakpointValue } from '@chakra-ui/react';
import { Image } from '../../components/atoms';
import { WorkCarousel, WorkDescription } from '../../components/organisms';
import { WorkPageTemplate } from '../../components/templates';
import i from '../../texts/js.json';

const ABCbotPage = () => {
  const imageSize = useBreakpointValue({
    base: '300px',
    md: '500px',
  });

  return (
    <WorkPageTemplate>
      <WorkCarousel
        contents={[
          {
            main: (
              <Image
                width={imageSize}
                height={imageSize}
                alt="image"
                src="/works/abcbot/helpcommand.png"
              />
            ),
          },
          {
            main: (
              <Image
                width={imageSize}
                height={imageSize}
                alt="image"
                src="/works/abcbot/notification.png"
              />
            ),
          },
        ]}
      />
      <WorkDescription data={i.WORKS.ABCBOT} />
    </WorkPageTemplate>
  );
};

export default ABCbotPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
