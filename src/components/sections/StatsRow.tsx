"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./StatsRow.module.css";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return () => controls.stop();
  }, [count, inView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <section className={styles.row}>
      {stats.map((stat) => (
        <article key={stat.label} className={styles.item}>
          <p className={styles.kicker}>Outcome</p>
          <h3 className={styles.value}>
            <Counter value={stat.value} suffix={stat.suffix} />
          </h3>
          <p className={styles.label}>{stat.label}</p>
        </article>
      ))}
    </section>
  );
}
