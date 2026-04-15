import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

const links = [
  { href: "https://github.com/palashchaturvedi", label: "GitHub" },
  { href: "https://www.linkedin.com/in/palashchaturvedi21/", label: "LinkedIn" },
  { href: "/Palash_Chaturvedi_Resume.pdf", label: "Resume" },
  { href: "mailto:chaturvedipalash21@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <h2>Let&apos;s engineer the future.</h2>
        <Link href="/contact" className={styles.ctaButton}>
          Start a conversation <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Palash Chaturvedi. Engineered with precision.
        </p>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.label} href={link.href} className={styles.link} target="_blank" rel="noopener noreferrer">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
