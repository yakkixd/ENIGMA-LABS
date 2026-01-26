import React from 'react';

const Footer = () => {
    return (
        <footer className="relative py-12 border-t border-white/5 bg-black/80 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <div className="text-gray-500 text-sm font-mono order-2 md:order-1">
                        © {new Date().getFullYear()} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">ENIGMA LABS</span>. All systems operational.
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-8 order-1 md:order-2">
                        <a href="#" className="text-gray-500 hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:scale-110 focus:outline-none focus:text-blue-400">
                            Twitter
                        </a>
                        <a href="#" className="text-gray-500 hover:text-purple-400 transition-all duration-300 text-sm font-medium hover:scale-110 focus:outline-none focus:text-purple-400">
                            GitHub
                        </a>
                        <a href="#" className="text-gray-500 hover:text-pink-400 transition-all duration-300 text-sm font-medium hover:scale-110 focus:outline-none focus:text-pink-400">
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Back to Top */}
                <div className="mt-8 text-center">
                    <a
                        href="#hero"
                        className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-gray-400 transition-all duration-300 font-mono uppercase tracking-widest group focus:outline-none focus:text-gray-400"
                    >
                        <span>Back to Top</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
