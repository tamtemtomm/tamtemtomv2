import { Image } from "@chakra-ui/react";

import Circle2 from "../../assets/rotation/Circle2Fix.png";
import Circle3 from "../../assets/rotation/Circle3Fix.png";

const HomeRotation = () => {
  return (
    <>
      <Image
        src={Circle3}
        opacity={0.3}
        position={"absolute"}
        objectFit={"cover"}
        boxSize={"1000px"}
        zIndex={-1}
        style={{ animation: "spin 3s linear infinite" }}
      />
      <Image
        src={Circle2}
        opacity={0.05}
        position={"absolute"}
        zIndex={-1}
        style={{ animation: "spin 6s linear infinite" }}
      />

      <Image
        src={Circle2}
        opacity={0.04}
        position={"absolute"}
        boxSize={"1500px"}
        objectFit="cover"
        zIndex={-1}
        style={{ animation: "spin 7s linear infinite" }}
      />
      <Image
        src={Circle2}
        opacity={0.03}
        position={"absolute"}
        boxSize={"1800px"}
        objectFit="cover"
        zIndex={-1}
        style={{ animation: "spin 8s linear infinite" }}
      />
      <Image
        src={Circle2}
        opacity={0.02}
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
