import { Container, VStack, Text, useColorModeValue } from "@chakra-ui/react";

import AboutProjectCard from "../../../components/About/AboutProjectCard";
import projectList from "../../../components/About/AboutProjectList";

const AboutProject = () => {
  return (
    <Container
      p={0}
      maxW={"container.2xl"}
      minH={{ base: "200vh", md: "300vh" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
      pt={{ base: "10vh", sm: "none" }}
    >
      <VStack
        className="fade-in"
        fontSize={"5xl"}
        justifyContent={"flex-start"}
        w={"full"}
        gap={{ base: "1rem", md: "4rem" }}
      >
        <Text
          color={useColorModeValue("#353BA7", "whiteAlpha.800")}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={800}
          fontFamily={"Source Code Pro"}
        >
          <Text color={"gray.700"} display={"inline"}>
            .
          </Text>
          project
        </Text>
        <VStack w={"full"} px={"15%"} display={"flex"} gap={"6rem"}>
          {projectList.map((item, index) => (
            <AboutProjectCard key={index} {...item} />
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default AboutProject;
