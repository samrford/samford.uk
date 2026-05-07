import { useState } from 'react'
import { cn } from '../lib/utils'
import { Socials } from './Socials'

function Avatar() {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-accent/50 via-accent/20 to-accent/5 ring-2 ring-border">
      {!errored && (
        <img
          src="/photo.jpg"
          alt="Sam Ford"
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  )
}

export function Hero() {
  return (
    <section className="flex flex-col items-start gap-6 pt-20 sm:pt-28">
      <Avatar />
      <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl">
        Hi, I&rsquo;m Sam.
      </h1>
      <p className="max-w-prose text-lg leading-relaxed text-muted-foreground sm:text-xl">
        I'm a Senior Software Engineer living in Brighton, UK. 🏖️ <br />
        I work at <a href="https://markup.ai" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">Markup AI</a>. <br /><br />
        I love to travel, check out some of my trip reports and upcoming adventures on my app, <a href="https://beyond-travel.net/u/samford" className="text-foreground hover:underline" target="_blank" rel="noopener noreferrer">Beyond!</a>. <br /><br />
        Below you can find  a list of things I've built, or am currently working on.
      </p>
      <Socials />
    </section>
  )
}
