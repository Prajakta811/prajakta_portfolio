import Link from "next/link";
import { projects } from "../data/projects";
export default function ProjectsPage() {
  return <main className="section-shell projects-page">
    <nav className="project-navigation" aria-label="Project navigation"><Link className="wordmark" href="/">Prajakta<span>.</span></Link><Link className="back-link" href="/">← Back home</Link></nav>
    <header className="projects-intro"><p className="eyebrow muted">SELECTED PRODUCT EXPERIENCE</p><h1>Products &amp; <span className="serif-text">engineering.</span></h1><p>Financial operations, banking interfaces, and customer experiences.</p></header>
    <div className="product-list">{projects.map(project => <Link className="product-row" href={`/projects/${project.slug}`} key={project.slug}><span className="product-number">{project.number}</span><div className="product-row-content"><p className="eyebrow muted">{project.category}</p><h2>{project.title}</h2><p>{project.summary}</p><ul className="tag-list">{project.stack.map(item => <li key={item}>{item}</li>)}</ul></div><span className="product-open" aria-hidden="true">↗</span></Link>)}</div>
  </main>;
}
