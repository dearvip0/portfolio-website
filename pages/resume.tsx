import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
const resume = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={variants} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer Jr.</h5>
            <p className="font-semibold">Hutech University (2015-2019)</p>
          </div>
        </motion.div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold text-red-600">
              <a href="https://github.com/">Vietbando compony</a>
            </p>
            <p className="my-3">
              {" "}
              - First job, designing and managing websites that support the
              elderly{" "}
              <a
                className="text-lg rounded-sm dark:text-blue-500"
                href="https://supportelders.com/"
              >
                SupportElder
              </a>{" "}
              website.
            </p>
            <p className="my-3">
              {" "}
              - I was a Front-end developer with the ReactJS library a year ago.
              Me and the project development team named
              <span>
                Field Force Management System (FFMS) from VietBando compony
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-9 md:grid-cols-2">
        <motion.div variants={variants} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </motion.div>
        <motion.div variants={variants} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default resume;
