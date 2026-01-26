import React from 'react';

const About = () => {
    const skills = [
        'React & Vite', 'Tailwind CSS', 'TypeScript', 'Node.js', 'UI/UX Design', 'Performance Optimization'
    ];

    return (
        <section id="about" className="py-32 relative bg-gradient-to-b from-black via-[#0a0a0a] to-black">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        {/* Section Label */}
                        <div className="mb-6 fade-in-up">
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-full text-purple-400 font-mono text-xs tracking-[0.3em] uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <span className="block text-white mb-2">The Anomaly</span>
                            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Behind the Code</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-6 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                            At <span className="text-white font-semibold">Enigma Labs</span>, code meets creativity. As a passionate developer, I specialize in building <span className="text-white font-semibold">unseen horizons</span> and transforming complex problems into elegant, user-centric solutions.
                        </p>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed fade-in-up" style={{ animationDelay: '0.3s' }}>
                            With a background in computer science and a keen eye for detail, I bridge the gap between <span className="text-purple-400">engineering</span> and <span className="text-pink-400">art</span>. Every line of code is written with precision, and every pixel is placed with purpose.
                        </p>

                        {/* Tech Stack */}
                        <div className="space-y-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></span>
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={skill}
                                        className="group relative px-4 py-2 text-sm bg-white/5 border border-gray-800 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 cursor-default hover:scale-105"
                                        style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                                    >
                                        <span className="relative z-10">{skill}</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-lg transition-all duration-300"></div>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="order-1 lg:order-2 relative group fade-in-up">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>

                        {/* Card */}
                        <div className="relative w-full aspect-square bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-gray-800 rounded-3xl overflow-hidden flex items-center justify-center p-8 group-hover:border-purple-500/30 transition-all duration-500">
                            {/* Code Block */}
                            <div className="font-mono text-sm md:text-base text-gray-600 select-none leading-relaxed">
                                <div className="mb-4">
                                    <span className="text-purple-500">&lt;</span>
                                    <span className="text-pink-400">Enigma</span>
                                    <span className="text-purple-500"> /&gt;</span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-gray-700">.init()</span>
                                    <span className="text-gray-600"> &#123;</span>
                                </div>
                                <div className="pl-4 mb-2">
                                    <span className="text-blue-500">creative_vision</span>
                                    <span className="text-gray-600"> = </span>
                                    <span className="text-green-500">true</span>
                                    <span className="text-gray-600">;</span>
                                </div>
                                <div className="pl-4 mb-2">
                                    <span className="text-purple-400">while</span>
                                    <span className="text-gray-600">(</span>
                                    <span className="text-cyan-400">alive</span>
                                    <span className="text-gray-600">) &#123;</span>
                                </div>
                                <div className="pl-8 mb-2">
                                    <span className="text-pink-400">build_future</span>
                                    <span className="text-gray-600">();</span>
                                </div>
                                <div className="pl-4 mb-2">
                                    <span className="text-gray-600">&#125;</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">&#125;</span>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
