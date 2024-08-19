import { Container, Flex, VStack, Text, useColorModeValue } from "@chakra-ui/react";

import { skills } from "../../../components/About/AboutSkillList";
import AboutSkillCard from "../../../components/About/AboutSkillCard";

const AboutSkill = () => {
  

  return (
    <Container
      p={0}
      maxW={"container.2xl"}
      minH={{ base: "70vh", md: "95vh" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={1}
      position={"relative"}
    >
      <VStack
        className="fade-in"
        fontSize={"5xl"}
        justifyContent={"flex-start"}
        w={"full"}
        gap={{ base: "1rem", md: "2rem" }}
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
          skill
        </Text>
        <Flex
          gap={{ base: "1.5rem", md: "2rem", lg: "4rem" }}
          w={"full"}
          px={{ base: "5%", sm: "15%", md: "10%", lg: "15%" }}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
        >
          {skills.map((item, index) => (
            <AboutSkillCard
              key={index}
              Icon={item.Icon}
              text={item.text}
              description={item.description}
            />
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default AboutSkill;
