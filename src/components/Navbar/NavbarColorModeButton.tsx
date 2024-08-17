import { Button, useColorMode } from "@chakra-ui/react";

const NavbarColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      color={"#353BA7"}
      size={{ base: "xs", md: "sm" }}
      border={"none"}
    >
      .mode = {colorMode === "light" ? "light" : "dark"}
    </Button>
  );
};

export default NavbarColorModeButton;
