import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import styles from "./SkillsGrid.module.css";

interface Skill {
  name: string;
  group: string;
}

export function SkillsGrid({ skills }: { skills: Skill[] }) {
  // Group skills dynamically
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.group]) {
      acc[skill.group] = [];
    }
    acc[skill.group].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const groups = Object.keys(groupedSkills);

  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.header}>
        <SectionLabel label="Capabilities" />
        <h2 className={styles.heading}>Technical Toolkit</h2>
        <p className={styles.copy}>
          I utilize advanced data structures, statistical analysis, and machine learning frameworks to solve complex challenges.
        </p>
      </RevealOnScroll>

      <RevealOnScroll className={styles.bentoGrid}>
        {groups.map((group, index) => {
          // Different span classes for Bento style
          const isLarge = index === 0 || index === 3;
          return (
            <SpotlightCard
              key={group}
              className={`${styles.bentoCard} ${isLarge ? styles.largeCard : styles.smallCard}`}
            >
              <h3 className={styles.bentoTitle}>{group}</h3>
              <div className={styles.bentoTags}>
                {groupedSkills[group].map((skill) => (
                  <Tag key={skill.name}>{skill.name}</Tag>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
