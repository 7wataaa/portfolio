import { useBreakpointValue } from '@chakra-ui/react';
import { Image } from '../../components/atoms';
import { WorkMovie } from '../../components/molecules';
import { WorkCarousel, WorkDescription } from '../../components/organisms';
import { WorkPageTemplate } from '../../components/templates';
import i from '../../texts/js.json';

const ParaFeedReaderPage = () => {
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
                alt="para-feed-reader image"
                src="/works/para-feed-reader/para-feed-reader.png"
              />
            ),
          },
          {
            main: (
              <WorkMovie
                boxSize={imageSize}
                googleCloudMovieURL="https://drive.google.com/file/d/1YZhxl_ZyCw9aIrRwxShe-u57GqtuwlOg/preview"
              />
            ),
            thumbnail: (
              <Image
                width={imageSize}
                height={imageSize}
                alt="para-feed-reader preview-thumbnail image"
                src="/works/para-feed-reader/preview-thumbnail.jpg"
              />
            ),
          },
        ]}
      />
      <WorkDescription data={i.WORKS.PARA_FEED_READER} />
    </WorkPageTemplate>
  );
};

export default ParaFeedReaderPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
