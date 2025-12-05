"use client";
import { motion } from "motion/react";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 1,
  y = 30,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration, delay, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
