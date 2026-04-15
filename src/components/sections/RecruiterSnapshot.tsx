import { BriefcaseBusiness, Download, GraduationCap, MapPin, Sparkles, Target } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./RecruiterSnapshot.module.css";

const snapshotItems = [
  {
    icon: BriefcaseBusiness,
    label: "Current Role",
    value: "Data Analyst at BluePlanet Infosolutions",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "VIT Bhopal + IIT Madras (Data Science)",
  },
  {
    icon: Target,
    label: "Focus",
    value: "Machine Learning, Forecasting, Analytics Automation",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote · India",
  },
  {
    icon: Sparkles,
    label: "Highlights",
    value: "90% AI caption accuracy · 85% forecasting precision",
  },
];

export function RecruiterSnapshot() {
  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.head}>
        <SectionLabel label="Recruiter Snapshot" />
        <h2 className={styles.heading}>Everything important in under 20 seconds.</h2>
        <p className={styles.copy}>
          I design data workflows and machine learning systems that deliver measurable business impact, not just experimentation.
        </p>
      </RevealOnScroll>

      <div className={styles.grid}>
        {snapshotItems.map((item) => (
          <SpotlightCard key={item.label} className={styles.card}>
            <item.icon size={16} className={styles.icon} />
            <p className={styles.label}>{item.label}</p>
            <p className={styles.value}>{item.value}</p>
          </SpotlightCard>
        ))}
      </div>

      <RevealOnScroll className={styles.actions}>
        <Button href="/Palash_Chaturvedi_Resume.pdf" variant="primary" target="_blank" rel="noopener noreferrer">
          Resume <Download size={14} />
        </Button>
        <Button href="/contact" variant="ghost">
          Book Intro Call
        </Button>
      </RevealOnScroll>
    </section>
  );
}
