import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { FaUniversity, FaTrophy, FaCertificate, FaGithubAlt } from 'react-icons/fa'

const Credentials = () => {
    const credentials = [
        {
            category: "Education",
            title: "B.Tech Computer Science",
            org: "Institute of Technical Studies",
            date: "2022 - 2026 (Expected)",
            description: "Specializing in Distributed Systems & AI. CGPA: 9.2/10.0",
            icon: <FaUniversity className="w-6 h-6" />,
            status: "In Progress",
            color: "purple"
        },
        {
            category: "Recognition",
            title: "National Hackathon Winner",
            org: "Smart India Hackathon",
            date: "2024",
            description: "Secured 1st rank building an AI-driven disaster management system.",
            icon: <FaTrophy className="w-6 h-6" />,
            status: "Verified",
            color: "yellow"
        },
        {
            category: "Certification",
            title: "AWS Certified Developer",
            org: "Amazon Web Services",
            date: "Issued 2023",
            description: "Associate level certification for cloud architecture and serverless deployment.",
            icon: <FaCertificate className="w-6 h-6" />,
            status: "Active",
            color: "blue"
        },
        {
            category: "Open Source",
            title: "Core Contributor",
            org: "GitHub Community",
            date: "Ongoing",
            description: "Active maintainer of 3 utility libraries with 500+ combined stars.",
            icon: <FaGithubAlt className="w-6 h-6" />,
            status: "Top 1%",
            color: "green"
        }
    ]

    return (
        <section id="credentials" className="relative bg-black border-t border-purple-500/20 py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="mb-20 text-center">
                        <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">// Qualifications</span>
                        <h2 className="text-5xl md:text-6xl font-black mt-4 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                ACCREDITATIONS
                            </span>
                        </h2>
                        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 rounded-full mt-6"></div>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-6">
                    {credentials.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="group relative h-full">
                                {/* Border Gradient Animation */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 blur-sm group-hover:blur-md"></div>

                                {/* Card Content */}
                                <div className="relative bg-black h-full rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-colors duration-300">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-purple-900/20 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-purple-400 font-mono text-xs uppercase tracking-wider mb-1">{item.category}</h4>
                                                <h3 className="text-xl font-bold text-white leading-tight">{item.title}</h3>
                                            </div>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-mono border ${item.color === 'green' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                item.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                                    'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-sm text-gray-500 font-mono border-b border-white/5 pb-4">
                                            <span>{item.org}</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed font-sans text-sm">
                                            {item.description}
                                        </p>
                                    </div>
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

export default Credentials
