import { useBreakpointValue } from '@chakra-ui/react';
import { Image } from '../../components/atoms';
import { WorkMovie } from '../../components/molecules';
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
          {
            main: (
              <WorkMovie
                boxSize={imageSize}
                googleCloudMovieURL="https://drive.google.com/file/d/1cE9vnQkwzh5XBgOQOD2xUFh49jS1CJEN/preview"
              />
            ),
            digest: (
              <Image
                width={imageSize}
                height={imageSize}
                alt="nnt overview-thumbnail image"
                src="/works/nnt/overview-thumbnail.jpg"
              />
            ),
          },
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
