import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
            {/* Optimized Gradient Orbs - Using radial-gradient instead of heavy blur filters */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
                    willChange: 'transform'
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 30, 0],
                    y: [0, 20, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                    willChange: 'transform'
                }}
                animate={{
                    scale: [1.1, 1, 1.1],
                    x: [0, -30, 0],
                    y: [0, -20, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            {/* Grid overlay - Static */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="section-container text-center relative z-10">
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-purple-300 font-mono text-xs md:text-sm tracking-widest uppercase">
                            Creative Engineering Lab
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <span className="bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
                        ENIGMA
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                        LABS
                    </span>
                </motion.h1>

                <motion.div
                    className="relative mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p className="text-2xl md:text-4xl font-light text-gray-300 mb-2 tracking-wide font-sans">
                        ENGINEERING THE UNSEEN
                    </p>
                    <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                </motion.div>

                <motion.p
                    className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Full-stack experiments, Three.js demos, and automation projects
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.a
                        href="#work"
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.02 }} // Reduced scale for performance
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">View Projects</span>
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>
                    <motion.a
                        href="#terminal"
                        className="group relative px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Initialize Contact
                    </motion.a>
                </motion.div>

                {/* Animated scroll indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="text-xs text-purple-400 font-mono tracking-wider">SCROLL</span>
                        <div className="w-px h-16 bg-gradient-to-b from-purple-500 via-violet-500 to-transparent"></div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    )
}

export default Hero
