import { GithubIcon, LinkedinIcon } from './BrandIcons'

const links = [
  { label: 'GitHub', href: 'https://github.com/samrford', Icon: GithubIcon },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samrford/',
    Icon: LinkedinIcon,
  },
]

export function Socials() {
  return (
    <ul className="flex items-center gap-2">
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  )
}
