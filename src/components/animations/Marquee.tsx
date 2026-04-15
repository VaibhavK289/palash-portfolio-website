"use client";

import React from "react";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  role?: string;
  "aria-label"?: string;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`${styles.marquee} ${reverse ? styles.reverse : ""} ${
        pauseOnHover ? styles.pauseOnHover : ""
      } ${vertical ? styles.vertical : styles.horizontal} ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`${styles.inner} ${vertical ? styles.innerVertical : styles.innerHorizontal}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
