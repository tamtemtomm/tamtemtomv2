import { Text, useColorModeValue } from "@chakra-ui/react";
const HomeDescription = () => {
  return (
    <Text
      w={"51%"}
      textAlign={"center"}
      fontWeight={600}
      fontFamily={"Open Sans"}
      fontSize={{ base: 11, sm: 12, md: 15, lg: 16 }}
      mt={2}
      color={useColorModeValue("gray.600", "whiteAlpha.800")}
      opacity={useColorModeValue(1, 0.7)}
      cursor={"pointer"}
      _hover={{
        transitionDuration: ".4s",
        transitionTimingFunction: "ease-in-out",
        textShadow: ".2px .2px #19d1c1",
      }}
      // fontFamily={"inter"}
    >
      Hi! I am Timo. A college student who loves coding, music, anime, and other
      wacky stuffs. Feel free to contact me if you wanna chat along!
    </Text>
  );
};

export default HomeDescription;
