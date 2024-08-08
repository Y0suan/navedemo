import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import  Galeria  from "./components/Galeria";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import  Scrollh  from "./components/Scrollh";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        
        <Header />
        <Hero />
        <Scrollh/>
        <Collaboration /> 
        {/* <Benefits /> */}
        <Services />
        <Galeria/>
        {/* <Pricing /> */}
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
