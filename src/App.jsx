import About from "./components/About";
import EmailContact from "./components/EmailContact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
    <>
      <Navbar />
      {/* <Skills />ial */}
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <EmailContact />
      <SocialLinks />
    </>
  );
}

export default App;
