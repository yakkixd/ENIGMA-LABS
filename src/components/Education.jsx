import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { FaUniversity, FaLaptopCode, FaBook, FaMicrochip } from 'react-icons/fa'

const Education = () => {
    return (
        <section id="education" className="relative bg-black border-t border-purple-500/20 py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black opacity-50 pointer-events-none"></div>

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="mb-20 text-center">
                        <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">// Academic Profile</span>
                        <h2 className="text-5xl md:text-6xl font-black mt-4 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                EDUCATION
                            </span>
                        </h2>
                        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 rounded-full mt-6"></div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="max-w-4xl mx-auto relative group">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>

                        <div className="relative bg-black border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
                            {/* Decorative background numbers */}
                            <div className="absolute top-4 right-6 font-mono text-xs text-purple-500/20 hidden md:block">
                                ID: STU-2022-2026<br />
                                STATUS: ACTIVE
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Left: Degree Info */}
                                <div>
                                    <div className="w-16 h-16 bg-purple-900/20 border border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
                                        <FaUniversity className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Bachelor of Technology</h3>
                                    <p className="text-xl text-purple-400 font-mono mb-6">Computer Science & Engineering</p>

                                    <div className="space-y-4 text-gray-400 font-sans mb-8">
                                        <p className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                            <span className="text-white">Institute of Technology</span>
                                        </p>
                                        <p className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                            Currently Pursuing (3rd Year)
                                        </p>
                                        <p className="flex items-center gap-3 text-sm text-gray-500">
                                            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                            2022 - 2026 (Expected)
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Focus Areas / Coursework */}
                                <div className="space-y-6">
                                    <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2 mb-4">
                                        Core Modules
                                    </h4>

                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                            <FaLaptopCode className="text-purple-400 text-xl" />
                                            <div>
                                                <h5 className="text-white font-bold text-sm">Data Structures & Algorithms</h5>
                                                <p className="text-xs text-gray-500 mt-1">Problem Solving, Complexity Analysis</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                            <FaBook className="text-purple-400 text-xl" />
                                            <div>
                                                <h5 className="text-white font-bold text-sm">Object Oriented Programming</h5>
                                                <p className="text-xs text-gray-500 mt-1">Java, C++, Design Patterns</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                            <FaMicrochip className="text-purple-400 text-xl" />
                                            <div>
                                                <h5 className="text-white font-bold text-sm">Database Management</h5>
                                                <p className="text-xs text-gray-500 mt-1">SQL, Normalization, ACID Properties</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Bottom section divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </section>
    )
}

export default Education
