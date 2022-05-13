import type { NextPage } from 'next';
import { AboutMeContent, Header, SkillContent } from '../components/organisms';
import { MainPageTemplate } from '../components/templates';

const Home: NextPage = () => {
  return (
    <MainPageTemplate>
      <Header />
      <SkillContent />
      <AboutMeContent />
    </MainPageTemplate>
  );
};

export default Home;
