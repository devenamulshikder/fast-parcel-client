/* eslint-disable no-unused-vars */
import { Footer, Navbar } from "../../components";
import errorLottie from "../../assets/lottieFile/error.json"
import Lottie from "lottie-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
export const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 flex flex-col items-center justify-center">
        <Lottie animationData={errorLottie} loop={true}></Lottie>
        <motion.button whileTap={{scale: 0.85}} className="bg-[#CAEB66] px-5 py-3 rounded-2xl text-[#1F1F1F] text-xl font-bold mb-5 md:mb-18">
          <Link to={"/"}>Go Home</Link>
        </motion.button>
      </div>
      <Footer />
    </div>
  );
};
