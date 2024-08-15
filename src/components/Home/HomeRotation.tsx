import { Image } from "@chakra-ui/react";

const HomeRotation = () => {
  return (
    <>
      <Image
        src="./rotation/Circle3Fix.png"
        opacity={0.3}
        position={"absolute"}
        objectFit={"cover"}
        boxSize={"1000px"}
        zIndex={-1}
        style={{ animation: "spin 3s linear infinite" }}
      />
      <Image
        src="./rotation/Circle2Fix.png"
        opacity={0.1}
        position={"absolute"}
        zIndex={-1}
        style={{ animation: "spin 6s linear infinite" }}
      />

      <Image
        src="./rotation/Circle2Fix.png"
        opacity={0.1}
        position={"absolute"}
        boxSize={"1500px"}
        objectFit="cover"
        zIndex={-1}
        style={{ animation: "spin 7s linear infinite" }}
      />
      <Image
        src="./rotation/Circle2Fix.png"
        opacity={0.1}
        position={"absolute"}
        boxSize={"1800px"}
        objectFit="cover"
        zIndex={-1}
        style={{ animation: "spin 8s linear infinite" }}
      />
      <Image
        src="./rotation/Circle2Fix.png"
        opacity={0.1}
        position={"absolute"}
        boxSize={"2000px"}
        objectFit="cover"
        zIndex={-1}
        style={{ animation: "spin 9s linear infinite" }}
      />
    </>
  );
};

export default HomeRotation;
