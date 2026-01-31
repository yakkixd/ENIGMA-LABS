import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' // Lab Protocols
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects' // Archives
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Snowflakes from './components/Snowflakes'
import Loader from './components/Loader'

function App() {
    const [loading, setLoading] = useState(true)

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <AnimatePresence mode="wait">
                {loading ? (
                    <Loader key="loader" onLoadingComplete={() => setLoading(false)} />
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Snowflakes />
                        <AnimatedBackground />
                        <Navbar />
                        <main className="relative z-10 flex flex-col gap-0">
                            <Hero />
                            <About />
                            <Education />
                            <Skills />
                            <Projects />
                            <Contact />
                        </main>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default App
