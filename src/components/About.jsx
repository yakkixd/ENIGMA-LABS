import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { FaChartBar, FaRobot, FaBolt } from 'react-icons/fa'

const About = () => {
    const projects = [
        {
            title: "Academic Data Parser",
            description: "I made a website that looks exactly like the official CBSE result page. It takes student data and shows it in the real format to practice frontend design.",
            icon: <FaChartBar className="w-full h-full p-3" />
        },
        {
            title: "xFected Discord Selfbot",
            description: "I created a powerful bot for my personal Discord account. It has many features like auto-replying to messages and special commands to manage servers easily.",
            icon: <FaRobot className="w-full h-full p-3" />
        },
        {
            title: "Discord Account Gen",
            description: "I wrote a Python script that creates Discord accounts automatically. It uses Selenium to control the browser and fill out the sign-up forms by itself.",
            icon: <FaBolt className="w-full h-full p-3" />
        }
    ]

    return (
        <section id="lab-notes" className="relative bg-black border-t border-purple-500/20">
            {/* Optimized Background - Radial Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none" style={{ background: 'radial-gradient(circle at center top, rgba(147, 51, 234, 0.05) 0%, transparent 60%)' }}></div>

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="mb-20 text-center">
                        <div className="inline-block mb-4 transition-transform hover:scale-105 duration-300">
                            <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">// Experiments</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                LAB NOTES
                            </span>
                        </h2>
                        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 rounded-full"></div>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="group relative transition-transform duration-300 hover:-translate-y-2">
                                <div className="relative bg-purple-900/5 border border-purple-500/20 rounded-2xl p-8 overflow-hidden transition-colors duration-300 hover:bg-purple-900/10">
                                    {/* Card glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/5 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                                    {/* Icon */}
                                    <div className="relative mb-6">
                                        <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-300 border border-purple-500/30 group-hover:border-purple-400/50 group-hover:text-purple-200 transition-all duration-300">
                                            {project.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-purple-200 transition-colors duration-300 relative z-10">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed text-sm relative z-10 group-hover:text-gray-300 transition-colors duration-300 font-sans">
                                        {project.description}
                                    </p>

                                    {/* Bottom corner accent */}
                                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity"></div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Mission Statement */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-32 max-w-4xl mx-auto relative group hover:translate-y-px transition-transform duration-500">
                        {/* Background panel */}
                        <div className="absolute inset-0 bg-purple-900/5 rounded-3xl border border-purple-500/10"></div>

                        <div className="relative z-10 p-12">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50"></div>
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                                    Who We Are
                                </h3>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50"></div>
                            </div>

                            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center font-sans">
                                ENIGMA LABS is a creative technology studio focused on building experimental
                                web applications, automation tools, and interactive experiences.
                            </p>
                            <p className="text-base text-gray-400 leading-relaxed text-center font-sans">
                                We specialize in pushing the boundaries of what's possible with modern web
                                technologies, from browser automation to real-time 3D graphics and beyond.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Bottom section divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </section>
    )
}

export default About
