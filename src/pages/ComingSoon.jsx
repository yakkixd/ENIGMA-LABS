import { motion } from 'framer-motion'
import { FaArrowLeft, FaHardHat } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AnimatedBackground from '../components/AnimatedBackground'
import Snowflakes from '../components/Snowflakes'
import Footer from '../components/Footer'

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 flex flex-col">
            <Snowflakes />
            <AnimatedBackground />
            <Navbar />

            <main className="flex-grow flex items-center justify-center relative z-10 px-6 pb-12 pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl w-full text-center"
                >
                    <div className="w-24 h-24 bg-purple-900/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 relative group">
                        <FaHardHat className="text-4xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-purple-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-gray-400 bg-clip-text text-transparent">
                            WORK IN PROGRESS
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-lg mx-auto leading-relaxed">
                        This module is currently being compiled. Our engineers are working hard to ship this feature.
                    </p>

                    <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-purple-500/30 hover:bg-purple-500/10 rounded-xl transition-all duration-300 group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-sm tracking-wider uppercase">Return to Base</span>
                    </Link>

                    {/* Tech stats decorative */}
                    <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-gray-500">
                        <div>
                            <span className="block text-purple-500">STATUS</span>
                            BUILDING
                        </div>
                        <div>
                            <span className="block text-purple-500">ETA</span>
                            UNKNOWN
                        </div>
                        <div>
                            <span className="block text-purple-500">PRIORITY</span>
                            HIGH
                        </div>
                        <div>
                            <span className="block text-purple-500">VERSION</span>
                            0.9.0
                        </div>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    )
}

export default ComingSoon
