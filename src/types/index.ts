import type { ReactNode } from "react";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  longDescription: ReactNode[];
  year: string;
  role: string;
  stack: string[];
  category: "Data Analytics" | "Machine Learning" | "Artificial Intelligence" | "Software Engineering";
  accentColor: string;
  coverGradient: string;
  links: { live?: string; github?: string };
  features: { number: string; title: string; description: string }[];
  nextSlug?: string;
}

export interface SkillItem {
  name: string;
  group: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
