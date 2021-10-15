import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IProject } from "../type";
import { MdClose } from "react-icons/md";

import Image from "next/image";
import { fadeInUp, stagger } from "../animations";
import { motion } from "framer-motion";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  setShowDetail,
  showDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        layout="responsive"
        height="150"
        width="300"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:bg-blue-200 dark:bg-opacity-100 dark:text-white md:grid-cols-2 gap-x-12 ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              className="border-4 border-gray-100 "
              variants={fadeInUp}
            >
              <Image
                src={image_path}
                alt={name}
                className="overflow-hidden"
                layout="responsive"
                width={300}
                height={150}
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-gray-500 "
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-gray-500"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium text-black md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="my-3 text-base text-opacity-100 dark:text-black"
            >
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="p-1 px-2 my-1 text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-500 hover:from-pink-500 hover:via-purple-400 hover:to-yellow-500 dark:bg-red-500 dark:hover:bg-red-700 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-blue-500"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
