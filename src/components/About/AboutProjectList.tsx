import RobotHomeBrin from "../../assets/projects/robot-home/robot-home-brin.png";
import RobotHomePcb from "../../assets/projects/robot-home/robot-home-pcb.png";
import RobotHomeHardware from "../../assets/projects/robot-home/robot-home-hardware.png";
import RobotHomeProject from "../../assets/projects/robot-home/robot-home-project.png";

import { SiOpencv, SiArduino } from "react-icons/si";
import { AboutProjectCardInterface } from "./AboutProjectCard";

export const projectList: AboutProjectCardInterface[] = [
    {
      title: "Robot-Home",
      timeline: "8 Jan - 19 Feb 2024",
      importance: "PKL Project",
      place: "Mechatronic Research Infrastructure, BRIN Indonesia",
      placeLink:
        "https://elsa.brin.go.id/layanan/persatker/Pusat%20Riset%20Mekatronika%20Cerdas/3050",
      overview:
        "Project for controlling a 2 DOF robot system using data from the Orbecc Astra Pro depth camera aims to enable the robot to navigate and interact with its environment based on the depth informationobtained from the camera.",
      targets: [
        "- Make PCB for Gripper Circuit",
        "- Process camera data",
        "- Inverse Kinematic data from the camera",
      ],
      skills: [
        {
          Icon: SiOpencv,
          link: "https://opencv.org/",
          skillText: "OpenCV",
        },
        {
          Icon: SiArduino,
          link: "https://www.arduino.cc/",
          skillText: "Presentation",
        },
      ],
      repoLink: "https://github.com/tamtemtomm/Robot-Home",
      pptLink:
        "https://docs.google.com/presentation/d/11ebB_ILHWoUdMYKp7dV4jmlNyv1LwkPKspNkVIolC6U/edit#slide=id.g26fae54c919_0_33",
      imgs: [RobotHomeBrin, RobotHomePcb, RobotHomeHardware, RobotHomeProject],
    },
  ];