import { Container, VStack, Text, Box, Image, Flex } from "@chakra-ui/react";

import HomeButton from "../../components/Home/HomeButton";
import HomeSocial from "../../components/Home/HomeSocial";

const Home = () => {
  return (
    <>
      <Container
        maxW={"container.xl"}
        minH={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={1}
        position={"relative"}
        // bg={theme.colors.background.light}
      >
        <VStack
          alignItems={"center"}
          justifyContent="center"
          gap={4}
          my={"2rem"}
        >
          <Text
            bgGradient="linear(to-b, #2D4286, #698AE8)"
            bgClip="text"
            fontWeight={700}
            fontSize={"3rem"}
            fontFamily={"Source Code Pro"}
            cursor={"pointer"}
            // textShadow='.1px .1px #19d1c1'
          >
            Tamtemtom
            <Text
              as={"span"}
              fontSize={"1.5rem"}
              color={"gray.700"}
              display={{ base: "none", md: "inline" }}
            >
              {" "}
              :{" "}
            </Text>
            <Text
              as={"span"}
              fontSize={"1.5rem"}
              color={"#19d1c1"}
              display={{ base: "none", md: "inline" }}
            >
              any
            </Text>
          </Text>
          <Flex
            w={"30%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
          >
            <HomeButton
              link="https://drive.google.com/file/d/1-u8v1lBgT943PwdGw__ciq9nbbb6gjWs/view?usp=drive_link"
              text="Curriculum Vitae"
            />
            <HomeButton
              link="https://drive.google.com/file/d/14saSCBCPc9ErfJ8FCyC_UTZ6JnLk6cdC/view?usp=drive_link"
              text="Portfolio"
            />
          </Flex>

          <Box
            w={{ base: "10rem", md: "12rem" }}
            h={{ base: "10rem", md: "12rem" }}
            borderRadius={"50%"}
            overflow={"hidden"}
            my={3}
          >
            <Image src="./pic.jpg" cursor={"pointer"} />
          </Box>
          <VStack>
            <Text
              w={"50%"}
              textAlign={"center"}
              fontWeight={600}
              fontFamily={"Open Sans"}
              fontSize={{ base: 11, sm: 12, md: 15, lg: 16 }}
              mt={2}
              cursor={"pointer"}
              _hover={{
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                textShadow: ".2px .2px #19d1c1",
              }}
              // fontFamily={"inter"}
            >
              Hi! I am Timo. A college student who loves coding, music, anime,
              and another wacky stuff. Feel free to contact me if you wanna chat
              along.
            </Text>
            <Box
              display={"flex"}
              alignItems={"center"}
              w={"10rem"}
              mt={4}
              justifyContent={"space-between"}
            >
              <HomeSocial
                link="https://www.linkedin.com/in/timo-widyanvolta-35a276217/"
                icon="./icon/linkedin.webp"
              />

              <HomeSocial
                link="https://github.com/tamtemtomm"
                icon="./icon/github.png"
              />

              <HomeSocial
                link="https://instagram.com/tomtamtumtemtam"
                icon="./icon/instagram.webp"
              />
            </Box>
            <Text
              position="absolute"
              fontSize={{ base: "xs", md: "sm" }}
              bottom={5}
            >
              Copyright © 2024 Tamtemtom
            </Text>
          </VStack>
        </VStack>
      </Container>
    </>
  );
};

export default Home;
