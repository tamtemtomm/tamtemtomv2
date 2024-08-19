// import Construction from "../../components/Utils/Construction";

import AboutIntro from "./Sections/AboutIntro";
import AboutSkill from "./Sections/AboutSkill";
import AboutProject from "./Sections/AboutProject";
import AboutOutro from "./Sections/AboutOutro";

// Import styling
import { fadeInAnimation } from "../../config/useAnimation";
import { useEffect } from "react";

const About = () => {
  // return <Construction />;

  useEffect(() => {
    fadeInAnimation();
  }, []);
  return (
    <>
      <AboutIntro />
      <AboutSkill />
      <AboutProject />
      <AboutOutro />
    </>
  );
};

export default About;
