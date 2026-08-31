import Intro from "./components/Intro";
import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import HomeSolutions from "./components/HomeSolutions";
import HomeWorkStrip from "./components/HomeWorkStrip";
import Clients from "./components/Clients";
import Awards from "./components/Awards";

// Lean landing; the global "LET'S Connect" finale + footer come from the layout.
export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <HomeAbout />
      <HomeSolutions />
      <HomeWorkStrip />
      <Clients />
      <Awards />
    </>
  );
}
