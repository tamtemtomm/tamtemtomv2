import { Container, Image, useColorModeValue } from "@chakra-ui/react";
import catMeme from "../../assets/cat.png";

const Construction = () => {
  return (
    <Container
      maxW={"container.2xl"}
      minH={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      color={useColorModeValue("#353BA7", "whiteAlpha.800")}
      fontWeight={700}
      fontSize={"xl"}
      gap={"2rem"}
      textAlign={"center"}
    >
      <Image src={catMeme} w={"10rem"} borderRadius={"xl"} />
      Sorry this page is under construction 🙏
    </Container>
  );
};

export default Construction;
