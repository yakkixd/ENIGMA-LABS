import { motion } from 'framer-motion'
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AnimatedBackground from '../components/AnimatedBackground'
import Snowflakes from '../components/Snowflakes'
import Footer from '../components/Footer'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 flex flex-col">
            <Snowflakes />
            <AnimatedBackground />
            <Navbar />

            <main className="flex-grow flex items-center justify-center relative z-10 px-6 pb-12 pt-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl w-full text-center"
                >
                    <div className="relative mb-8">
                        <h1 className="text-[120px] md:text-[180px] font-black leading-none text-white/5 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-red-900/10 border border-red-500/20 rounded-2xl flex items-center justify-center animate-pulse">
                                <FaExclamationTriangle className="text-4xl text-red-500" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-white">
                        SIGNAL LOST
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-lg mx-auto leading-relaxed">
                        The requested sector could not be found in our database. It may have been redacted or deleted.
                    </p>

                    <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-red-500/30 hover:bg-red-500/10 rounded-xl transition-all duration-300 group hover:border-red-500/50">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-red-400" />
                        <span className="font-mono text-sm tracking-wider uppercase text-red-400">Re-Establish Link</span>
                    </Link>
                </motion.div>
            </main>

            <Footer />
        </div>
    )
}

export default NotFound
