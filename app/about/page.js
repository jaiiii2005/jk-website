import AboutHero from "../components/AboutHero";
import AboutStory from "../components/AboutStory";
import BrandCity from "../components/BrandCity";
import Reach from "../components/Reach";
import Values from "../components/Values";
import Leadership from "../components/Leadership";

export const metadata = { title: "About — JK Advertising" };

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <BrandCity src="/jk-kolkata.png" />
      <Reach />
      <Values />
      <Leadership />
    </>
  );
}
