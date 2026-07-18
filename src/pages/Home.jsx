import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Proposals from '../components/Proposals';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Proposals />
      <Contact />
    </>
  );
};

export default Home;
