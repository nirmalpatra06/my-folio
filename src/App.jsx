import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
// import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Navbar />
      {/* <Skills />ial */}
      <Home />
      <About />
      <SocialLinks />
    </>
  );
}

export default App;
