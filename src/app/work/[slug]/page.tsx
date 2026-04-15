import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import styles from "./project-detail.module.css";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Palash Chaturvedi`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProject = projects.find((item) => item.slug === project.nextSlug) ?? projects[0];

  return (
    <article className={styles.page}>
      <Link href="/work" className={styles.back}>
        <ArrowLeft size={14} /> Work
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.meta}>
          {project.year} / {project.role} / {project.stack.join(" / ")}
        </p>
      </header>

      <section className={styles.heroImage} style={{ background: project.coverGradient }} aria-label="Project cover">
        <span className={styles.heroLabel}>{project.subtitle}</span>
      </section>

      <section className={styles.content}>
        <aside className={styles.aside}>
          <p className={styles.kicker}>Project Context</p>
          <p className={styles.pullQuote}>
            Structured as Problem → Method → Outcome to make technical and business value easy to evaluate.
          </p>
          <p className={styles.impact}>{project.impact}</p>
          <ul className={styles.metaList}>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.links}>
            {project.links.github ? (
              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={14} />
              </Link>
            ) : null}
            {project.links.live ? (
              <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                Live Demo <ArrowUpRight size={14} />
              </Link>
            ) : null}
          </div>
        </aside>

        <div className={styles.body}>
          <div className={styles.narrative}>
            {project.longDescription.map((paragraph, index) => (
              <div key={index}>{paragraph}</div>
            ))}
          </div>

          <section className={styles.story}>
            <article>
              <h2>Problem</h2>
              {project.longDescription[0]}
            </article>
            <article>
              <h2>Method</h2>
              {project.longDescription[1]}
            </article>
            <article>
              <h2>Outcome</h2>
              {project.longDescription[2]}
            </article>
          </section>
        </div>
      </section>

      <section className={styles.features}>
        {project.features.map((feature) => (
          <article key={feature.number} className={styles.feature}>
            <span className={styles.featureNumber}>{feature.number}</span>
            <div>
              <h2 className={styles.featureTitle}>{feature.title}</h2>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </article>
        ))}
      </section>

      <nav className={styles.next} aria-label="Next project">
        <p className={styles.nextLabel}>Next Project</p>
        <Link href={`/work/${nextProject.slug}`} className={styles.nextLink}>
          {nextProject.title} <ArrowUpRight size={16} />
        </Link>
      </nav>
    </article>
  );
}
