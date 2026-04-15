"use client";

import { useMemo, useState } from "react";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import type { Project } from "@/types";
import styles from "./work.module.css";

interface WorkFiltersProps {
  projects: Project[];
  filters: readonly string[];
}

const categoryPriority: Record<Project["category"], number> = {
  "Machine Learning": 1,
  "Artificial Intelligence": 2,
  "Data Analytics": 3,
  "Software Engineering": 4,
};

export function WorkFilters({ projects, filters }: WorkFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const rankedProjects = useMemo(
    () => [...projects].sort((a, b) => categoryPriority[a.category] - categoryPriority[b.category]),
    [projects],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return rankedProjects;
    }

    return rankedProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter, rankedProjects]);

  return (
    <>
      <div className={styles.filters} aria-label="Project filters" role="toolbar">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              className={`${styles.filter} ${isActive ? styles.active : ""}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className={styles.resultMeta} aria-live="polite">
        Showing {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}
      </p>

      <section className={styles.gridSection}>
        <ProjectGrid projects={filteredProjects} mode="work" />
      </section>
    </>
  );
}
