import About from "../components/About";
import Stats from "../components/Stats";
import Reach from "../components/Reach";
import Values from "../components/Values";
import Leadership from "../components/Leadership";

export const metadata = { title: "About — JK Advertising" };

export default function AboutPage() {
  return (
    <>
      <About />
      <Stats />
      <Reach />
      <Values />
      <Leadership />
    </>
  );
}
