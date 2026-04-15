import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function Button({
  href,
  children,
  variant = "ghost",
  className,
  type = "button",
  onClick,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(styles.button, variant === "primary" ? styles.primary : styles.ghost, className);

  if (href) {
    if (href.startsWith("http") || href.endsWith(".pdf")) {
      return (
        <a href={href} className={classes} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
