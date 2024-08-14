import { Container, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <Container
      p={0}
      my={5}
      maxW={"container.2xl"}
      display={"flex"}
      flexDirection={"row"}
      px={10}
    >
      <Flex
        w={"full"}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
      >
        <Image src="./logo.png" h={"1.6rem"} />

        <Flex
          fontFamily={"Source Code Pro"}
          fontWeight={700}
          fontSize={20}
          gap={"3rem"}
          // color={theme.colors.primary.main}
          display={{ sm: "none", md: "flex" }}
        >
          <Link to={"/about"}>
            <Text>.about</Text>
          </Link>
          <Link to={"/project"}>
            <Text>.project</Text>
          </Link>
          <Link to={"/contact"}>
            <Text>.contact</Text>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
