import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "../animations";
export default function about({ endpoint }) {
  console.log(endpoint);
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h4 className="my-3">Welcome to visit my CV online!</h4>
      <h5 className="my-3">
        I am <span className="text-blue-600">Thuong</span>. I have 2+ years of
        experience in Web Development and I looking for new Job!
      </h5>
      <h4>
        <strong>Front-End</strong>: I am experienced in Javascript on ReactJS
        Framework, using Redux, Axios, Bootstrap...etc
      </h4>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide text-white dark:bg-dark-100">
          What I am doing
        </h4>
        <motion.div
          variants={stagger}
          animate="animate"
          initial="initial"
          className="grid gap-6 my-3 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return { props: { endpoint: process.env.VERCEL_URL } };
};
// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const BASE_URL = process.env.VERCEL_URL;
//   // const res = await fetch(`${BASE_URL}api/services`);
//   // const data = await res.json();
//   return { props: { BASE_URL: BASE_URL } };
// };
