import { useBreakpointValue } from '@chakra-ui/react';
import { Image } from '../../components/atoms';
import { WorkCarousel, WorkDescription } from '../../components/organisms';
import { WorkPageTemplate } from '../../components/templates';
import i from '../../texts/js.json';

const NNTPage = () => {
  const imageSize = useBreakpointValue({
    base: '500px',
    sm: '300px',
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
                alt="nnt image"
                src="/works/nnt/nnt.png"
              />
            ),
          },
          /* TODO: 動画ファイルを追加する */
        ]}
      />
      <WorkDescription data={i.WORKS.NNT} />
    </WorkPageTemplate>
  );
};

export default NNTPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
