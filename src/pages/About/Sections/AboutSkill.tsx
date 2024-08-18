import { Container, Flex, VStack, Text,  } from "@chakra-ui/react";

import { FaBrain, FaNodeJs } from "react-icons/fa";
import { CgSmartphoneChip } from "react-icons/cg";

import AboutSkillCard from "../../../components/About/AboutSkillCard";

const AboutSkill = () => {
    const skills = [
      {
        Icon: FaBrain,
        text: "Machine Learning",
        description: "Build a machine learning model for a spesific problem",
      },
      {
        Icon: FaNodeJs,
        text: "Fullstack Developer",
        description: "Build frontend and backend for enterprise web application",
        color: "#19D1C1",
      },
      {
        Icon: CgSmartphoneChip,
        text: "Internet of Things",
        description: "Build a gadget that able to be connected trough a network,",
        color: "#698AE8",
      },
    ];
  
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
          fontSize={"5xl"}
          justifyContent={"flex-start"}
          w={"full"}
          gap={{ base: "1rem", md: "2rem" }}
        >
          <Text
            color={"#353BA7"}
            fontSize={{ base: "xl", sm: "3xl", md: "5xl" }}
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
                color={item.color}
              />
            ))}
          </Flex>
        </VStack>
      </Container>
    );
  };

export default AboutSkill