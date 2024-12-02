import React from "react";
import Main from "../../components/home/Main";
import About from "../../components/home/About";
import Skills from "../../components/home/Skills";
import Archiving from "../../components/home/Archiving";
import Projects from "../../components/home/Projects";
import Career from "../../components/home/Career";
import Footer from "../../components/home/Footer";

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
      <Footer />
    </>
  );
};

export default Home;
