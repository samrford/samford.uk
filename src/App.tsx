import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <>
      <ThemeToggle />
      <main className="mx-auto max-w-column px-6 pb-16 sm:px-8">
        <Hero />
        <div className="mt-24 sm:mt-32">
          <Projects />
        </div>
      </main>
    </>
  )
}

export default App
