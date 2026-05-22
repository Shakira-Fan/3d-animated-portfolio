import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default App;
