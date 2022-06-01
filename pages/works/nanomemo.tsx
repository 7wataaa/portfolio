import { useBreakpointValue } from '@chakra-ui/react';
import { Image } from '../../components/atoms';
import { WorkMovie } from '../../components/molecules';
import { WorkCarousel, WorkDescription } from '../../components/organisms';
import { WorkPageTemplate } from '../../components/templates';
import i from '../../texts/js.json';

const NanomemoPage = () => {
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
                alt="nanomemo image"
                src="/works/nanomemo/nanomemo.png"
              />
            ),
          },
          {
            main: (
              <WorkMovie
                boxSize={imageSize}
                googleCloudMovieURL="https://drive.google.com/file/d/1Y5x02CuZWD5EW6322ilfLq39Oldn8DKB/preview"
              />
            ),
            digest: (
              <Image
                width={imageSize}
                height={imageSize}
                alt="nanomemo overview-thumbnail image"
                src="/works/nanomemo/overview-thumbnail.jpg"
              />
            ),
          },
          {
            main: (
              <WorkMovie
                boxSize={imageSize}
                googleCloudMovieURL="https://drive.google.com/file/d/168AhNGY1dx0vxvF1uLOyONpvdPkQ_NeU/preview"
              />
            ),
            digest: (
              <Image
                width={imageSize}
                height={imageSize}
                alt="nanomemo email-auth-thumbnail image"
                src="/works/nanomemo/email-auth-thumbnail.jpg"
              />
            ),
          },
        ]}
      />
      <WorkDescription data={i.WORKS.NANOMEMO} />
    </WorkPageTemplate>
  );
};

export default NanomemoPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
