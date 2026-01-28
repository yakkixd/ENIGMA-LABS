import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const About = () => {
    return (
        <section id="manifesto" className="relative bg-black border-t border-purple-500/20 py-32 overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
                <h1 className="text-[20vw] font-black text-white leading-none tracking-tighter">
                    VISION
                </h1>
            </div>

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4 block">// The Manifesto</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            WE DO NOT JUST CODE.<br />
                            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                                WE ENGINEER EXPERIENCES.
                            </span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal delay={0.1}>
                        <div className="space-y-8 text-lg text-gray-400 leading-relaxed font-sans">
                            <p>
                                <span className="text-white font-bold">The web has evolved.</span> It is no longer just a document reader; it is a spatial canvas, a runtime environment, and a portal to the metaverse.
                            </p>
                            <p>
                                At <span className="text-purple-300">Enigma Labs</span>, we reject the default. We bypass the template. We dismantle the standard bootstrapper to build something raw, performant, and undeniably unique.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="relative group p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-colors"></div>

                            <h3 className="text-2xl font-bold text-white mb-6 font-mono">CORE DIRECTIVES</h3>
                            <ul className="space-y-4 font-mono text-sm text-purple-200/80">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                    <span>Obsessive Performance Optimization</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                    <span>Immersive Interaction Design</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                    <span>Algorithmic Precision</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                    <span>Experimental Interfaces</span>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Bottom section divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </section>
    )
}

export default About
