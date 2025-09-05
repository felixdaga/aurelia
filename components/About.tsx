"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  // Blur increases towards the middle of the section, then decreases
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 16, 0]);
  const blurFilter = useMotionTemplate`blur(${backgroundBlur}px)`;
  // Expose blur to header via CSS variable so header can blur in sync
  useMotionValueEvent(backgroundBlur, "change", (latest) => {
    if (typeof window !== "undefined") {
      document.documentElement.style.setProperty("--about-blur", `${latest}px`);
    }
  });
  // Text fades in strongest at center of section
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  return (
    <section
      ref={ref}
      id="about"
      className="relative pt-0 pb-32 min-h-[90vh] bg-white overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute inset-0" style={{ filter: blurFilter }}>
          <Image
            src="/images/interior4.jpeg"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-10 lg:px-12 mt-16 md:mt-0">
        <motion.div className="text-center" style={{ opacity: textOpacity }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-12">
            About Aurelia
          </h2>

          <div className="space-y-6 md:space-y-8 text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed">
            <p>
              Aurelia crafts architectural-inspired soft furnishings and
              lifestyle pieces, offering relaxed luxury and an "effortless sense
              of ease" for any space.
            </p>
            <p>
              More than a brand, Aurelia is a dynamic platform with a rich
              production heritage, actively co-creating exclusive collections
              with diverse artists. This collaborative approach fosters a global
              hub for creative talents, connecting people and environments
              through beautifully curated designs that elevate daily moments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
