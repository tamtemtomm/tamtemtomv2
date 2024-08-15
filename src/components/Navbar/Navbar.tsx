import {
  Container,
  Flex,
  Image,
  Text,
  Link,
  Box,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      p={0}
      my={4}
      pt={{ base: 2, md: 0 }}
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
        flexDir={{ base: "column", md: "row" }}
        gap={{base: 3, md: "5rem"}}
      >
        <Link as={RouterLink} to={"/"} flex={{ base: "none", md: 1 }}>
          <Box
            border={{ base: "1px solid #353ba7", md: "none" }}
            p={{ base: 3, md: 0 }}
            borderRadius={"50%"}
          >
            <Image
              src="./logo.png"
              h={"1.6rem"}
              _hover={{
                h: "1.8rem",
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
              }}
            />
          </Box>
        </Link>

        {/* <Switch size={"lg"} cursor={"pointer"}/> */}
        <Button onClick={toggleColorMode} color={"#353BA7"} size={"sm"}>
          .mode = {colorMode === "light" ? "light" : "dark"}
        </Button>

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
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                textShadow: ".5px .5px #19D1C1",
              }}
            >
              .about
            </Text>
          </RouterLink>
          <RouterLink to={"/project"}>
            <Text
              _hover={{
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                textShadow: ".5px .5px #19D1C1",
              }}
            >
              .project
            </Text>
          </RouterLink>
          <RouterLink to={"/contact"}>
            <Text
              _hover={{
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                textShadow: ".5px .5px #19D1C1",
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
