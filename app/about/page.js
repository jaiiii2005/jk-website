import About from "../components/About";
import Reach from "../components/Reach";
import Values from "../components/Values";
import Leadership from "../components/Leadership";

export const metadata = { title: "About — JK Advertising" };

export default function AboutPage() {
  return (
    <>
      <About />
      <Reach />
      <Values />
      <Leadership />
    </>
  );
}
