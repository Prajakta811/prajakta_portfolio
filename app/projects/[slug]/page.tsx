import { Suspense } from "react";
import { backendExperience } from "../../data/backend";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectGallery from "../../components/ProjectGallery";
import BrandingDemo from "../../components/BrandingDemo";
import { projectScreenshots } from "../../data/screenshots";
import { projects } from "../../data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

async function ProjectContent({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === slug,
  );

  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  return (
    <main className="section-shell project-detail">
      <nav
        className="project-navigation"
        aria-label="Project navigation"
      >
        <Link href="/" className="wordmark">
          Prajakta<span>.</span>
        </Link>

        <Link href="/projects" className="back-link">
          ← All projects
        </Link>
      </nav>

      <header className="detail-hero">
        <p className="eyebrow muted">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="detail-summary">{project.summary}</p>

        <div className="detail-meta">
          <div>
            <span className="eyebrow muted">MY ROLE</span>
            <p>{project.role}</p>
          </div>

          <div>
            <span className="eyebrow muted">
              TECHNOLOGIES / DISCIPLINES
            </span>

            <ul className="tag-list">
              {project.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {project.slug === "financial-operations" && (
        <BrandingDemo />
      )}

      <ProjectGallery
        screenshots={projectScreenshots[project.slug] ?? []}
      />

      <section className="detail-section">
        <p className="eyebrow muted">01 / THE PRODUCT</p>

        <div>
          <h2>
            Understanding the{" "}
            <span className="serif-text">product.</span>
          </h2>

          <p className="detail-body">{project.overview}</p>
        </div>
      </section>

      <section className="detail-section">
        <p className="eyebrow muted">02 / MY CONTRIBUTION</p>

        <div>
          <h2>
            What I{" "}
            <span className="serif-text">worked on.</span>
          </h2>

          <p className="detail-body">
            {project.contribution}
          </p>

          <ul className="scope-list">
            {project.areas.map((area) => (
              <li key={area}>
                <span aria-hidden="true">↗</span>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="detail-section">
        <p className="eyebrow muted">
          03 / ENGINEERING PERSPECTIVE
        </p>

        <div>
          <h2>
            Behind the{" "}
            <span className="serif-text">interface.</span>
          </h2>

          <div className="consideration-list">
            {project.considerations.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p className="detail-body">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {project.slug === "trexo-edge" && <section className="detail-section"><p className="eyebrow muted">04 / BACKEND CONTRIBUTIONS</p><div><h2>Services behind the <span className="serif-text">experience.</span></h2><p className="detail-body">My related backend work spans the customer platform and supporting fintech services across repositories.</p><div className="consideration-list">{backendExperience.map(item => <article key={item.title}><p className="eyebrow muted">{item.stack}</p><h3>{item.title}</h3><p className="detail-body">{item.description}</p></article>)}</div></div></section>}

      <Link
        href={`/projects/${nextProject.slug}`}
        className="next-project"
      >
        <div>
          <p className="eyebrow muted">EXPLORE NEXT</p>
          <h2>{nextProject.title}</h2>
        </div>

        <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}

export default function ProjectPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <main
          className="section-shell"
          style={{ paddingBlock: 80 }}
        >
          <p role="status">Loading project…</p>
        </main>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}