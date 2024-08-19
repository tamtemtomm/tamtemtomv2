import {
  Container,
  Flex,
  Button,
  Text,
  Link,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import NavbarLink from "./NavbarLink";
import NavbarColorModeButton from "./NavbarColorModeButton";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Container
      fontFamily={"Source Code Pro"}
      p={0}
      my={4}
      maxW={"container.2xl"}
      display={"flex"}
      flexDirection={"row"}
      px={{ base: 4, md: 8 }}
      position={"fixed"}
      zIndex={1}
      overflow={"hidden"}
    >
      <Flex
        w={"full"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={{ base: ".5rem", md: "2rem" }}
      >
        <Box flex={1} display={"flex"} gap={"1rem"}>
          {" "}
          <Link as={RouterLink} to={"/"}>
            <Button
              size={{ base: "xs", md: "sm" }}
              color={"#353BA7"}
              border={"1px solid"}
              borderColor={useColorModeValue("gray.200", "transparent")}
              fontWeight={700}
              _hover={{
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                textShadow: ".5px .5px #19D1C1",
              }}
            >
              <Text>{"./"}</Text>
            </Button>
          </Link>
          {pathname != "/" && (
            <Button
              size={{ base: "xs", md: "sm" }}
              color={"whiteAlpha.800"}
              background="#353BA7"
              _hover={{
                transitionDuration: ".4s",
                transitionTimingFunction: "ease-in-out",
                textShadow: ".5px .5px #19D1C1",
              }}
            >
              <Text>{pathname}</Text>
            </Button>
          )}
        </Box>

        {pathname == "/" && (
          <Flex
            fontWeight={700}
            fontSize={{ base: 8, md: 16 }}
            gap={{ base: ".5rem", md: "1rem" }}
            display={"flex"}
            _hover={{
              transitionDuration: ".4s",
              transitionTimingFunction: "ease-in-out",
              textShadow: ".5px .5px #19D1C1",
            }}
          >
            <NavbarLink link="/about" text=".about?" />
            <NavbarLink link="/fun" text=".fun?" />
          </Flex>
        )}

        <NavbarColorModeButton />
      </Flex>
    </Container>
  );
};

export default Navbar;
