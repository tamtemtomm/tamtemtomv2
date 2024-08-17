import { Container, VStack, Text, Flex, Box } from "@chakra-ui/react";

// import Construction from "../../components/Utils/Construction";

import AboutHi from "../../components/About/AboutHi";
import AboutTitle from "../../components/About/AboutTitle";

const About = () => {
  // return <Construction />;
  return (
    <>
      <AboutIntro />
      <AboutSkill />
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

const AboutSkill = () => {
  return (
    <Container
      p={0}
      maxW={"container.2xl"}
      minH={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={1}
      position={"relative"}
    >
      <VStack
        fontSize={"5xl"}
        justifyContent={"flex-start"}
        w={"full"}
        gap={{ base: "1rem", md: "2rem" }}
      >
        <Text
          color={"#353BA7"}
          fontSize={{ base: "xl", md: "5xl" }}
          fontWeight={700}
          fontFamily={"Source Code Pro"}
        >
          .skill
        </Text>
        <Flex gap={{ base: "2rem", md: "4rem" }} w={"full"} px={"15%"}>
          <Box w={"33%"} h={"18rem"} bg={"gray.700"} borderRadius={"md"}></Box>
          <Box w={"33%"} h={"18rem"} bg={"gray.700"} borderRadius={"md"}></Box>
          <Box w={"33%"} h={"18rem"} bg={"gray.700"} borderRadius={"md"}></Box>
        </Flex>
      </VStack>
    </Container>
  );
};

const AboutProject = () => {
  return (
    <Container
      p={0}
      maxW={"container.2xl"}
      minH={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={1}
      position={"relative"}
    >
      <VStack
        fontSize={"5xl"}
        justifyContent={"flex-start"}
        w={"full"}
        gap={{ base: "1rem", md: "2rem" }}
      >
        <Text
          color={"#353BA7"}
          fontSize={{ base: "xl", md: "5xl" }}
          fontWeight={700}
          fontFamily={"Source Code Pro"}
        >
          .project
        </Text>
        <Flex gap={{ base: "2rem", md: "4rem" }} w={"full"} px={"15%"}>
          <Box w={"33%"} h={"18rem"} bg={"gray.700"} borderRadius={"md"}></Box>
          <Box w={"33%"} h={"18rem"} bg={"gray.700"} borderRadius={"md"}></Box>
          <Box w={"33%"} h={"18rem"} bg={"gray.700"} borderRadius={"md"}></Box>
        </Flex>
      </VStack>
    </Container>
  );
};
