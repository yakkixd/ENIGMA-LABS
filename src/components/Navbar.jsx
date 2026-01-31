import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Vision', href: '#manifesto' },
        { name: 'Education', href: '#education' },
        { name: 'Armory', href: '#armory' },
        { name: 'Archives', href: '#work' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10'
                : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Brand */}
                    <motion.a
                        href="#hero"
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex items-center gap-3">
                            {/* Logo Icon */}
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-black text-xl">E</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Brand Name */}
                            <div>
                                <h1 className="text-xl font-black tracking-tight text-white">
                                    ENIGMA LABS
                                </h1>
                                <div className="h-px bg-gradient-to-r from-purple-500 to-transparent w-0 group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        className="hidden md:block relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-lg overflow-hidden group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Get In Touch</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden w-10 h-10 flex items-center justify-center text-white"
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Glow effect on scroll */}
            {scrolled && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                ></motion.div>
            )}
        </motion.nav>
    )
}

export default Navbar
