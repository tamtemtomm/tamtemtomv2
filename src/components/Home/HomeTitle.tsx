import { Text } from "@chakra-ui/react";
const HomeTitle = () => {
  return (
    <Text
      bgGradient="linear(to-b, #2D4286, #698AE8)"
      bgClip="text"
      fontWeight={700}
      fontSize={"3rem"}
      fontFamily={"Source Code Pro"}
      cursor={"pointer"}
      // textShadow='.1px .1px #19d1c1'
    >
      Tamtemtom
      <Text
        as={"span"}
        fontSize={"1.5rem"}
        color={"gray.700"}
        display={{ base: "none", md: "inline" }}
      >
        {" "}
        :{" "}
      </Text>
      <Text
        as={"span"}
        fontSize={"1.5rem"}
        className="span-weeb"
        color={"#19d1c1"}
        display={{ base: "none", md: "inline" }}
        // _after={{content: "weeb"}}
      ></Text>
    </Text>
  );
};

export default HomeTitle;
