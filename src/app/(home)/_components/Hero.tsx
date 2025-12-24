import Link from "next/link";
import { Variants } from "framer-motion";
import { MotionDiv, MotionP } from "@/components/Framer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { stats } from "@/data/common";

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
  return (
    <section className="relative min-h-screen">
      <div className="top-5 h-screen flex items-center justify-center overflow-hidden">
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate={"visible"}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <MotionDiv variants={fadeInUp} className="mb-3 flex justify-center">
            <span className="relative inline-flex items-center px-4 py-2 text-md font-semibold text-foreground">
              <span className="absolute inset-0 -z-10 rounded-full bg-primary" />
              μLearn × TPM presents
            </span>
          </MotionDiv>


          <MotionDiv variants={fadeInUp} className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Illumunate Logo"
              width={800}
              height={650}
              preload
              className="h-auto"
              sizes="(max-width: 640px) 90vw,
                     (max-width: 1024px) 50vw,
                     800px"
            />
          </MotionDiv>

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
                <span className="relative z-10">Get Started</span>
              </Button>
            </Link>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="mt-24 flex justify-center gap-16 md:gap-24">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-bold text-primary text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
