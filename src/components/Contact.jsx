import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="mb-6 fade-in-up">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-full text-blue-400 font-mono text-xs tracking-[0.3em] uppercase">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <span className="block text-white mb-2">Initialize</span>
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Connection</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Have a project in mind or just want to explore the unknown? Drop a signal and let's create something <span className="text-white font-semibold">extraordinary</span>.
                    </p>
                </div>

                {/* Contact Form */}
                <form className="glass-panel p-8 md:p-12 rounded-3xl shadow-2xl border-gray-800 fade-in-up" style={{ animationDelay: '0.3s' }} onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name Input */}
                        <div className="group">
                            <label htmlFor="name" className="block text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-3">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-black/50 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-gray-700"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="group">
                            <label htmlFor="email" className="block text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-3">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-black/50 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:border-gray-700"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="mb-8 group">
                        <label htmlFor="message" className="block text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-3">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="w-full bg-black/50 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none hover:border-gray-700"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="group relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black uppercase tracking-[0.2em] text-sm"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Transmit Message
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </form>

                {/* Social Links */}
                <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <p className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-6">Or connect via</p>
                    <div className="flex justify-center gap-6">
                        <a href="#" className="group flex items-center justify-center w-12 h-12 bg-white/5 border border-gray-800 rounded-full hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black" aria-label="Twitter">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a href="#" className="group flex items-center justify-center w-12 h-12 bg-white/5 border border-gray-800 rounded-full hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black" aria-label="GitHub">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="#" className="group flex items-center justify-center w-12 h-12 bg-white/5 border border-gray-800 rounded-full hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black" aria-label="LinkedIn">
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
