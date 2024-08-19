import {
  Container,
  VStack,
  Text,
  Box,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import HomeTitle from "../../components/Home/HomeTitle";
import HomeProfilePhoto from "../../components/Home/HomeProfilePhoto";
import HomeDescription from "../../components/Home/HomeDescription";
import HomeButton from "../../components/Home/HomeButton";
import HomeSocial from "../../components/Home/HomeSocial";
// import HomeRotation from "../../components/Home/HomeRotation";

const Home = () => {
  return (
    <>
      <Container
        maxW={"container.2xl"}
        minH={"95vh"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={1}
        position={"relative"}
        overflowX={"hidden"}
        overflowY={"hidden"}
        // bg={theme.colors.background.light}
      >
        <VStack
          // className="fade-in"
          alignItems={"center"}
          justifyContent="center"
          gap={".5rem"}
          my={"2rem"}
        >
          <HomeTitle />
          <Flex
            w={"30%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
          >
            <HomeButton
              link="https://drive.google.com/file/d/1-u8v1lBgT943PwdGw__ciq9nbbb6gjWs/view?usp=sharing"
              text="Curriculum Vitae"
            />
            <HomeButton
              link="https://drive.google.com/file/d/1VICjX_bKVX8E2kE8f7L3WqaDl7u4WqBO/view?usp=sharing"
              text="Portfolio"
            />
          </Flex>

          <HomeProfilePhoto />
          <VStack>
            <HomeDescription />
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

              <HomeSocial
                link="https://github.com/tamtemtomm"
                Icon={FaGithub}
              />

              <HomeSocial
                link="https://instagram.com/tomtamtumtemtam"
                Icon={FaInstagram}
              />
            </Box>
            <Link
              as={RouterLink}
              to={"https://github.com/tamtemtomm/tamtemtomv2"}
              position="absolute"
              fontSize={{ base: "xs", md: "sm" }}
              bottom={0}
              color={useColorModeValue("gray.700", "white")}
              opacity={useColorModeValue(1, 0.7)}
              transition={"all .1s ease-in"}
              _hover={{ fontWeight: 700, textDecoration: "underline" }}
            >
              <Text>Copyright © 2024 Tamtemtom</Text>
            </Link>
          </VStack>
        </VStack>

        {/* <HomeRotation /> */}
      </Container>
    </>
  );
};

export default Home;
