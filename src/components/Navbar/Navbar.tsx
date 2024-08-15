import {
  Container,
  Flex,
  Image,
  Text,
  Link,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../assets/logo.png"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      p={0}
      my={4}
      maxW={"container.2xl"}
      display={"flex"}
      flexDirection={"row"}
      px={{ base: 4, md: 10 }}
      position={"fixed"}
      zIndex={1}
      overflow={"hidden"}
    >
      <Flex
        w={"full"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={{ base: ".1rem", md: "5rem" }}
      >
        <Link as={RouterLink} to={"/"} flex={1}>
          <Image
            src={Logo}
            h={{ base: ".5rem", md: "1.6rem" }}
            _hover={{
              h: "1.8rem",
              transitionDuration: ".4s",
              transitionTimingFunction: "ease-in-out",
            }}
          />
        </Link>

        {/* <Switch size={"lg"} cursor={"pointer"}/> */}
        <Button
          onClick={toggleColorMode}
          color={"#353BA7"}
          size={{ base: "xs", md: "sm" }}
          border={"none"}
        >
          .mode = {colorMode === "light" ? "light" : "dark"}
        </Button>

        <Flex
          fontFamily={"Source Code Pro"}
          fontWeight={700}
          fontSize={{ base: 8, md: 20 }}
          gap={{ base: ".5rem", md: "3rem" }}
          // textShadow=".2px .2px #19D1C1"
          display={"flex"}
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
