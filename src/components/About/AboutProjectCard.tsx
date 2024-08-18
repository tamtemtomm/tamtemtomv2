import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { AiFillFilePpt } from "react-icons/ai";
import { IconType } from "react-icons";

export interface AboutProjectCardSkillInterface {
  Icon: IconType;
  link: string;
  skillText: string;
}

export interface AboutProjectCardInterface {
  title: string;
  timeline: string;
  importance: string;
  place: string;
  placeLink: string;
  overview: string;
  targets: string[];
  skills: AboutProjectCardSkillInterface[];
  repoLink: string;
  pptLink: string;
  imgs: string[];
  side?: "left" | "right";
  color?: string;
}

const AboutProjectCard = ({
  side = "left",
  color = "#353BA7",
  ...props
}: AboutProjectCardInterface) => {
  return (
    <Flex
      gap={{ base: "2rem", md: "2rem", lg: "3rem" }}
      w={"full"}
      h={{ md: "26rem", lg: "28rem" }}
      flexDir={{ base: "column", md: "row" }}
      color={useColorModeValue("gray.700", "whiteAlpha.800")}
    >
      {side == "left" && (
        <>
          <AboutProjectCardImage imgs={props.imgs} />
          <AboutProjectCardContent {...props} color={color} />
        </>
      )}
      {side == "right" && (
        <>
          <AboutProjectCardContent {...props} />
          <AboutProjectCardImage imgs={props.imgs} />
        </>
      )}
    </Flex>
  );
};

const AboutProjectCardImage = ({ imgs }: { imgs: string[] }) => {
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
          <Box w={"60%"} overflow={"hidden"}>
            <Image
              src={imgs[0]}
              alt=""
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
          </Box>
          <Box w={"40%"} overflow={"hidden"}>
            <Image
              src={imgs[1]}
              alt=""
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
          </Box>
        </Box>
        <Box h={"50%"} display={"flex"}>
          <Box w={"40%"} overflow={"hidden"}>
            <Image
              src={imgs[2]}
              alt=""
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
          </Box>
          <Box overflow={"hidden"} w={"60%"}>
            <Image
              src={imgs[3]}
              alt=""
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
            />
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
      bg={useColorModeValue("gray.200", "black.800")}
      border={useColorModeValue("none", `1px solid ${props.color}`)}
      borderRadius={"1rem"}
      display={"flex"}
      flexDir={"column"}
      gap={{ base: "1rem", md: ".5rem", lg: "1rem" }}
    >
      <Box>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={700}
            flex={1}
            color={props.color}
          >
            {props.title}
          </Text>
          <Flex gap={"1rem"}>
            <Link to={props.repoLink}>
              <FaGithub size={"1.5rem"} />
            </Link>
            <Link to={props.pptLink}>
              <AiFillFilePpt size={"1.5rem"} />
            </Link>
          </Flex>
        </Flex>
        <VStack alignItems={"left"} gap={".05rem"}>
          <Text fontSize={".7rem"} fontWeight={700}>
            {props.timeline}
          </Text>
          <Text fontSize={".7rem"} fontWeight={700}>
            {props.importance}
          </Text>
          <Link to={props.placeLink}>
            <Text fontSize={".7rem"} fontWeight={500}>
              {props.place}
            </Text>
          </Link>
        </VStack>
      </Box>
      <VStack alignItems={"left"} gap={".05rem"}>
        <Text fontSize={"1rem"} fontWeight={700} color={props.color}>
          Overview :
        </Text>
        <Text fontSize={".7rem"} fontWeight={500} textAlign={"justify"}>
          {props.overview}
        </Text>
      </VStack>
      <VStack alignItems={"left"} gap={".05rem"}>
        <Text fontSize={"1rem"} fontWeight={700} color={props.color}>
          Target :
        </Text>
        {props.targets.map((item, index) => (
          <Text
            key={index}
            fontSize={".7rem"}
            fontWeight={500}
            textAlign={"justify"}
          >
            {item}
          </Text>
        ))}
      </VStack>
      <VStack gap={".5rem"} alignItems={"center"}>
        <Text fontSize={"1rem"} fontWeight={700} color={props.color}>
          Skills
        </Text>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"1rem"}>
          {props.skills.map((item, index) => (
            <Link key={index} to={item.link}>
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                gap={".4rem"}
              >
                <item.Icon size={"1.2rem"} />
                <Text fontSize={".7rem"}>{item.skillText}</Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default AboutProjectCard;
