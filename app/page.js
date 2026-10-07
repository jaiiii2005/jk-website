import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import HomeWorkStrip from "./components/HomeWorkStrip";
import Clients from "./components/Clients";
import Awards from "./components/Awards";

// Lean landing; the global "LET'S Connect" finale + footer come from the layout.
export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeWorkStrip />
      <Clients />
      <Awards />
    </>
  );
}
