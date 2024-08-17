import { Box } from "@chakra-ui/react";
import ProfileImage from "../../assets/pic.jpg";

const HomeProfilePhoto = () => {
  return (
    <Box
      _hover={{
        animation: "spin 3s linear infinite",
      }}
      w={{ base: "10rem", md: "12rem" }}
      h={{ base: "10rem", md: "12rem" }}
      borderRadius={"50%"}
      overflow={"hidden"}
      my={"2rem"}
    >
      <img src={ProfileImage} />
    </Box>
  );
};

export default HomeProfilePhoto;
