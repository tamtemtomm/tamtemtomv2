import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
  useMediaQuery,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { IconType } from "react-icons";

export interface AboutProjectCardIconInterface {
  Icon: IconType;
  link: string;
  text: string;
}

export interface AboutProjectCardInterface {
  title: string;
  timeline: string;
  importance: string;
  place: string;
  placeLink: string;
  overview: string;
  targets: string[];
  skills: AboutProjectCardIconInterface[];
  links: AboutProjectCardIconInterface[];
  imgs: string[];
  imgsAlt: string[];
  side?: "left" | "right";
  color?: string;
}

const AboutProjectCard = ({
  side = "left",
  ...props
}: AboutProjectCardInterface) => {
  const [isLargerMd] = useMediaQuery("(min-width: 48em)");
  const color = useColorModeValue("#353BA7", "#698AE8");

  return (
    <Flex
      gap={{ base: "2rem", md: "2rem", lg: "3rem" }}
      w={"full"}
      h={{ md: "32rem", lg: "34rem" }}
      flexDir={{ base: "column", md: "row" }}
      color={useColorModeValue("gray.700", "whiteAlpha.800")}
      fontFamily={"Open Sans"}
    >
      {side == "left" && (
        <>
          <AboutProjectCardImage
            imgs={props.imgs}
            imgsAlt={props.imgsAlt}
            color={color}
          />
          <AboutProjectCardContent {...props} color={color} />
        </>
      )}

      {side == "right" && !isLargerMd && (
        <>
          <AboutProjectCardImage
            imgs={props.imgs}
            imgsAlt={props.imgsAlt}
            color={color}
          />
          <AboutProjectCardContent {...props} color={color} />
        </>
      )}

      {side == "right" && isLargerMd && (
        <>
          <AboutProjectCardContent {...props} color={color} />
          <AboutProjectCardImage
            imgs={props.imgs}
            imgsAlt={props.imgsAlt}
            color={color}
          />
        </>
      )}
    </Flex>
  );
};

