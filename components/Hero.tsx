"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  // White overlay opacity to "whiten" the marble as we scroll
  const whiteOverlay = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Your Aurelia Logo Image as Background */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/aurelia-background-HD-new.jpeg"
            alt="Aurelia Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* White overlay that fades in with scroll for smooth transition to white */}
        <motion.div
          className="absolute inset-0 bg-white"
          style={{ opacity: whiteOverlay }}
        />

        {/* Gradient overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-primary-900/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary-900/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
