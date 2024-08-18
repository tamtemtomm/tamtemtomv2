import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const NavbarColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      color={"#353BA7"}
      size={{ base: "xs", md: "sm" }}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.200", "transparent")}
      fontFamily={"Source Code Pro"}
      fontWeight={700}
      _hover={{
        transitionDuration: ".4s",
        transitionTimingFunction: "ease-in-out",
        textShadow: ".5px .5px #19D1C1",
      }}
    >
      .mode = {colorMode === "light" ? '"light"' : '"dark"'}
    </Button>
  );
};

export default NavbarColorModeButton;
