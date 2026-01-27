import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground' // Will optimize this next
import Snowflakes from './components/Snowflakes' // Will optimize this next

function App() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <AnimatedBackground />
            <Snowflakes />
            <Navbar />
            <main className="relative z-10 flex flex-col gap-0">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
