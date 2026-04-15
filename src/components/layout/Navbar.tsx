"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandDot} aria-hidden="true" />
          <span className={styles.brandText}>PALASH CHATURVEDI</span>
        </Link>

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
        >
          <Menu size={16} />
        </button>

        <nav id="main-nav" className={cn(styles.nav, open && styles.navOpen)} aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(styles.navLink, active && styles.navLinkActive)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/Palash_Chaturvedi_Resume.pdf"
            className={styles.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume <Download size={13} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
