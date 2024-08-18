import { VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface AboutSkillCardInterface {
  Icon: IconType;
  text: string;
  description: string;
}

const AboutSkillCard = ({
  Icon,
  text,
  description,
}: AboutSkillCardInterface) => {
  return (
    <VStack
      w={{ base: "75%", sm: "60%", md: "35%", lg: "33%" }}
      px={"5%"}
      py={{ base: "75%", sm: "3rem", md: "3rem", lg: "5rem" }}
      bg={useColorModeValue("gray.200", "black.800")}
      borderRadius={"md"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      border={useColorModeValue("none", "1px solid #353BA7")}
    >
      <Icon size={"3rem"} color="#353BA7" />
      <Text
        fontSize={{ base: "xs", md: "lg" }}
        color="#353BA7"
        fontWeight={700}
      >
        {text}
      </Text>
      <Text fontSize={"xs"} fontWeight={600}>
        {description}
      </Text>
    </VStack>
  );
};

export default AboutSkillCard;
