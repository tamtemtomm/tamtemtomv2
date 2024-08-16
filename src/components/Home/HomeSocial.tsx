import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { useColorModeValue, useMediaQuery } from "@chakra-ui/react";

interface HomeSocialInterface {
  link: string;
  Icon: IconType;
}

const HomeSocial = ({ link, Icon }: HomeSocialInterface) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Link target="_blank" rel="noopener noreferrer" to={link}>
      {
        <Icon
          size={isLargerThan800 ? "2rem" : "1.5rem"}
          style={{ color: useColorModeValue("#010309", "#f8f9fe") }}
        />
      }
    </Link>
  );
};

export default HomeSocial;
