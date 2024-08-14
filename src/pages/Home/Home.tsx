import { Container, VStack, Text, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <VStack alignItems={"center"} gap={8} my={"2rem"}>
          <Text
            bgGradient="linear(to-b, #2D4286, #698AE8)"
            bgClip="text"
            fontWeight={700}
            fontSize={"3rem"}
            fontFamily={"Source Code Pro"}
            // textShadow='.1px .1px #19d1c1'
          >
            Tamtemtom 
            <Text as={"span"} fontSize={"1.5rem"} color={"gray.700"} display={{base: "none", md: "inline"}}>
            {" "}:{" "}
            </Text>
            <Text as={"span"} fontSize={"1.5rem"} color={"#19d1c1"} display={{base: "none", md: "inline"}}>any</Text>
          </Text>

          <Box
            w={{ base: "10rem", md: "15rem" }}
            h={{ base: "10rem", md: "15rem" }}
            borderRadius={"50%"}
            overflow={"hidden"}
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
              textShadow="1px 1px #19d1c1"
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
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://www.linkedin.com/in/timo-widyanvolta-35a276217/"}
              >
                <Image
                  src={"./icon/linkedin.webp"}
                  h={8}
                  _hover={{
                    h: 10,
                    transitionDuration: "0.4s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://github.com/tamtemtomm"}
              >
                <Image
                  src={"./icon/github.png"}
                  h={8}
                  _hover={{
                    h: 10,
                    transitionDuration: "0.4s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={"https://instagram.com/tomtamtumtemtam"}
              >
                <Image
                  src={"./icon/instagram.webp"}
                  h={7}
                  _hover={{
                    h: 9,
                    transitionDuration: "0.4s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                />
              </Link>
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
