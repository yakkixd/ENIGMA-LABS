import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' // Lab Protocols
import Skills from './components/Skills'
import Projects from './components/Projects' // Archives
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Cursor from './components/Cursor'
import Snowflakes from './components/Snowflakes'
import Terminal from './components/Terminal'

function App() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Cursor />
            <Snowflakes />
            <AnimatedBackground />
            <Navbar />
            <main className="relative z-10 flex flex-col gap-0">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Terminal />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
