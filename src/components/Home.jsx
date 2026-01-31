import Hero from './Hero'
import About from './About' // Lab Protocols
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects' // Archives
import Contact from './Contact'

const Home = () => {
    return (
        <main className="relative z-10 flex flex-col gap-0">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}

export default Home
