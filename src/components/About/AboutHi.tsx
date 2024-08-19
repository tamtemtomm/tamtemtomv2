import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import FurinaImage from "../../assets/furina.jpg";

const AboutHi = () => {
  return (
    <Flex
      gap={{ base: ".3rem", sm: ".5rem", md: "1rem" }}
      alignItems={"center"}
      w={"100%"}
      px={"1rem"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} gap={{ base: ".4rem", sm: ".5rem", md: "2rem" }}>
        <Box
          w={{ base: "1.2rem", sm: "1rem", md: "3rem" }}
          h={{ base: "1.2rem", sm: "1rem", md: "3rem" }}
          overflow={"hidden"}
          borderRadius={"full"}
          // style={{ animation: "spin 3s linear infinite" }}
        >
          <img src={FurinaImage} style={{ objectFit: "contain" }}></img>
        </Box>
        <Text
          fontSize={{ base: ".4rem", md: "xl", lg: "2xl" }}
          fontWeight={700}
          fontFamily={"Open Sans"}
          color={useColorModeValue("#353BA7", "whiteAlpha.800")}
          p={{ base: "1", md: "1", lg: "2" }}
          border={{ base: ".5px solid", md: "2px solid" }}
          borderColor={"#698AE8"}
          borderRadius={"1rem"}
          display={"flex"}
          alignItems={"center"}
        >
          Hi, Timo here
        </Text>
      </Box>

      <Text
        fontSize={{ base: ".4rem", md: "xs", lg: "sm" }}
        display={"inline"}
        lineHeight={{ base: ".5rem", md: ".8rem", lg: "1rem" }}
        textAlign={"left"}
        color={useColorModeValue("gray.700", "whiteAlpha.700")}
        left={0}
        top={{ base: "-2rem", lg: "-3rem" }}
      >
        // Based in <br />
        // Bandung, Indonesia
      </Text>
    </Flex>
  );
};

export default AboutHi;