const AboutProjectCardImage = ({
  imgs,
  color,
  imgsAlt,
}: {
  imgs: string[];
  imgsAlt: string[];
  color: string;
}) => {
  return (
    <>
      <Box
        w={{ md: "50%", lg: "60%" }}
        // bg={useColorModeValue("gray.200", "black.800")}
        // border={useColorModeValue("none", `1px solid #353BA7`)}
        borderRadius={"1rem"}
        display={"flex"}
        flexDir={"column"}
        overflow={"hidden"}
      >
        <Box h={"50%"} display={"flex"}>
          <Box w={"60%"} overflow={"hidden"} position={"relative"}>
            <Image
              src={imgs[0]}
              alt=""
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
            <Box
              position={"absolute"}
              top={0}
              left={0}
              bg="rgba(1, 3, 9, 0.7)"
              w={"100%"}
              h={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              zIndex={1}
              opacity={0}
              transition={"all .2s ease-in"}
              _hover={{ opacity: "1" }}
            >
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontFamily={"Source Code Pro"}
                color={color}
                fontWeight={700}
                textAlign={"center"}
              >
                {imgsAlt[0]}
              </Text>
            </Box>
          </Box>
          <Box w={"40%"} overflow={"hidden"} position={"relative"}>
            <Image
              src={imgs[1]}
              alt=""
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
            <Box
              position={"absolute"}
              top={0}
              left={0}
              bg="rgba(1, 3, 9, 0.7)"
              w={"100%"}
              h={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              zIndex={1}
              opacity={0}
              transition={"all .2s ease-in"}
              _hover={{ opacity: "1" }}
            >
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontFamily={"Source Code Pro"}
                color={color}
                fontWeight={700}
                textAlign={"center"}
              >
                {imgsAlt[1]}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box h={"50%"} display={"flex"}>
          <Box w={"40%"} overflow={"hidden"} position={"relative"}>
            <Image
              src={imgs[2]}
              alt=""
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
            <Box
              position={"absolute"}
              top={0}
              left={0}
              bg="rgba(1, 3, 9, 0.7)"
              w={"100%"}
              h={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              zIndex={1}
              opacity={0}
              transition={"all .2s ease-in"}
              _hover={{ opacity: "1" }}
            >
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontFamily={"Source Code Pro"}
                color={color}
                fontWeight={700}
                textAlign={"center"}
              >
                {imgsAlt[2]}
              </Text>
            </Box>
          </Box>
          <Box overflow={"hidden"} w={"60%"} position={"relative"}>
            <Image
              src={imgs[3]}
              alt=""
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
            <Box
              position={"absolute"}
              top={0}
              left={0}
              bg="rgba(1, 3, 9, 0.7)"
              w={"100%"}
              h={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              zIndex={1}
              opacity={0}
              transition={"all .2s ease-in"}
              _hover={{ opacity: "1" }}
            >
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontFamily={"Source Code Pro"}
                color={color}
                fontWeight={700}
                textAlign={"center"}
              >
                {imgsAlt[3]}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const AboutProjectCardContent = ({ ...props }: AboutProjectCardInterface) => {
  return (
    <Box
      w={{ md: "50%", lg: "40%" }}
      p={"1.4rem"}
      bg={useColorModeValue("gray.100", "black.800")}
      border={useColorModeValue("none", `1px solid ${props.color}`)}
      borderRadius={"1rem"}
      display={"flex"}
      flexDir={"column"}
      gap={{ base: "1rem", md: ".5rem", lg: "1rem" }}
    >
      <Box>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text
            fontSize={{ base: "1.3rem", md: "xl", lg: "2xl" }}
            fontWeight={700}
            flex={1}
            color={props.color}
            fontFamily={"Source Code Pro"}
            cursor={"default"}
            _hover={{ fontWeight: 800 }}
          >
            {props.title}
          </Text>
          <Flex gap={"1rem"}>
            {props.links.map((item, index) => (
              <Link
                as={RouterLink}
                key={index}
                to={item.link}
                _hover={{
                  animation: "spin 3s linear infinite",
                }}
              >
                <item.Icon size={"1.5rem"} />
              </Link>
            ))}
          </Flex>
        </Flex>
        <VStack alignItems={"left"} gap={".05rem"}>
          <Text fontSize={".9rem"} fontWeight={700} cursor={"default"}>
            {props.timeline}
          </Text>
          <Text fontSize={".9rem"} fontWeight={700} cursor={"default"}>
            {props.importance}
          </Text>
          <RouterLink to={props.placeLink}>
            <Text
              fontSize={".9rem"}
              fontWeight={700}
              _hover={{ color: props.color }}
            >
              {props.place}
            </Text>
          </RouterLink>
        </VStack>
      </Box>
      <VStack alignItems={"left"} gap={".05rem"}>
        <Text
          fontSize={"1.3rem"}
          fontWeight={700}
          color={props.color}
          fontFamily={"Source Code Pro"}
          cursor={"default"}
        >
          Overview :
        </Text>

        <Text
          fontSize={".9rem"}
          fontWeight={600}
          textAlign={"justify"}
          cursor={"default"}
        >
          {props.overview}
        </Text>
      </VStack>
      <VStack alignItems={"left"} gap={".05rem"}>
        <Text
          fontSize={"1.3rem"}
          fontWeight={700}
          color={props.color}
          fontFamily={"Source Code Pro"}
          cursor={"default"}
        >
          Target :
        </Text>
        {props.targets.map((item, index) => (
          <Text
            key={index}
            fontSize={".9rem"}
            fontWeight={600}
            textAlign={"left"}
            cursor={"default"}
          >
            {item}
          </Text>
        ))}
      </VStack>
      <VStack gap={".5rem"} alignItems={"center"}>
        <Text
          fontSize={"1.4rem"}
          fontWeight={700}
          color={props.color}
          fontFamily={"Source Code Pro"}
          cursor={"default"}
        >
          Skills
        </Text>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"1rem"}>
          {props.skills.map((item, index) => (
            <Link as={RouterLink} key={index} to={item.link}>
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={".4rem"}
              >
                <item.Icon size={"1.2rem"} />
                <Text fontSize={".7rem"} fontWeight={600}>
                  {item.text}
                </Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default AboutProjectCard;
