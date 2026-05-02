import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Things I&rsquo;ve built
      </h2>
      <div className="grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  )
}
