import { Container, VStack, Text, Avatar, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container
        maxW={"container.xl"}
        minH={"100vh"}
        // bg={theme.colors.background.light}
      >
        <VStack alignItems={"center"} gap={4} my={"2rem"}>
          <Text
            bgGradient="linear(to-b, #2D4286, #698AE8)"
            bgClip="text"
            fontWeight={700}
            fontSize={"3rem"}
            fontFamily={"Source Code Pro"}
          >
            Tamtemtom
          </Text>
          <Avatar size={"2xl"} src="./pic.jpg" overflow={"hidden"}/>
          <Text
            w={"50%"}
            textAlign={"center"}
            fontWeight={600}
            mt={2}
            // fontFamily={"inter"}
          >
            Hi! I am Timo Widyanvolta. A college student who loves coding, music
            anime, and another wacky stuff. My specialty is ini data science,
            front-end, math, chess, and acoustic guitar. Feel free to contact me
            if you wanna chat along.
          </Text>
          <Box
            display={"flex"}
            gap={10}
            alignItems={"center"}
            mt={4}
            justifyContent={"center"}
          >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://www.linkedin.com/in/timo-widyanvolta-35a276217/"}
            >
              <Image src={"./icon/linkedin.webp"} h={8} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://github.com/tamtemtomm"}
            >
              <Image src={"./icon/github.png"} h={10} />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={"https://instagram.com/tomtamtumtemtam"}
            >
              <Image src={"./icon/instagram.webp"} h={7} />
            </Link>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Home;
