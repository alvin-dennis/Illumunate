"use client";

import Link from "next/link";
import {
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  Variants,
} from "framer-motion";
import { MotionDiv, MotionH1, MotionP } from "@/components/Framer";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const parallaxY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 30);
      mouseY.set((e.clientY - window.innerHeight / 2) / 30);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  return (
    <section ref={ref} className="relative min-h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <MotionDiv
          variants={fadeInUp}
          className="absolute top-[40%] left-[25%] w-2 h-2 rounded-full bg-champagne/60"
          style={{ x: parallaxX, y: parallaxY }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <MotionDiv
          variants={fadeInUp}
          className="absolute top-[60%] right-[30%] w-1.5 h-1.5 rounded-full bg-crimson/50"
          style={{
            x: useTransform(parallaxX, (v) => -v),
            y: useTransform(parallaxY, (v) => -v),
          }}
          animate={{ scale: [1, 2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative z-10 container mx-auto px-4 text-center"
          style={{
            y,
            opacity,
            scale,
            filter: useTransform(blur, (v) => `blur(${v}px)`),
          }}
        >
          <MotionDiv variants={fadeInUp} className="mb-8">
            <span className="text-md tracking-[0.3em] font-semibold text-muted-foreground">
              μLearn presents
            </span>
          </MotionDiv>

          <MotionH1
            variants={fadeInUp}
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight mb-15"
          >
            <span>ILLUμNATE</span>
          </MotionH1>

          <MotionP
            variants={fadeInUp}
            className="text-editorial text-lg md:text-xl max-w-xl mx-auto mb-10"
          >
            A festival that redefines Christmas through immersive zones,
            captivating events, and vibrant college participation.
          </MotionP>

          <MotionDiv variants={fadeInUp}>
            <Link href="/zones">
              <Button variant="default" className="px-4 py-2">
                <span className="relative z-10">Enter Experience</span>
              </Button>
            </Link>
          </MotionDiv>

          <MotionDiv
            variants={fadeInUp}
            className="mt-24 flex justify-center gap-16 md:gap-24"
          >
            {[
              { value: "3", label: "Zones" },
              { value: "15+", label: "Events" },
              { value: "20+", label: "Colleges" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl mb-2">
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
