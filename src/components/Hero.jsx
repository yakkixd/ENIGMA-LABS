import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>

            <div className="container mx-auto px-6 z-10 text-center relative">
                {/* Overline */}
                <div className="fade-in-up mb-6">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-full text-blue-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase backdrop-blur-sm">
                        Digital Experiences
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter mb-8 fade-in-up leading-none" style={{ animationDelay: '0.1s' }}>
                    <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(255,255,255,0.1)]">
                        ENIGMA
                    </span>
                    <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(59,130,246,0.5)]">
                        LABS
                    </span>
                </h1>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
                    Crafting <span className="text-white font-medium">futuristic interfaces</span> and <span className="text-white font-medium">high-performance web applications</span> that push the boundaries of digital design.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-white text-black font-bold text-sm md:text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto"
                    >
                        <span className="relative z-10">View Projects</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold text-sm md:text-base rounded-full border border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto"
                    >
                        <span className="relative z-10">Get In Touch</span>
                    </a>
                </div>

                {/* Stats or Features */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">10+</div>
                        <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center border-x border-white/5">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">5+</div>
                        <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Years Exp</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">100%</div>
                        <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Satisfaction</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                aria-label="Scroll to about section"
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Scroll</span>
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
            </a>
        </section>
    );
};

export default Hero;
