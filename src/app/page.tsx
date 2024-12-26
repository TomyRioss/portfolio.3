import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div id="header-content">
        <header>
          <NavBar />
        </header>
      </div>
      <div id="body-content">
        <div className="flex justify-center">
          <AboutMe />
        </div>
        <div className="flex justify-center">
          <Technologies id="tecnologies" />
        </div>
        <div className=" justify-center">
          <Projects />
        </div>
        <div className="justify-center mt-24">
          <Footer />
        </div>
      </div>
    </>
  );
}
