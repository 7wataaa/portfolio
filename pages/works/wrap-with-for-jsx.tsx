import { useBreakpointValue } from '@chakra-ui/react';
import { Image } from '../../components/atoms';
import { WorkCarousel, WorkDescription } from '../../components/organisms';
import { WorkPageTemplate } from '../../components/templates';
import i from '../../texts/ja.json';

const WrapWithForJSXPage = () => {
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
                alt="wrap-with-for-jsx image"
                src="/works/wrap-with-for-jsx/wrap-with-for-jsx.png"
              />
            ),
          },
          {
            main: (
              <Image
                width={imageSize}
                height={imageSize}
                alt="wrap-with-for-jsx image 2"
                src="/works/wrap-with-for-jsx/wrap-with-for-jsx-dousa.gif"
              />
            ),
          },
        ]}
      />
      <WorkDescription data={i.WORKS.WRAP_WITH_FOR_JSX} />
    </WorkPageTemplate>
  );
};

export default WrapWithForJSXPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
