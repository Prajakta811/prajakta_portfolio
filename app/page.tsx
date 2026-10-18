import Link from "next/link";
import { backendExperience } from "./data/backend";
import { projects } from "./data/projects";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Fastify",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "BullMQ",
];

function ProjectCover({ slug }: { slug: string }) {
  switch (slug) {
    case "trexo-admin":
      return (
        <>
          Trexo<span>Admin</span>
        </>
      );

    case "sai-siddhi":
      return (
        <>
          Sai<span>Siddhi.</span>
        </>
      );

    case "trexo-edge":
      return (
        <>
          trexo<span>edge ↗</span>
        </>
      );

    default:
      return (
        <>
          One platform.<span>Many identities.</span>
        </>
      );
  }
}

export default function Home() {
  return (
    <main id="top">
      <a href="#work" className="skip-link">
        Skip to projects
      </a>

      <header className="portfolio-nav section-shell">
        <Link href="/" className="personal-logo">
          Prajakta<span>.</span>
        </Link>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#backend">Backend</a>
          <a href="#about">About</a>
          <a href="#contact">Contact ↗</a>
          <a href="/resume/prajakta-shinde-resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a>
        </nav>
      </header>

      <section className="personal-hero section-shell">
        <div className="hero-kicker">
          <span>FULL STACK DEVELOPER</span>
          <span>BASED IN INDIA</span>
        </div>

        <h1>
          Thoughtful interfaces.
          <br />
          <span className="hero-second-line">
            <em>Powerful</em> <span className="outline-text">systems.</span>
          </span>
        </h1>

        <div className="hero-details">
          <p>
            Hi, I’m Prajakta. I work across frontend and backend
            development in fintech — building the screens people use
            and connecting them to the systems underneath.
          </p>

          <a className="text-link" href="#work">
            A few things I’ve worked on
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-footnote">
          <span>Currently building financial products.</span>
          <span className="handwritten">
            From pixels to PostgreSQL.
          </span>
        </div>
      </section>

      <section
        className="skills-band"
        aria-label="Technologies I work with"
      >
        <div className="skills-track">
          {[0, 1].map((copy) => (
            <div
              className="skills-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {skills.map((skill) => (
                <span key={skill}>
                  {skill}
                  <span
                    className="skill-separator"
                    aria-hidden="true"
                  >
                    /
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="work-section section-shell">
        <div className="work-heading">
          <div>
            <p className="eyebrow muted">01 — SELECTED WORK</p>
            <h2>
              Products I’ve helped build<span>.</span>
            </h2>
          </div>

          <p>
            Admin workspaces, customer platforms,
            <br />
            and the connections between them.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              className={`work-card work-card-${index + 1}`}
              key={project.slug}
            >
              <div className="work-cover">
                <div className="cover-topline">
                  <span>
                    {project.number} / PRODUCT EXPERIENCE
                  </span>
                  <span className="cover-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className="cover-title" aria-hidden="true">
                  <ProjectCover slug={project.slug} />
                </div>

                <div className="cover-bottomline">
                  <span>{project.role}</span>
                  <span>
                    {project.slug === "trexo-admin"
                      ? "IN DEVELOPMENT"
                      : "PRODUCT WORK"}
                  </span>
                </div>
              </div>

              <div className="work-card-copy">
                <p className="eyebrow muted">
                  {project.category}
                </p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <span className="case-study-link">
                  Explore project
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="backend" className="backend-section section-shell">
        <div className="work-heading"><div><p className="eyebrow muted">BEYOND THE INTERFACE</p><h2>Backend engineering<span>.</span></h2></div><p>Contributions across the fintech services<br />behind customer and operational experiences.</p></div>
        <div className="backend-grid">{backendExperience.map(item => <article className="backend-card" key={item.title}><p className="eyebrow muted">{item.stack}</p><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        <Link href="/projects/trexo-edge" className="text-link backend-project-link">Explore the full stack product story <span aria-hidden="true">↗</span></Link>
      </section>

      <section id="about" className="personal-about section-shell">
        <div>
          <p className="eyebrow muted">02 — A LITTLE ABOUT ME</p>
          <h2>
            Frontend roots.
            <br />
            <em>A wider perspective.</em>
          </h2>
        </div>

        <div className="about-prose">
          <p>
            I started with the part of a product you can see and
            interact with. Working in fintech led me further into
            APIs, databases, background jobs, and payment workflows.
          </p>

          <p>
            What I enjoy most is following the whole journey:
            someone clicks a button, a request reaches a service,
            data changes, and the interface tells them what happened.
          </p>

          <p>
            I’m continuing to deepen my understanding of system
            design, data consistency, and how software behaves
            when things fail.
          </p>

          <div className="about-signature">Prajakta</div>
        </div>
      </section>

      <section className="engineering-notes section-shell">
        <p className="eyebrow muted">
          A FEW THINGS I PAY ATTENTION TO
        </p>

        <div className="notes-grid">
          {[
            {
              number: "01",
              title: "What happens next?",
              description:
                "A useful interface makes the next step clear, especially when an operation is pending or fails.",
            },
            {
              number: "02",
              title: "Where does the data go?",
              description:
                "Understanding the API and database helps me build better frontend experiences.",
            },
            {
              number: "03",
              title: "Can someone maintain this?",
              description:
                "Clear components, readable code, and sensible boundaries matter after the first release.",
            },
          ].map((note) => (
            <article key={note.number}>
              <span className="note-number">{note.number}</span>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="personal-contact section-shell"
      >
        <p className="eyebrow muted">03 — LET’S TALK</p>

        <h2>
          Have something
          <br />
          <em>worth building?</em>
        </h2>

        <p>
          I’m interested in thoughtful teams, useful products,
          and opportunities to grow as a full stack developer.
        </p>

        <a className="text-link resume-download" href="/resume/prajakta-shinde-resume.pdf" download="Prajakta-Shinde-Resume.pdf">Download Resume <span aria-hidden="true">↓</span></a>
        <p className="contact-name">Prajakata Balasaheb Shinde</p>
        <div className="contact-links">
          <a href="mailto:prajaktas811@gmail.com"><span>Email</span><strong>prajaktas811@gmail.com ↗</strong></a>
          <a href="tel:+917058483374"><span>Phone</span><strong>+91 7058483374 ↗</strong></a>
          <a href="https://github.com/Prajakta811" target="_blank" rel="noopener noreferrer"><span>GitHub</span><strong>Prajakta811 ↗</strong></a>
          <a href="https://www.linkedin.com/in/iam-prajakta-shinde/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><strong>Connect on LinkedIn ↗</strong></a>
        </div>
      </section>

      <footer className="personal-footer section-shell">
        <span>© 2026 Prajakta</span>
       
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}