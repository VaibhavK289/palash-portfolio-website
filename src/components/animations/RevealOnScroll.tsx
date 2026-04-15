"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { duration, ease } from "@/lib/animations";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export function RevealOnScroll({ children, className, as = "div" }: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -16% 0px" });

  const Component = motion[as as "div"];

  return (
    <Component
      ref={ref as never}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: duration.normal + 0.1,
            ease: ease.enter,
            staggerChildren: 0.07,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}
