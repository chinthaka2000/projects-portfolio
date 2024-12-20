import { FC } from 'react';
import About from '../components/Sections/About';
import Header from '../components/Sections/Header';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import Contact from '../components/Sections/Contact';
import Page from '../components/Layout/Page';
import { homePageMeta } from '../data/data';

const Home: FC = () => {
  const { title, description } = homePageMeta;

  return (
    <Page title={title} description={description}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
};

export default Home;
