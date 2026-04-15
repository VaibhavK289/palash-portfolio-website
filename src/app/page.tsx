import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { RecruiterSnapshot } from "@/components/sections/RecruiterSnapshot";
import { CaseStudyFlow } from "@/components/sections/CaseStudyFlow";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { StatsRow } from "@/components/sections/StatsRow";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects, skills, stats } from "@/lib/projects";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className={styles.section}>
        <RecruiterSnapshot />
      </section>
      <MarqueeStrip />

      <section className={styles.section}>
        <CaseStudyFlow />
      </section>

      <section className={styles.section}>
        <RevealOnScroll className={styles.sectionHead}>
          <SectionLabel label="Selected Work" />
          <h2 className={styles.heading}>Case studies with measurable outcomes</h2>
        </RevealOnScroll>
        <ProjectGrid projects={projects} mode="home" />
      </section>

      <section className={styles.section}>
        <SkillsGrid skills={skills} />
      </section>

      <section className={styles.section}>
        <StatsRow stats={stats} />
      </section>
    </>
  );
}
