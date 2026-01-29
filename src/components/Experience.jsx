import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa'

const Experience = () => {
    const timeline = [
        {
            year: "2024 - PRESENT",
            title: "Senior Creative Engineer",
            org: "TechFlow Dynamics",
            description: "Leading a squad of 5 developers building immersive 3D web experiences for Fortune 500 clients. Optimized rendering pipelines to achieve 98/100 Lighthouse performance scores.",
            type: "work"
        },
        {
            year: "2022 - 2024",
            title: "Full Stack Developer",
            org: "Nexus Systems",
            description: "Architected and deployed a microservices-based e-commerce platform handling 50k+ daily transactions. Reduced server costs by 40% through serverless migration.",
            type: "work"
        },
        {
            year: "2021",
            title: "Hackathon Winner",
            org: "Global AI Summit",
            description: "Secured 1st place out of 500+ teams by developing a real-time sign language translation tool using TensorFlow.js and WebGL.",
            type: "award"
        },
        {
            year: "2018 - 2022",
            title: "B.Tech in Computer Science",
            org: "Institute of Technology",
            description: "Graduated with Honors. Specialized in Artificial Intelligence and Distributed Systems. Lead organizer of the annual tech fest.",
            type: "education"
        }
    ]

    return (
        <section id="trajectory" className="relative bg-black border-t border-purple-500/20 py-24">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/5 to-transparent pointer-events-none"></div>

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="mb-20">
                        <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">// Career Data</span>
                        <h2 className="text-5xl md:text-6xl font-black mt-4 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                TRAJECTORY
                            </span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 rounded-full mt-6"></div>
                    </div>
                </ScrollReveal>

                <div className="relative border-l-2 border-purple-500/20 ml-4 md:ml-10 space-y-16">
                    {timeline.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="relative pl-8 md:pl-16 group">
                                {/* Timeline Node */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-purple-500 rounded-full group-hover:bg-purple-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                                {/* Content Card */}
                                <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-purple-400 text-xl">
                                                {item.type === 'work' ? <FaBriefcase /> : item.type === 'education' ? <FaGraduationCap /> : <FaAward />}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                                        </div>
                                        <span className="font-mono text-xs text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                            {item.year}
                                        </span>
                                    </div>

                                    <div className="text-purple-400/80 font-mono text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
                                        <span>@ {item.org}</span>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base font-sans">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Bottom section divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </section>
    )
}

export default Experience
