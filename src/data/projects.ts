export type Project = {
  name: string
  tagline: string
  description: string
  tech: string[]
  comingSoon?: boolean
  badge?: string
  links?: {
    live?: string
    github?: string
  }
}

export const projects: Project[] = [
  {
    name: 'Beyond',
    tagline: 'Plan your upcoming adventures. Catalog the ones you’ve been on.',
    description:
      'Plan upcoming trips in a nice visual format, with day-by-day itineraries with all your stops mapped out, and catalog completed trips with checkpoints, journal entries, and photos.',
    tech: ['Next.js', 'Go', 'Postgres'],
    links: {
      live: 'https://beyond-travel.net',  
      github: 'https://github.com/samrford/beyond',
    },
  },
  {
    name: 'Tally',
    tagline: 'End-to-end encrypted personal finance.',
    description:
      'A budgeting app where the server only ever sees ciphertext. All the crypto happens in your browser — not in the cloud.',
    tech: ['Vite', 'React', 'Go', 'Postgres'],
    badge: 'Early WIP',
    links: {
      live: 'https://tally.samford.uk',
      github: 'https://github.com/samrford/tally',
    },
  },
  {
    name: 'Trove',
    tagline: 'A space for your projects and ideas',
    description:
      'An app that gives you a space to define, iterate and expand on your projects and ideas, and serving as a hub for collaborating with AI.',
    tech: ['Vike', 'React', 'Go', 'Postgres'],
    comingSoon: true,
  },
  {
    name: 'google-photos-picker',
    tagline: 'Drop-in Google Photos for Go services.',
    description:
      'A small library that handles Google Photos OAuth, picker sessions, photo download, and import workers. You bring the storage sink — S3, MinIO, local disk, whatever.',
    tech: ['Go', 'OAuth', 'Postgres'],
    links: {
      github: 'https://github.com/samrford/google-photos-picker',
    },
  },
]
