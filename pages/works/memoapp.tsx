import { useBreakpointValue } from '@chakra-ui/react';
import { Image } from '../../components/atoms';
import { WorkCarousel, WorkDescription } from '../../components/organisms';
import { WorkPageTemplate } from '../../components/templates';
import i from '../../texts/ja.json';

const MemoAppPage = () => {
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
                alt="memoapp image"
                src="/works/memoapp/memoapp.png"
              />
            ),
          },
        ]}
      />
      <WorkDescription data={i.WORKS.MEMOAPP} />
    </WorkPageTemplate>
  );
};

export default MemoAppPage;
