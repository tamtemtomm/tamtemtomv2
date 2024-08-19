import {
  Button,
  useColorMode,
  useColorModeValue,
  // Switch,
} from "@chakra-ui/react";

const NavbarColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      color={useColorModeValue("#353BA7", "whiteAlpha.800")}
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

  // return (
  //   <Switch
  //     onChange={toggleColorMode}
  //     size={"lg"}
  //     // colorScheme="#353BA7"
  //   ></Switch>
  // );
};

export default NavbarColorModeButton;
