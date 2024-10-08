import { Link } from "react-router-dom";
import { Button, Text, useColorModeValue } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

interface HomeButtonInterface {
  link: string;
  text: string;
}

const HomeButton = ({ link, text }: HomeButtonInterface) => {
  return (
    <Link to={link} rel="noopener noreferrer" target="_blank">
      <Button
        p={"1rem"}
        fontWeight={700}
        fontFamily={"Source Code Pro"}
        display={"flex"}
        color={useColorModeValue("#353BA7", "whiteAlpha.800")}
        border={"none"}
        gap={2}
        alignItems={"center"}
        size={{ base: "xs", md: "sm" }}
        _hover={{
          bgGradient: "linear(to-br, #2D4286, #19d1c1)",
          bgClip: "text",
          fontWeight: "800",
          transitionDuration: "0.4s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <Text>{text}</Text>

        <FaDownload />
      </Button>
    </Link>
  );
};

export default HomeButton;
