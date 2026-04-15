import Link from "next/link";
import styles from "./Footer.module.css";

const links = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "mailto:chaturvedipalash21@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>Built with intention in Next.js and TypeScript.</p>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
