import {
  Container,
  VStack,
  Text,
  Box,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaCopy } from "react-icons/fa";
import HomeSocial from "../../../components/Home/HomeSocial";

const AboutOutro = () => {
  const iconColor = useColorModeValue("#616161", "rgba(255, 255, 255, 0.80)");

  const copyEmail = () => {
    const email = "tamtemtom235@gmail.com";

    // Copy the text inside the text field
    navigator.clipboard.writeText(email);
  };

  return (
    <Container
      p={0}
      maxW={"container.2xl"}
      minH={{ base: "50vh", md: "50vh" }}
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
          color={useColorModeValue("#353BA7", "#698AE8")}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          fontWeight={800}
          fontFamily={"Source Code Pro"}
          px={"3%"}
          textAlign={"center"}
        >
          You know what? Lets
          <Text color={"gray.700"} display={"inline"}>
            {" "}
            .
          </Text>
          <Text
            display={"inline"}
            color={useColorModeValue("#698AE8", "whiteAlpha.800")}
          >
            build{" "}
          </Text>
          something together!
        </Text>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          gap={".5rem"}
        >
          {" "}
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"1rem"}
            bg={useColorModeValue("gray.100", "gray.900")}
            // p={{ base: ".5rem", md: "1rem" }}
            borderRadius={"xl"}
          >
            <MdOutlineEmail size={"1.4rem"} style={{ color: iconColor }} />
            <Text
              id="emailInput"
              fontFamily={"Source Code Pro"}
              fontSize={{ base: "xs", md: "lg" }}
              fontWeight={600}
              color={useColorModeValue("gray.700", "whiteAlpha.800")}
            >
              tamtemtom235@gmail.com
            </Text>

            <Button _focus={{ bg: "gray.400" }} transition={"1s ease"}>
              <FaCopy
                size={"1rem"}
                style={{ color: iconColor }}
                onClick={copyEmail}
              />
            </Button>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            w={"10rem"}
            mt={4}
            justifyContent={"space-between"}
          >
            <HomeSocial
              link="https://www.linkedin.com/in/timo-widyanvolta-35a276217/"
              Icon={FaLinkedin}
            />

            <HomeSocial link="https://github.com/tamtemtomm" Icon={FaGithub} />

            <HomeSocial
              link="https://instagram.com/tomtamtumtemtam"
              Icon={FaInstagram}
            />
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default AboutOutro;
