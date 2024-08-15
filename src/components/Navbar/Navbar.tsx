import { Container, Flex, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container
      p={0}
      my={5}
      maxW={"container.2xl"}
      display={"flex"}
      flexDirection={"row"}
      px={10}
      position={"fixed"}
      zIndex={1}
    >
      <Flex
        w={"full"}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        gap={"5rem"}
      >
        <Link as={RouterLink} to={"/"}>
          <Image
            src="./logo.png"
            h={"1.6rem"}
            _hover={{
              h: "1.8rem",
              transitionDuration: ".4s",
              transitionTimingFunction: "ease-in-out",
            }}
          />
        </Link>

        {/* <Switch size={"lg"} cursor={"pointer"}/> */}

        <Flex
          fontFamily={"Source Code Pro"}
          fontWeight={700}
          fontSize={20}
          gap={"3rem"}
          // textShadow=".2px .2px #19D1C1"
          display={{ sm: "none", md: "flex" }}
        >
          <RouterLink to={"/about"}>
            <Text
              _hover={{
                fontSize: 22,
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                textShadow:".5px .5px #19D1C1"
              }}
            >
              .about
            </Text>
          </RouterLink>
          <RouterLink to={"/project"}>
            <Text
              _hover={{
                fontSize: 22,
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                textShadow:".5px .5px #19D1C1"
              }}
            >
              .project
            </Text>
          </RouterLink>
          <RouterLink to={"/contact"}>
            <Text
              _hover={{
                fontSize: 22,
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                textShadow:".5px .5px #19D1C1"
              }}
            >
              .contact
            </Text>
          </RouterLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
