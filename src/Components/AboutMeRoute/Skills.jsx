'use client'
import html from "../../../public/icons/icons8-html-144.png";
import css from "../../../public/icons/icons8-css-144.png";
import tailwind from "../../../public/icons/icons8-tailwind-css-144.png";
import js from "../../../public/icons/icons8-js-144.png";
import react from "../../../public/icons/react.png";
import node from "../../../public/icons/icons8-nodejs-144.png";
import express from "../../../public/icons/icons8-express-js-144.png";
import mongodb from "../../../public/icons/icons8-mongodb.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <div className=" gradient-bg text-white p-5 rounded-3xl my-5 w-5/6">
      <h5 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
        SKILLS
      </h5>
      <div className="space-y-6 mt-[10%]">
        <div className="flex items-center justify-center">
          <div>
            {/* icon */}
            <Image alt="image" className="w-14 h-14 mr-10" src={html} />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <motion.div
              initial={{ width: "10%" }}
              animate={{ width: "99%" }}
              transition={{ duration: 2, delay: 0.1 }}
              className="bg-gray-600 h-2.5 rounded-full dark:bg-green-500"
              style={{ width: "99%" }}
            ></motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            {/* icon */}
            <Image alt="image" className="w-14 h-14 mr-10" src={css} />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <motion.div
              initial={{ width: "10%" }}
              animate={{ width: "95%" }}
              transition={{ duration: 2.2, delay: 0.1 }}
              className="bg-gray-600 h-2.5 rounded-full dark:bg-green-500"
              style={{ width: "95%" }}
            ></motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            {/* icon */}
            <Image alt="image" className="w-14 h-14 mr-10" src={tailwind} />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <motion.div
              initial={{ width: "10%" }}
              animate={{ width: "98%" }}
              transition={{ duration: 2.4, delay: 0.1 }}
              className="bg-gray-600 h-2.5 rounded-full dark:bg-green-600"
              style={{ width: "98%" }}
            ></motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            {/* icon */}
            <Image alt="image" className="w-14 h-14 mr-10" src={js} />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <motion.div
              initial={{ width: "10%" }}
              animate={{ width: "70%" }}
              transition={{ duration: 2.6, delay: 0.1 }}
              className="bg-gray-600 h-2.5 rounded-full dark:bg-green-300"
              style={{ width: "70%" }}
            ></motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            {/* icon */}
            <Image alt="image" className="w-14 h-14 mr-10" src={react} />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <motion.div
              initial={{ width: "10%" }}
              animate={{ width: "80%" }}
              transition={{ duration: 2.8, delay: 0.1 }}
              className="bg-gray-600 h-2.5 rounded-full dark:bg-green-400"
              style={{ width: "80%" }}
            ></motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            {/* icon */}
            <Image alt="image" className="w-14 h-14 mr-10" src={node} />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <motion.div
              initial={{ width: "10%" }}
              animate={{ width: "60%" }}
              transition={{ duration: 3, delay: 0.1 }}
              className="bg-gray-600 h-2.5 rounded-full dark:bg-yellow-500"
              style={{ width: "60%" }}
            ></motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            {/* icon */}
            <Image alt="image" className="w-14 h-14 mr-10" src={express} />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <motion.div
              initial={{ width: "10%" }}
              animate={{ width: "50%" }}
              transition={{ duration: 3.2, delay: 0.1 }}
              className="bg-gray-600 h-2.5 rounded-full dark:bg-yellow-300"
              style={{ width: "50%" }}
            ></motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            {/* icon */}
            <Image alt="image" className="w-14 h-14 mr-10" src={mongodb} />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <motion.div
              initial={{ width: "10%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 3.2, delay: 0.1 }}
              className="bg-gray-600 h-2.5 rounded-full dark:bg-yellow-500"
              style={{ width: "65%" }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
