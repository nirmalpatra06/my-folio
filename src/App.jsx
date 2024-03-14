import About from "./components/About";
import Experience from "./components/Experience";
import EmailContact from "./components/EmailContact";
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
      {/* <EmailContact /> */}
      <EmailContact />
      <SocialLinks />
    </>
  );
}

export default App;
