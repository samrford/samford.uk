import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { GithubIcon } from './BrandIcons'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          {project.name}
        </h3>
      </div>
      <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.comingSoon ? (
          <span className="inline-flex items-center rounded-full border border-dashed border-border px-4 py-2 text-sm font-medium text-muted-foreground">
            Coming soon
          </span>
        ) : (
          <>
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Visit
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
          </>
        )}
      </div>
    </article>
  )
}
