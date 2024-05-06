"use client";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};
export default function Template({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
