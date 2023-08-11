import React from 'react';
import NavBar from './NavBar';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import LanguageSection from '../sections/LanguageSection';
import ProjectSection from '../sections/ProjectSection';
import ContactSection from '../sections/ContactSection';
import Footer from './Footer';

const DisplayBody = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <LanguageSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default DisplayBody;
