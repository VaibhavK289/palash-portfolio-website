import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects, workFilters } from "@/lib/projects";
import { WorkFilters } from "./WorkFilters";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "A curated archive of Data Analysis and Machine Learning projects.",
  openGraph: {
    title: "Selected Work | Palash Chaturvedi",
    description: "A curated archive of Data Analysis and Machine Learning projects.",
  },
};

export default function WorkPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.left}>
          <SectionLabel label="Selected" />
          <h1 className={styles.heading}>Work</h1>
          <p className={styles.copy}>
            Projects are sorted by machine learning and analytics relevance so recruiters can evaluate impact quickly.
          </p>
        </div>
      </section>

      <WorkFilters projects={projects} filters={workFilters} />
    </>
  );
}
