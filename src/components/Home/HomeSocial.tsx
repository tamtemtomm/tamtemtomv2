import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

interface HomeSocialInterface {
  link: string;
  icon: string;
}

const HomeSocial = ({ link, icon }: HomeSocialInterface) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" to={link}>
      <Image
        src={icon}
        h={8}
        _hover={{
          h: 10,
          transitionDuration: "0.4s",
          transitionTimingFunction: "ease-in-out",
        }}
      />
    </Link>
  );
};

export default HomeSocial;
