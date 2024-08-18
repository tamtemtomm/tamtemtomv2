import { Container, VStack, Text, Flex } from "@chakra-ui/react";

// import Construction from "../../components/Utils/Construction";

import AboutHi from "../../components/About/AboutHi";
import AboutTitle from "../../components/About/AboutTitle";
import AboutSkillCard from "../../components/About/AboutSkillCard";

import { FaBrain, FaNodeJs } from "react-icons/fa";
import { CgSmartphoneChip } from "react-icons/cg";

const About = () => {
  // return <Construction />;
  return (
    <>
      <AboutIntro />
      <AboutSkill />
      {/* <AboutProject /> */}
    </>
  );
};

export default About;

const AboutIntro = () => {
  return (
    <Container
      maxW={"container.2xl"}
      minH={"95vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
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
      minH={"85vh"}
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
        <Flex
          gap={{ base: "1.5rem", md: "2rem", lg: "4rem" }}
          w={"full"}
          px={{ base: "5%", sm: "15%", md: "10%", lg: "15%" }}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
        >
          <AboutSkillCard
            Icon={FaBrain}
            text="Machine Learning"
            description="Build a machine learning model for a spesific problem"
          />
          <AboutSkillCard
            Icon={FaNodeJs}
            text="Fullstack Developer"
            description="Build frontend and backend for enterprise web application"
          />
          <AboutSkillCard
            Icon={CgSmartphoneChip}
            text="Internet of Things"
            description="Build a gadget that able to be connected trough a network,"
          />
        </Flex>
      </VStack>
    </Container>
  );
};

// const AboutProject = () => {
//   return (
//     <Container
//       p={0}
//       maxW={"container.2xl"}
//       minH={"100vh"}
//       display={"flex"}
//       flexDirection={"column"}
//       justifyContent={"center"}
//       alignItems={"center"}
//       pt={1}
//       position={"relative"}
//     >
//       <VStack
//         fontSize={"5xl"}
//         justifyContent={"flex-start"}
//         w={"full"}
//         gap={{ base: "1rem", md: "2rem" }}
//       >
//         <Text
//           color={"#353BA7"}
//           fontSize={{ base: "xl", md: "5xl" }}
//           fontWeight={700}
//           fontFamily={"Source Code Pro"}
//         >
//           .project
//         </Text>
//         <Flex gap={{ base: "2rem", md: "4rem" }} w={"full"} px={"15%"}>
//           <Box w={"33%"} h={"18rem"} bg={"gray.700"} borderRadius={"md"}></Box>
//           <Box w={"33%"} h={"18rem"} bg={"gray.700"} borderRadius={"md"}></Box>
//           <Box w={"33%"} h={"18rem"} bg={"gray.700"} borderRadius={"md"}></Box>
//         </Flex>
//       </VStack>
//     </Container>
//   );
// };
