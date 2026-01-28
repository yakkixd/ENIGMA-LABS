import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { FaFingerprint, FaCogs, FaNetworkWired, FaRocket } from 'react-icons/fa'

const Services = () => {
    const services = [
        {
            title: "Full-Stack Development",
            description: "End-to-end web solutions using modern frameworks. We build performant, secure, and scalable applications from the ground up.",
            icon: <FaNetworkWired className="w-8 h-8" />
        },
        {
            title: "Process Automation",
            description: "Custom scripts and bots designed to eliminate manual workflows. We engineer efficiency into your daily operations.",
            icon: <FaCogs className="w-8 h-8" />
        },
        {
            title: "3D & Interactive Web",
            description: "Next-gen web experiences. We leverage WebGL and Three.js to create immersive, interactive visuals that captivate users.",
            icon: <FaFingerprint className="w-8 h-8" />
        },
        {
            title: "MVP Prototyping",
            description: "Rapid concept-to-code execution. We bring ideas to life quickly, enabling fast validation and iteration.",
            icon: <FaRocket className="w-8 h-8" />
        }
    ]

    return (
        <section id="capabilities" className="relative bg-black border-t border-purple-500/20 py-24">
            <div className="section-container relative z-10">
                <ScrollReveal>
                    <div className="mb-20">
                        <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">// Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                ENGINEERING SERVICES
                            </span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="group p-6 py-8 border-l border-purple-500/20 hover:border-purple-500/60 hover:bg-purple-900/5 transition-all duration-300 h-full">
                                <div className="text-purple-500/60 mb-6 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300 origin-left">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white font-mono">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                                    {service.description}
                                </p>
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

export default Services
