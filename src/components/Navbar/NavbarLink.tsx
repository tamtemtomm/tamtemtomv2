import { Text, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface NavbarLinkInterface {
  link: string;
  text: string;
}

const NavbarLink = ({ link, text }: NavbarLinkInterface) => {
  return (
    <RouterLink to={link}>
      <Button
        size={{ base: "xs", md: "sm" }}
        color={useColorModeValue("#353BA7", "whiteAlpha.800")}
        _hover={{
          transitionDuration: ".4s",
          transitionTimingFunction: "ease-in-out",
          textShadow: ".5px .5px #19D1C1",
        }}
      >
        <Text fontWeight={700}>{text}</Text>
      </Button>
    </RouterLink>
  );
};

export default NavbarLink;
