import RobotHomeBrin from "../../assets/projects/robot-home/robot-home-brin.png";
import RobotHomePcb from "../../assets/projects/robot-home/robot-home-pcb.png";
import RobotHomeHardware from "../../assets/projects/robot-home/robot-home-hardware.png";
import RobotHomeProject from "../../assets/projects/robot-home/robot-home-project.png";

import GlovitooMeeting from "../../assets/projects/glovitoo/glovitoo-meeting.png";
import GlovitooPrototipe from "../../assets/projects/glovitoo/glovitoo-prototipe.png";
import GlovitooContent from "../../assets/projects/glovitoo/glovitoo-content.png";
import GlovitooPresentation from "../../assets/projects/glovitoo/glovitoo-presentation.png";

import IgCloneHome from "../../assets/projects/instagram-clone/instagram-clone-home.png";
import IgCloneProfile from "../../assets/projects/instagram-clone/instagram-clone-profile.png";
import IgCloneSuggested from "../../assets/projects/instagram-clone/instagram-clone-suggested.png";
import IgCloneLogin from "../../assets/projects/instagram-clone/instagram-clone-login.png";

import { SiOpencv, SiArduino, SiPytorch, SiTypescript } from "react-icons/si";
import { FaReact, FaShare, FaGithub } from "react-icons/fa";
import { AiFillFilePpt } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
import { AboutProjectCardInterface } from "./AboutProjectCard";

const projectList: AboutProjectCardInterface[] = [
  {
    title: "Robot-Home",
    timeline: "8 Jan - 19 Feb 2024",
    importance: "PKL Project",
    place: "Mechatronic Research Infrastructure, BRIN Indonesia",
    placeLink:
      "https://elsa.brin.go.id/layanan/persatker/Pusat%20Riset%20Mekatronika%20Cerdas/3050",
    overview:
      "Project for controlling a 2 DOF robot system using data from the Orbecc Astra Pro depth camera aims to enable the robot to navigate and interact with its environment",
    targets: [
      "- Make PCB for Gripper Circuit",
      "- Process camera data",
      "- Inverse Kinematic data from the camera",
    ],
    skills: [
      {
        Icon: SiOpencv,
        link: "https://opencv.org/",
        text: "OpenCV",
      },
      {
        Icon: SiArduino,
        link: "https://www.arduino.cc/",
        text: "Arduino",
      },
    ],
    links: [
      {
        Icon: FaGithub,
        link: "https://github.com/tamtemtomm/Robot-Home",
        text: "Repository",
      },
      {
        Icon: AiFillFilePpt,
        link: "https://docs.google.com/presentation/d/11ebB_ILHWoUdMYKp7dV4jmlNyv1LwkPKspNkVIolC6U/edit#slide=id.g26fae54c919_0_33",
        text: "Presentation",
      },
    ],
    imgs: [RobotHomeBrin, RobotHomePcb, RobotHomeHardware, RobotHomeProject],
    imgsAlt: ["BRIN Indonesia", "PCB Circuit", "Hardware", "Workspace"],
    color: "#698AE8",
  },
  {
    title: "Glovitoo",
    timeline: "Sep - Dec 2023",
    importance: "PKM Project",
    place: "Airlangga University",
    placeLink: "https://unair.ac.id/",
    overview:
      "Smart Glove for Deaf and Mute designed to translate SIBI Sign Language. Originally developed as a computer vision project, but as time goes on we switch into cyber physical approach.",
    targets: [
      "- Make a Glove Gadget that can detect hand movement",
      "- Make a model that translate SIBI gesture with accuracy above 95%",
    ],
    skills: [
      {
        Icon: SiOpencv,
        link: "https://opencv.org/",
        text: "OpenCV",
      },
      {
        Icon: SiPytorch,
        link: "https://pytorch.org/",
        text: "Pytorch",
      },
      {
        Icon: SiArduino,
        link: "https://www.arduino.cc/",
        text: "Arduino",
      },
    ],
    links: [
      {
        Icon: FaGithub,
        link: "https://github.com/tamtemtomm/Wangsaff-SIBI",
        text: "Repository",
      },
      {
        Icon: AiFillFilePpt,
        link: "https://docs.google.com/presentation/d/1aGMed3jVOG_rVHBM6hpcwMlXxoQaa5xkKRCH91Av9DI/edit?usp=sharing",
        text: "Presentation",
      },
    ],
    imgs: [
      GlovitooMeeting,
      GlovitooPrototipe,
      GlovitooContent,
      GlovitooPresentation,
    ],

    imgsAlt: ["Meeting", "Demo", "Social", "Presentation"],
    side: "right",
  },
  {
    title: "Insta-Clone",
    timeline: "Aug 2024",
    importance: "Personal Project",
    place: "Home",
    placeLink: "",
    overview:
      "A simple minimal implementation of Instagram using react on vite and firebase for the backend",
    targets: [
      "- Make a intuitive UI for users",
      "- Build the backend to handle users requests",
      "- Add authentication system to secure user's privacy",
    ],
    skills: [
      {
        Icon: FaReact,
        link: "https://react.dev/",
        text: "UI React",
      },
      {
        Icon: SiTypescript,
        link: "https://www.typescriptlang.org/",
        text: "Typescript",
      },
      {
        Icon: IoLogoFirebase,
        link: "https://firebase.google.com/",
        text: "Firebase",
      },
    ],
    links: [
      {
        Icon: FaGithub,
        link: "https://github.com/tamtemtomm/instagram-clone",
        text: "Repository",
      },
      {
        Icon: FaShare,
        link: "https://social-app-insta-tamtemtom.vercel.app/",
        text: "Presentation",
      },
    ],
    imgs: [IgCloneHome, IgCloneProfile, IgCloneSuggested, IgCloneLogin],
    imgsAlt: ["Homepage", "Profile", "Suggested User", "Login Page"],
    color: "#698AE8",
  },
];

export default projectList;
