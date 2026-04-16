"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import styles from "./contact.module.css";

interface Props {
  status: "idle" | "submitting" | "success";
}

export function AnimatedSubmitButton({ status }: Props) {
  return (
    <motion.button
      type="submit"
      className={`${styles.submitButton} ${status === "success" ? styles.submitSuccess : ""}`}
      disabled={status !== "idle"}
      whileHover={status === "idle" ? { scale: 1.02 } : {}}
      whileTap={status === "idle" ? { scale: 0.98 } : {}}
      animate={{
        backgroundColor:
          status === "success" ? "rgba(16, 185, 129, 0.1)" : "var(--bg-card)",
        borderColor:
          status === "success" ? "rgba(16, 185, 129, 0.5)" : "var(--border)",
        color: status === "success" ? "#10b981" : "var(--text-primary)",
      }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.submitContent}
          >
            <span>Send Message</span>
            <Send size={18} className={styles.submitIcon} />
          </motion.div>
        )}

        {status === "submitting" && (
          <motion.div
            key="submitting"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={styles.submitContent}
          >
            <Loader2 size={20} className={styles.spinner} />
            <span>Sending...</span>
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.submitContent}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            <CheckCircle2 size={20} />
            <span>Message Sent!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
