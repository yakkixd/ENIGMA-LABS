import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isMenuOpen
                    ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10'
                    : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="relative flex items-center justify-between h-20">
                        {/* Brand */}
                        <motion.a
                            href="#hero"
                            className="relative group z-50"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <div className="flex items-center gap-3">
                                {/* Logo Icon */}
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                        <img
                                            src="/logo.gif"
                                            alt="Enigma Labs Logo"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 rounded-full border border-purple-500/20 blur-[2px]"></div>
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

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
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

                        {/* Desktop Social Icons */}
                        <div className="hidden md:flex items-center gap-6 z-20">
                            <a
                                href="https://discord.com/users/712273643169644625"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#5865F2] transition-all duration-300 text-xl hover:scale-110"
                            >
                                <FaDiscord />
                            </a>
                            <a
                                href="https://instagram.com/yakki.xd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#E1306C] transition-all duration-300 text-xl hover:scale-110"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/yaksh-kundu-839b03384/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#0077B5] transition-all duration-300 text-xl hover:scale-110"
                            >
                                <FaLinkedin />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden w-10 h-10 flex items-center justify-center text-white z-50 rounded-lg border border-white/10"
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <motion.span
                                    className="w-full h-0.5 bg-white rounded-full origin-left"
                                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? -2 : 0 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-white rounded-full"
                                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-white rounded-full origin-left"
                                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 2 : 0 }}
                                />
                            </div>
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

            {/* Mobile Menu Overlay */}
            <motion.div
                className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            className="text-2xl font-black text-white tracking-tight hover:text-purple-400 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    <motion.div
                        className="flex gap-8 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isMenuOpen ? 1 : 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a href="https://discord.com/users/712273643169644625" className="text-2xl text-gray-400 hover:text-[#5865F2]"><FaDiscord /></a>
                        <a href="https://instagram.com/yakki.xd" className="text-2xl text-gray-400 hover:text-[#E1306C]"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/yaksh-kundu-839b03384/" className="text-2xl text-gray-400 hover:text-[#0077B5]"><FaLinkedin /></a>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default Navbar
