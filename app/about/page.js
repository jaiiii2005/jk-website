import AboutHero from "../components/AboutHero";
import AboutStory from "../components/AboutStory";
import Stats from "../components/Stats";
import ImageBand from "../components/ImageBand";
import Milestones from "../components/Milestones";
import Reach from "../components/Reach";
import Values from "../components/Values";
import Leadership from "../components/Leadership";

export const metadata = { title: "About — JK Advertising" };

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <Stats />
      <ImageBand src="/work-3.jpg" />
      <Milestones />
      <Reach />
      <Values />
      <Leadership />
    </>
  );
}
