import { Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../assets/logo.png";

const NavbarLogo = () => {
  return (
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
  );
};

export default NavbarLogo;
