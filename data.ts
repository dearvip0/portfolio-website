import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { FiDatabase } from "react-icons/fi";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Knowledge Front-End",
    about:
      "I have completed the freecodecamp.org <b>Basic Javascript</b> and <b>Basic React js</b> course",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about: "stunning user interface designer using <b>Framer</b> ",
  },
  {
    Icon: FiDatabase,
    title: "Database",
    about: "MongDB, mySQL, GraphQL, Firebase",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React Js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Next Js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: ".NET",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Sencha Ext Js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "50",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Visual Code",
    level: "70",
  },
];

export const projects: IProject[] = [
  {
    id: 0,
    name: "Crypto currencies",
    description: "This app shows a price and value CRYPTOVERSE",
    image_path: "/images/crytoverse.png",
    deployed_url: "https://cryptocurrencies-b.netlify.app/",
    github_url: "https://github.com/dearvip0/crypto-app",
    category: ["react"],
    key_techs: ["React", "Redux", "React Chartjs", "Antd"],
  },
  {
    id: 1,
    name: "Realtime Chat App",
    image_path: "/images/real-time-chat-app.png",
    deployed_url: "#",
    github_url: "https://github.com/dearvip0/react-chat-app-stream",
    category: ["react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Stream-chat", "Express"],
  },

  {
    id: 2,
    name: "My Portfolio",
    image_path: "/images/my-portfolio.png",
    deployed_url: "",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["react"],
    description: "Hey, You are seeing this project now...Enjoy",
    key_techs: ["Next"],
  },
  {
    id: 4,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },
  {
    id: 5,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "",
    github_url: "https://github.com/dearvip0/react-shopping-cart",
    category: ["react"],
    description: "ecommerce",
    key_techs: ["React", "Redux", "MongDB", "Express"],
  },
];
