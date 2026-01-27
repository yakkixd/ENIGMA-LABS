import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const Projects = () => {
    const projects = [
        {
            title: "Enigma Foods",
            description: "Next-gen food delivery ecosystem featuring a Per-User Demand Suggestion Engine.",
            tags: ["React", "Node.js", "AI/ML"],
            status: "Active",
            color: "purple"
        },
        {
            title: "xFected Selfbot",
            description: "A high-utility automation suite for Discord power users with advanced command handling.",
            tags: ["Python", "Discord API", "Automation"],
            status: "Active",
            color: "violet"
        },
        {
            title: "Epic Gen V1",
            description: "High-velocity account generation tool utilizing headless browser automation.",
            tags: ["Python", "Selenium", "Automation"],
            status: "Archived",
            color: "purple"
        },
        {
            title: "Academic Data Parser",
            description: "Precision frontend replication and data parsing tool for academic datasets.",
            tags: ["React", "Web Scraping", "UI Clone"],
            status: "Active",
            color: "violet"
        },
        {
            title: "API Load Tester",
            description: "High-concurrency network utility designed to stress-test API endpoints.",
            tags: ["Python", "Performance", "Testing"],
            status: "Active",
            color: "purple"
        },
        {
            title: "Cipher Pay",
            description: "Decentralized transaction handler built for secure crypto payments.",
            tags: ["Blockchain", "Crypto", "Security"],
            status: "In Development",
            color: "violet"
        }
    ]

    return (
        <section id="work" className="relative bg-black border-t border-purple-500/20">
            {/* Optimized Background - Radial Gradient instead of Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96" style={{ background: 'radial-gradient(circle at center top, rgba(147, 51, 234, 0.1) 0%, transparent 60%)' }}></div>

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="mb-20 text-center">
                        <div className="inline-block mb-4 transition-transform hover:scale-105 duration-300">
                            <span className="text-purple-400 font-sans text-sm tracking-widest uppercase">// Portfolio</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                ARCHIVES
                            </span>
                        </h2>
                        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 rounded-full"></div>
                        <p className="text-sm text-gray-400 mt-6 font-sans">
                            Experiments, tools, and applications we've engineered
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Bottom section divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </section>
    )
}

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    const statusColors = {
        'Active': 'from-green-500 to-emerald-500',
        'In Development': 'from-blue-500 to-cyan-500',
        'Archived': 'from-gray-500 to-gray-600'
    }

    return (
        <ScrollReveal delay={index * 0.05}>
            <div
                className="relative group h-full transition-transform duration-300 ease-out hover:-translate-y-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Card container */}
                <div className="relative h-full bg-purple-900/5 border border-purple-500/20 rounded-2xl p-8 overflow-hidden flex flex-col transition-colors duration-300 hover:bg-purple-900/10">
                    {/* Animated top border - CSS Transition */}
                    <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color === 'purple' ? 'from-purple-600 to-violet-600' : 'from-violet-600 to-purple-600'} transition-all duration-300 ease-out`}
                        style={{
                            width: isHovered ? '100%' : '0%',
                            opacity: isHovered ? 1 : 0
                        }}
                    ></div>

                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${statusColors[project.status]} ${isHovered ? 'animate-pulse' : ''}`}></div>
                            <span className="text-xs font-sans text-gray-500 tracking-wide">
                                {project.status}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-purple-200 transition-colors duration-200 relative z-10">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 group-hover:text-gray-300 mb-6 leading-relaxed text-sm flex-grow relative z-10 font-sans transition-colors duration-200">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                        {project.tags.map((tag, tagIndex) => (
                            <span
                                key={tagIndex}
                                className="px-3 py-1.5 bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-sans rounded-lg"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Corner accent - GPU optimized */}
                    <div
                        className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-tl-full transition-opacity duration-300 will-change-opacity"
                        style={{ opacity: isHovered ? 1 : 0 }}
                    />
                </div>
            </div>
        </ScrollReveal>
    )
}

export default Projects
