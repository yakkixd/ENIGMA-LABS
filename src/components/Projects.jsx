import React from 'react';

const projects = [
    {
        title: 'Neon Commerce',
        description: 'A futuristic e-commerce platform built with Next.js and Stripe integration.',
        tags: ['Next.js', 'Stripe', 'Tailwind'],
        link: '#',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Cyber Dashboard',
        description: 'Real-time data visualization dashboard for crypto analytics.',
        tags: ['React', 'D3.js', 'WebSocket'],
        link: '#',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Void Chat',
        description: 'End-to-end encrypted messaging designed for privacy and speed.',
        tags: ['Socket.io', 'Node.js', 'MongoDB'],
        link: '#',
        gradient: 'from-cyan-500 to-blue-500'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="mb-6 fade-in-up">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-full text-blue-400 font-mono text-xs tracking-[0.3em] uppercase">
                            Portfolio
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <span className="block text-white mb-2">Selected</span>
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl fade-in-up" style={{ animationDelay: '0.2s' }}>
                        A curated collection of projects that showcase innovation, creativity, and technical excellence.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative fade-in-up"
                            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                        >
                            {/* Gradient Border Glow */}
                            <div className={`absolute -inset-[1px] bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`}></div>

                            {/* Card */}
                            <div className="relative h-full bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-transparent transition-all duration-500 flex flex-col group-hover:scale-[1.02] group-hover:shadow-2xl">
                                {/* Project Number */}
                                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-white/10 transition-all duration-500">
                                    0{index + 1}
                                </div>

                                {/* Content */}
                                <div className="relative z-10 mb-6">
                                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono text-gray-500 bg-white/5 border border-gray-800 px-3 py-1 rounded-full group-hover:border-gray-700 group-hover:text-gray-400 transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={project.link}
                                    className={`inline-flex items-center text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-300 group/link focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-sm`}
                                >
                                    View Project
                                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects CTA */}
                <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold text-sm rounded-full border border-white/10 hover:border-blue-500/50 hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                    >
                        <span>View All Projects</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
