import Main from "../../components/home/Main";
import About from "../../components/home/About";
import TechStack from "../../components/home/TechStack";
import Archiving from "../../components/home/Archiving";
import Projects from "../../components/home/Projects";
import Career from "../../components/home/Career";
import CertificatesAndAwards from "../../components/home/CertificatesAndAwards";
import Activities from "../../components/home/Activities";

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <TechStack />
      <Activities />
      <Projects />
      <CertificatesAndAwards />
      <Archiving />
      <Career />
    </>
  );
};

export default Home;
