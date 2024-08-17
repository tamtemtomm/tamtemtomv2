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
          style={{ color: useColorModeValue("#2d3748", "white")}}
          opacity={useColorModeValue(1, 0.7)}
          
        />
      }
    </Link>
  );
};

export default HomeSocial;
