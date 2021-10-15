import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
// eslint-disable-next-line @next/next/no-img-element
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsOn(!isOn);
  };

  return (
    <div>
      <Image
        className="bg-gray-200 border rounded-full shadow-sm border-white-500"
        src="https://res.cloudinary.com/dpn378uzt/image/upload/v1634051164/My-PC/IMG20210410163407_2_juqvo9.jpg"
        alt="avatar"
        height="150rem"
        width="150rem"
        layout="intrinsic"
        quality="100"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-blue-700 ">Vinh</span>
        <span className="text-purple-700 ">Bao</span>
        Thuong
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icon */}
      <div className="flex justify-around w-9/12 my-5 text-blue-500 md:w-full">
        <a href="https://www.facebook.com/Baothuong9608">
          <FaFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/dearvip0">
          <FaGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <FaLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500">
        <div className="flex items-center justify-center">
          <GoLocation />
          <span>Thu Duc city</span>
        </div>
        <p className="my-2">Baothuong9608@gmail.com</p>
        <p className="my-2">+84988134780</p>
      </div>

      <motion.button className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:from-pink-500 hover:via-purple-400 hover:to-yellow-500 focus:outline-none">
        Email Me
      </motion.button>
      <div className="flex items-center justify-between">
        <FaMoon />
        <div
          className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-pink-500 to-yellow-500 focus:outline-none switch"
          data-isOn={isOn}
          onClick={changeTheme}
        >
          <motion.div className="handle" layout transition={spring} />
        </div>
        <FaSun />
      </div>
    </div>
  );
};

export default Sidebar;
