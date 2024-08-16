import { Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface NavbarLinkInterface {
  link: string;
  text: string;
}

const NavbarLink = ({ link, text }: NavbarLinkInterface) => {
  return (
    <RouterLink to={link}>
      <Text
        _hover={{
          transitionDuration: ".4s",
          transitionTimingFunction: "ease-in-out",
          textShadow: ".5px .5px #19D1C1",
        }}
      >
        {text}
      </Text>
    </RouterLink>
  );
};

export default NavbarLink;
