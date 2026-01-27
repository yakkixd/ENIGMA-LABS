import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { FaCode, FaBolt, FaPalette, FaChartPie, FaDatabase, FaTerminal } from 'react-icons/fa'

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <FaCode className="w-full h-full p-2" />,
            skills: ["Python", "JavaScript", "HTML5", "CSS3"],
            color: "purple"
        },
        {
            title: "Frameworks",
            icon: <FaBolt className="w-full h-full p-2" />,
            skills: ["React", "Three.js", "Node.js", "FastAPI", "Tailwind CSS"],
            color: "violet"
        },
        {
            title: "Design",
            icon: <FaPalette className="w-full h-full p-2" />,
            skills: ["Figma", "Canva"],
            color: "purple"
        },
        {
            title: "Data Science",
            icon: <FaChartPie className="w-full h-full p-2" />,
            skills: ["NumPy", "Matplotlib"],
            color: "violet"
        },
        {
            title: "Databases",
            icon: <FaDatabase className="w-full h-full p-2" />,
            skills: ["MySQL", "PostgreSQL", "MongoDB"],
            color: "purple"
        },
        {
            title: "DevOps & Tools",
            icon: <FaTerminal className="w-full h-full p-2" />,
            skills: ["GitHub", "Git", "Vercel", "Vite", "Selenium", "FlutterFlow"],
            color: "violet"
        }
    ]

    return (
        <section id="armory" className="relative bg-black border-t border-purple-500/20">
            {/* Optimized Background Elements (Radial Gradients instead of Blurs) */}
            <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)' }}></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)' }}></div>

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="mb-20 text-center">
                        <div className="inline-block mb-4 transform hover:scale-105 transition-transform duration-300">
                            <span className="text-purple-400 font-sans text-sm tracking-widest uppercase">// Tech Stack</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                THE ARMORY
                            </span>
                        </h2>
                        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 rounded-full"></div>
                        <p className="text-sm text-gray-400 mt-6 font-sans">
                            Technologies and tools we wield to build the future
                        </p>
                    </div>
                </ScrollReveal>

                {/* Skill Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <ScrollReveal key={index} delay={index * 0.05} className="h-full">
                            <div className="group relative h-full hover:-translate-y-2 transition-transform duration-300 ease-out">
                                {/* Card */}
                                <div className="relative h-full bg-purple-900/5 border border-purple-500/20 rounded-2xl p-8 overflow-hidden transition-colors duration-300 group-hover:bg-purple-900/10">
                                    {/* Top gradient line */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color === 'purple' ? 'from-purple-600 to-violet-600' : 'from-violet-600 to-purple-600'}`}></div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 mb-6 text-purple-400 transform group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300 origin-left">
                                        {category.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-6 tracking-tight text-white group-hover:text-purple-200 transition-colors duration-300">
                                        {category.title}
                                    </h3>

                                    {/* Skills */}
                                    <div className="space-y-3">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="flex items-center gap-3 text-gray-300 group-hover:text-purple-200 transition-colors duration-300"
                                            >
                                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></div>
                                                <span className="font-sans text-base">{skill}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Corner accent - Optimized opacity opacity */}
                                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity"></div>
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

export default Skills
