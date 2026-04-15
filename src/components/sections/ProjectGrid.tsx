"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Tag } from "@/components/ui/Tag";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  projects: Project[];
  mode?: "home" | "work";
}

export function ProjectGrid({ projects, mode = "home" }: ProjectGridProps) {
  return (
    <RevealOnScroll className={mode === "home" ? styles.homeGrid : styles.workGrid}>
      {projects.map((project, index) => {
        const spanClass =
          mode === "home"
            ? index === 0
              ? styles.spanSeven
              : index === 1
                ? styles.spanFiveOffset
                : styles.spanEight
            : index % 2 === 0
              ? styles.spanEight
              : styles.spanFour;

        return (
          <motion.article
            key={project.slug}
            className={`${styles.card} project-card ${spanClass}`}
            whileHover="hover"
            initial="rest"
            animate="rest"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
              event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
            }}
          >
            <motion.span className={styles.accentLine} variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }} />
            <motion.span
              className={styles.number}
              variants={{ rest: { opacity: 0.05 }, hover: { opacity: 0.12 } }}
            >
              {(index + 1).toString().padStart(2, "0")}
            </motion.span>

            <Link href={`/work/${project.slug}`} className={styles.link}>
              <div className={`${styles.imageWrap} project-image`}>
                <motion.div variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }} className={styles.imageInner}>
                  <div style={{ background: project.coverGradient }} className={styles.gradientBase} />
                  {project.galleryImages && project.galleryImages.length > 0 ? (
                    <Image
                      src={project.galleryImages[0]}
                      alt={`${project.title} project preview`}
                      fill
                      className={`${styles.image} ${styles.coverImage}`}
                    />
                  ) : (
                    <Image
                      src={project.slug === "startup-profits" ? "/window.svg" : "/globe.svg"}
                      alt={`${project.title} project preview`}
                      fill
                      className={styles.image}
                    />
                  )}
                </motion.div>
              </div>
              <div className={styles.content}>
                <Tag>{project.category}</Tag>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.subtitle}>{project.subtitle}</p>
                <p className={styles.description}>{project.description}</p>
                <p className={styles.impact}>{project.impact}</p>
              </div>
            </Link>

            <div className={styles.links}>
              {project.links.github ? (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight size={13} />
                </a>
              ) : null}
              <Link href={`/work/${project.slug}`}>
                View Case Study <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </RevealOnScroll>
  );
}
