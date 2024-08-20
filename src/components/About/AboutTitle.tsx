import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const AboutTitle = () => {
  return (
    <Box>
      <Box
        fontSize={{ base: "5xl", sm: "6xl", md: "7xl", lg: "9xl" }}
        fontWeight={700}
        textAlign={"center"}
        lineHeight={{ base: "2.8rem", sm: "3.4rem", md: "4rem", lg: "7rem" }}
        fontFamily={"Source Code Pro"}
        position={"relative"}
        style={{ wordSpacing: ".5rem" }}
        // className="glow"
      >
        <Box
          display={"flex"}
          gap={{ base: ".5rem", md: "1rem", lg: "2rem" }}
          color={useColorModeValue("#2D4286", "#698AE8")}
        >
          <Text display={"inline"}>ML</Text>
          <Text display={"inline"}>ENGINEER</Text>
        </Box>

        <Box display={"flex"}>
          <Text
            display={"inline"}
            fontSize={{ base: "2xl", md: "5xl", lg: "7xl" }}
            color={useColorModeValue("gray.700", "whiteAlpha.800")}
          >
            &
          </Text>
          <Text color={useColorModeValue("#698AE8", "#2D4286")} >FULLSTACK</Text>
        </Box>

        <Text color={useColorModeValue("#2D4286", "#698AE8")}>DEVELOPER</Text>
      </Box>
    </Box>
  );
};

export default AboutTitle;
