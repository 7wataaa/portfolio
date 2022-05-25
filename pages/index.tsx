import type { NextPage } from 'next';
import {
  AboutMeContent,
  Header,
  SkillContent,
  WorksContent,
} from '../components/organisms';
import { MainPageTemplate } from '../components/templates';

const Home: NextPage = () => {
  return (
    <MainPageTemplate>
      <Header />
      <WorksContent />
      <SkillContent />
      <AboutMeContent />
    </MainPageTemplate>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
