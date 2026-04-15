"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ease } from "@/lib/animations";
import styles from "./PageWrapper.module.css";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById("main");
    main?.focus();
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
