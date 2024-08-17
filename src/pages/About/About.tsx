import { Container, VStack } from "@chakra-ui/react";

// import Construction from "../../components/Utils/Construction";

import AboutHi from "../../components/About/AboutHi";
import AboutTitle from "../../components/About/AboutTitle";

const About = () => {
  // return <Construction />;
  return (
    <>
      <AboutIntro />
      <AboutProject />
    </>
  );
};

export default About;

const AboutIntro = () => {
  return (
    <Container
      maxW={"container.2xl"}
      minH={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={1}
      position={"relative"}
    >
      <VStack>
        <AboutHi />
        <AboutTitle />
      </VStack>
    </Container>
  );
};

const AboutProject = () => {
  return (
    <Container
      maxW={"container.2xl"}
      minH={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={1}
      position={"relative"}
    >
      <VStack color={"white"} fontSize={"5xl"}>HAHA</VStack>
    </Container>
  );
};
