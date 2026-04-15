import styles from "./SectionLabel.module.css";

export function SectionLabel({ label }: { label: string }) {
  return (
    <p className={styles.label}>
      <span className={styles.dot} aria-hidden="true" />
      {label}
    </p>
  );
}
