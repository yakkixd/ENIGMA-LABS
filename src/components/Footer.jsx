import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const links = [
        { name: 'Vision', href: '#manifesto' },
        { name: 'Education', href: '#education' },
        { name: 'Armory', href: '#armory' },
        { name: 'Archives', href: '#work' },
        { name: 'Contact', href: '#contact' }
    ]

    const footerLinks = [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'GitHub', href: 'https://github.com' }
    ]

    // Use pure CSS hover
    const linkClass = "text-sm text-gray-500 hover:text-purple-300 transition-colors duration-300 relative group inline-block"
    const underlineClass = "absolute bottom-0 left-0 h-px bg-gradient-to-r from-purple-500 to-violet-500 w-0 group-hover:w-full transition-all duration-300 ease-out"

    return (
        <footer className="relative bg-black border-t border-purple-500/20">
            {/* Optimized Background - Radial Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none" style={{ background: 'radial-gradient(circle at center top, rgba(147, 51, 234, 0.05) 0%, transparent 60%)' }}></div>

            <div className="section-container py-20 relative z-10">
                <ScrollReveal>
                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-black text-2xl">E</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg opacity-50" style={{ filter: 'none' }}></div>
                                </div>
                                <h3 className="text-2xl font-black tracking-tight text-white">
                                    ENIGMA LABS
                                </h3>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed font-sans">
                                Engineering the unseen, one experiment at a time.
                            </p>
                            <div className="mt-4 h-px w-32 bg-gradient-to-r from-purple-500 to-transparent"></div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-sm font-mono text-purple-400 mb-6 tracking-wide">NAVIGATION</h4>
                            <ul className="space-y-3">
                                {links.map((link, index) => (
                                    <li key={index} className="transform transition-transform duration-300 hover:translate-x-2">
                                        <a href={link.href} className="text-gray-400 hover:text-purple-300 text-sm font-sans block">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Status */}
                        <div>
                            <h4 className="text-sm font-mono text-purple-400 mb-6 tracking-wide">SYSTEM STATUS</h4>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-400 font-sans">All Systems Operational</span>
                            </div>
                            <p className="text-gray-600 text-xs font-mono">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm font-mono tracking-wide">
                        © {currentYear} ENIGMA LABS. ALL SYSTEMS OPERATIONAL.
                    </p>

                    <div className="flex gap-8">
                        {footerLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className={linkClass}
                            >
                                {link.name}
                                <div className={underlineClass}></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </footer>
    )
}

export default Footer
