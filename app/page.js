import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Reach from "./components/Reach";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Innovation from "./components/Innovation";
import Values from "./components/Values";
import Leadership from "./components/Leadership";
import Clients from "./components/Clients";
import TrustStrip from "./components/TrustStrip";
import Footer from "./components/Footer";

// Lean, client-oriented flow (still fully dynamic):
//  Hero → Stats → About → Services → Work → Innovation → Values → Leadership → Partners → Contact
export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <Reach />
        <Services />
        <Work />
        <Process />
        <Innovation />
        <Values />
        <Leadership />
        <Clients />
        <TrustStrip />
      </main>
      <Footer />
    </>
  );
}
