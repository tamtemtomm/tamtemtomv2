import { Container, useTheme } from "@chakra-ui/react";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Container
        maxW={"container.2xl"}
        minH={"100vh"}
        bg={theme.colors.background.light}
      ></Container>
    </>
  );
};

export default Home;
