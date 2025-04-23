import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-4xl text-center">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="w-full max-w-4xl px-6 lg:px-12">
          <p className="py-6 text-center lg:text-left text-lg leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
