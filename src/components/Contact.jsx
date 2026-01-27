import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { FaEnvelope, FaGithub, FaDiscord, FaBolt } from 'react-icons/fa'

const Contact = () => {
    return (
        <section id="terminal" className="relative bg-black border-t border-purple-500/20">
            {/* Optimized Background - Radial Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)' }}></div>

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="mb-20 text-center">
                        <div className="inline-block mb-4 transition-transform hover:scale-105 duration-300">
                            <span className="text-purple-400 font-sans text-sm tracking-widest uppercase">// Contact</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                INITIALIZE
                            </span>
                        </h2>
                        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 rounded-full"></div>
                        <p className="text-sm text-gray-400 mt-6 font-sans">
                            Ready to collaborate? Let's build something extraordinary
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Email */}
                    <ScrollReveal delay={0.1}>
                        <ContactCard
                            icon={<FaEnvelope className="w-full h-full p-2" />}
                            label="EMAIL"
                            value="contact@enigma-labs.dev"
                            href="mailto:contact@enigma-labs.dev"
                        />
                    </ScrollReveal>

                    {/* GitHub */}
                    <ScrollReveal delay={0.2}>
                        <ContactCard
                            icon={<FaGithub className="w-full h-full p-2" />}
                            label="GITHUB"
                            value="github.com/enigma-labs"
                            href="https://github.com"
                        />
                    </ScrollReveal>

                    {/* Discord */}
                    <ScrollReveal delay={0.3}>
                        <ContactCard
                            icon={<FaDiscord className="w-full h-full p-2" />}
                            label="DISCORD"
                            value="Join our community"
                            href="#"
                        />
                    </ScrollReveal>
                </div>

                {/* Collaboration Card */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-16 max-w-3xl mx-auto relative group hover:-translate-y-1 transition-transform duration-300">
                        <div className="relative bg-purple-900/5 border border-purple-500/20 rounded-2xl p-12 overflow-hidden transition-colors duration-300 hover:bg-purple-900/10">
                            {/* Top gradient line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600"></div>

                            <div className="relative z-10 text-center">
                                <div className="text-6xl mb-6 text-purple-400 flex justify-center">
                                    <FaBolt className="w-16 h-16" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 tracking-tight bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                                    Open for Collaboration
                                </h3>
                                <p className="text-base text-gray-300 leading-relaxed font-sans">
                                    We're always interested in innovative projects and creative challenges.
                                    Whether it's web development, automation, or experimental tech, let's talk.
                                </p>
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

const ContactCard = ({ icon, label, value, href }) => {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group block relative transition-transform duration-300 hover:-translate-y-2"
        >
            <div className="relative h-full bg-purple-900/5 border border-purple-500/20 rounded-2xl p-8 overflow-hidden transition-colors duration-300 hover:bg-purple-900/10">
                {/* Top gradient line - Opacity transition */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="w-16 h-16 mb-6 text-purple-400 transform group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300 origin-left">
                    {icon}
                </div>

                {/* Label */}
                <h4 className="text-xs font-sans text-purple-400 mb-3 tracking-widest uppercase">
                    {label}
                </h4>

                {/* Value */}
                <p className="text-base text-gray-300 group-hover:text-purple-200 transition-colors duration-300 font-sans">
                    {value}
                </p>

                {/* Corner accent - GPU optimized */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity"></div>
            </div>
        </a>
    )
}

export default Contact
