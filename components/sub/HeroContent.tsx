"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { CubeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Download, Scale } from "lucide-react";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-20 max-md:px-6 min-h-[90vh] py-6 w-full z-[20] gap-6"
    >
      <div className="h-full max-md:h-[60vh] w-full flex flex-col gap-5 justify-center max-md:items-center m-auto text-start">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="max-md:hidden welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-90"
        >
          <CubeIcon className="text-[#b49bff] mx-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px]">I AM THE BEST</h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.2)}
          className="flex flex-col gap-6 mt-6 text-6xl max-md:text-[56px] max-sm:text-[32px] font-bold text-white max-w-[600px] max-md:max-w-full max-md:w-full w-auto h-auto"
        >
          <span className="leading-[80px] max-sm:leading-[50px] max-md:text-center">
            I am{" "}
            <TypeAnimation
              className="text-transparent text-[60px] max-md:text-[48px] max-sm:text-[32px] font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              sequence={[
                "Abdalla Tawfig",
                3000,
                "Mobile Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />{" "}
            <br />
          </span>
        </motion.div>

        <motion.p
          initial="hidden"

          animate="visible"
          variants={slideInFromLeft(0.5)}
          className="text-lg text-gray-400 my-5 max-w-[600px] max-md:text-center"
        >
          Software Engineering student at Üsküdar University with experience in
          Kotlin, Native Android, and Flutter. I focus on creating high-quality,
          user-friendly mobile apps and enjoy working in collaborative
          environments to deliver innovative solutions.
        </motion.p>
        <div className="flex flex-col gap-4">
          <motion.a
            initial="hidden"
            animate="visible"
            href="/#projects"
            variants={slideInFromLeft(0.8)}
            className="py-2 px-6 bg-white text-center text-purple-900 font-semibold cursor-pointer max-w-[200px] rounded-[5px]"
          >
            <div className="flex gap-2 justify-center items-center">
              Projects
            </div>
          </motion.a>
          <motion.a
            initial="hidden"
            animate="visible"
            href="/abdalla_resume_cross.pdf"
            download
            target="_blank"
            variants={slideInFromLeft(0.8)}
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-[5px] max-w-[200px] transition"
          >
            <div className="flex gap-2 justify-center items-center">
              <Download className="w-5 h-5" />
              Download CV
            </div>
          </motion.a>

        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.5)}
        className="w-full h-full flex flex-center justify-center items-center"
      >
        <img
          src="/IMG_20241024_185247_524.jpg"
          className=" rounded-[100000000px] w-[250px] md:w-[550px] opacity-85"
          alt="icons"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
