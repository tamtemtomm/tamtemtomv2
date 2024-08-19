import { Text, useColorModeValue } from "@chakra-ui/react";
const HomeTitle = () => {
  return (
    <>
      <Text
        bg={useColorModeValue("#2D4286", "#698AE8")}
        bgClip="text"
        fontWeight={800}
        fontSize={"3rem"}
        fontFamily={"Source Code Pro"}
        cursor={"pointer"}
        // className="glow"
        // textShadow='0 0 #ff0000'
      >
        <Text
          color={useColorModeValue("gray.700", "whiteAlpha.700")}
          fontFamily={"Open Sans"}
          fontWeight={800}
          fontSize={{ base: ".7rem", md: "1rem" }}
          textAlign={"center"}
          mb={"-.7rem"}
        >
          Timo Widyanvolta
        </Text>
        Tamtemtom
        <Text
          as={"span"}
          fontSize={"1.5rem"}
          color={useColorModeValue("gray.700", "whiteAlpha.700")}
          display={{ base: "none", md: "inline" }}
        >
          {" "}
          :{" "}
        </Text>
        <Text
          as={"span"}
          fontSize={"1.5rem"}
          className="span-weeb"
          color={useColorModeValue("#698AE8", "#2D4286")}
          display={{ base: "none", md: "inline" }}
          // _after={{content: "weeb"}}
        ></Text>
      </Text>
    </>
  );
};

export default HomeTitle;
