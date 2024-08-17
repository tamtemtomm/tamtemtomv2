import { Container, Flex } from "@chakra-ui/react";

import NavbarLink from "./NavbarLink";
import NavbarLogo from "./NavbarLogo";
import NavbarColorModeButton from "./NavbarColorModeButton";

const Navbar = () => {
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
        gap={{ base: ".1rem", md: "2rem" }}
      >
        <NavbarLogo />
        <Flex
          fontFamily={"Source Code Pro"}
          fontWeight={700}
          fontSize={{ base: 8, md: 16 }}
          gap={{ base: ".5rem", md: "3rem" }}
          // textShadow=".2px .2px #19D1C1"
          display={"flex"}
        >
          <NavbarLink link="/about" text=".about?" />
        </Flex>
        <NavbarColorModeButton />
      </Flex>
    </Container>
  );
};

export default Navbar;
