import About from "./components/About";
import Archiving from "./components/Archiving";
import Home from "./components/Home";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
