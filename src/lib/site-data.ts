import { projects, skills, stats, workFilters } from "@/lib/projects";

export { projects, skills, stats, workFilters };

export const featuredProjects = projects;

export const services = [
  {
    title: "Machine Learning Solutions",
    description:
      "Designing, training, and evaluating practical ML models that solve business problems.",
  },
  {
    title: "Data Analysis and Reporting",
    description:
      "Building analytics pipelines and dashboards that improve decision speed and clarity.",
  },
  {
    title: "Data Pipeline Optimization",
    description:
      "Improving data quality, automation, and processing performance across workflows.",
  },
];

export const socialLinks = {
  github: "https://github.com/palashchaturvedi",
  linkedin: "https://www.linkedin.com/in/palashchaturvedi21/",
  email: "chaturvedipalash21@gmail.com",
  resume: "/Palash_Chaturvedi_Resume.pdf",
};

export const siteData = {
  name: "Palash Chaturvedi",
  role: "Data Analyst and Machine Learning Engineer",
  projects,
  skills,
  stats,
  workFilters,
  services,
  socialLinks,
};

export default siteData;
