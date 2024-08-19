import { Container, VStack, } from "@chakra-ui/react";
import AboutHi from "../../../components/About/AboutHi";
import AboutTitle from "../../../components/About/AboutTitle";

const AboutIntro = () => {
 
        return (
          <Container
            maxW={"container.2xl"}
            minH={"95vh"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
          >
            <VStack className="fade-in">
              <AboutHi />
              <AboutTitle />
            </VStack>
          </Container>
        );
      };


export default AboutIntro