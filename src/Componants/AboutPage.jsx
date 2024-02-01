import Navbar1 from "./Navbar1.jsx";

import PageFooter from "./PageFooter.jsx";
import BannerAbout from "./AboutPage/BannerAbout";
import "./css/about.css";
import Team from "./AboutPage/Team.jsx";

import Partner from "./AboutPage/Partner.jsx";
import Progress from "./AboutPage/Progress.jsx";
import Choice from "./AboutPage/Choice.jsx";
import Aim from "./AboutPage/Aim.jsx";
import Contact from "./AboutPage/Contact.jsx";
function AboutPage() {
  return (
    <>
      <Navbar1 />
      <BannerAbout />
      <Team />
      <Partner />
      <Progress />
      <Choice />
      <Aim />
      <Contact />
      <PageFooter />
    </>
  );
}
export default AboutPage;
