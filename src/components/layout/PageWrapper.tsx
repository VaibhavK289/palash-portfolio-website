"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ease } from "@/lib/animations";
import styles from "./PageWrapper.module.css";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const main = document.getElementById("main");
    main?.focus();
  }, [pathname]);

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.cssText = `
      width:20px; height:20px; border-radius:50%;
      border:1px solid rgba(200,245,66,0.5);
      position:fixed; pointer-events:none; z-index:9999;
      transition: transform 0.08s, width 0.2s, height 0.2s, border-color 0.2s;
      transform: translate(-50%,-50%);
      mix-blend-mode:difference;
      opacity:0.9;
    `;

    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      raf = requestAnimationFrame(loop);
    };

    const onEnterTarget = () => {
      cursor.style.width = "60px";
      cursor.style.height = "60px";
      cursor.style.borderColor = "rgba(200,245,66,0.8)";
    };

    const onLeaveTarget = () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.borderColor = "rgba(200,245,66,0.5)";
    };

    const hoverTargets = document.querySelectorAll("a, button, [data-magnetic]");
    hoverTargets.forEach((node) => {
      node.addEventListener("mouseenter", onEnterTarget);
      node.addEventListener("mouseleave", onLeaveTarget);
    });

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      hoverTargets.forEach((node) => {
        node.removeEventListener("mouseenter", onEnterTarget);
        node.removeEventListener("mouseleave", onLeaveTarget);
      });
      cursor.remove();
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        id="main"
        tabIndex={-1}
        key={pathname}
        className={styles.main}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{
          y: { duration: 0.55, ease: ease.enter },
          opacity: { duration: 0.55, ease: ease.enter },
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
