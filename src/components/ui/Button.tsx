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
}

export function Button({
  href,
  children,
  variant = "ghost",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(styles.button, variant === "primary" ? styles.primary : styles.ghost, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
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
