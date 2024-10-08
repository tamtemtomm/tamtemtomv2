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
  const color = useColorModeValue("#353BA7", "#698AE8");

  return (
    <VStack
      w={{ base: "75%", sm: "60%", md: "35%", lg: "33%" }}
      px={{ base: "5%", sm: "4%", md: "3%", lg: "2%" }}
      h={{ base: "11rem", sm: "12rem", md: "15rem", lg: "18rem" }}
      bg={useColorModeValue("gray.100", "black.800")}
      borderRadius={"md"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      border={useColorModeValue("none", `1px solid ${color}`)}
    >
      <Icon size={"3rem"} color={color} />
      <Text
        fontSize={{ base: "sm", md: "lg" }}
        color={color}
        fontFamily={"Source Code Pro"}
        fontWeight={800}
      >
        {text}
      </Text>
      <Text
        fontSize={{ base: "xs", md: "sm" }}
        fontWeight={600}
        color={useColorModeValue("gray.700", "whiteAlpha.800")}
        fontFamily={"Open Sans"}
      >
        {description}
      </Text>
    </VStack>
  );
};

export default AboutSkillCard;
