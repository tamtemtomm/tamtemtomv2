import { Box, Text } from "@chakra-ui/react";

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
      >
        <Box display={"flex"} gap={{ base: ".5rem", md: "1rem", lg: "2rem" }}>
          <Text display={"inline"}>ML</Text>
          <Text display={"inline"}>ENGINEER</Text>
        </Box>

        <Box display={"flex"}>
          <Text
            display={"inline"}
            fontSize={{ base: "2xl", md: "5xl", lg: "7xl" }}
            color={"gray.700"}
          >
            &
          </Text>
          <Text color={"#698AE8"}>FULLSTACK</Text>
        </Box>

        <Text>DEVELOPER</Text>
      </Box>
    </Box>
  );
};

export default AboutTitle;
