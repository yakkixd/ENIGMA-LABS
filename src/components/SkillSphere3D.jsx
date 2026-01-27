import { motion } from 'framer-motion'
import { useState } from 'react'

const SkillSphere3D = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null)

    const skills = [
        // Core
        { name: 'Python', category: 'core', color: 'from-purple-600 to-violet-600' },
        { name: 'JavaScript', category: 'core', color: 'from-violet-600 to-purple-600' },
        { name: 'HTML5', category: 'core', color: 'from-purple-500 to-violet-500' },
        { name: 'CSS3', category: 'core', color: 'from-violet-500 to-purple-500' },
        { name: 'React', category: 'core', color: 'from-purple-600 to-violet-600' },

        // Frameworks
        { name: 'Three.js', category: 'framework', color: 'from-violet-600 to-purple-600' },
        { name: 'Vite', category: 'framework', color: 'from-purple-500 to-violet-500' },
        { name: 'Tailwind', category: 'framework', color: 'from-violet-500 to-purple-500' },
        { name: 'Node.js', category: 'framework', color: 'from-purple-600 to-violet-600' },
        { name: 'FastAPI', category: 'framework', color: 'from-violet-600 to-purple-600' },

        // Design
        { name: 'Figma', category: 'design', color: 'from-purple-500 to-violet-500' },
        { name: 'Canva', category: 'design', color: 'from-violet-500 to-purple-500' },

        // Backend/Data
        { name: 'NumPy', category: 'data', color: 'from-purple-600 to-violet-600' },
        { name: 'Matplotlib', category: 'data', color: 'from-violet-600 to-purple-600' },
        { name: 'MySQL', category: 'database', color: 'from-purple-500 to-violet-500' },
        { name: 'PostgreSQL', category: 'database', color: 'from-violet-500 to-purple-500' },
        { name: 'MongoDB', category: 'database', color: 'from-purple-600 to-violet-600' },

        // Tools
        { name: 'GitHub', category: 'tools', color: 'from-violet-600 to-purple-600' },
        { name: 'FlutterFlow', category: 'tools', color: 'from-purple-500 to-violet-500' },
        { name: 'Vercel', category: 'tools', color: 'from-violet-500 to-purple-500' },
        { name: 'Selenium', category: 'tools', color: 'from-purple-600 to-violet-600' },
        { name: 'Git', category: 'tools', color: 'from-violet-600 to-purple-600' },
    ]

    // Circular positioning
    const getPosition = (index, total) => {
        const layers = 4
        const layer = Math.floor(index / (total / layers))
        const itemsInLayer = Math.ceil(total / layers)
        const angleStep = (2 * Math.PI) / itemsInLayer
        const angle = (index % itemsInLayer) * angleStep
        const radius = 35 + layer * 12

        return {
            x: 50 + radius * Math.cos(angle),
            y: 50 + radius * Math.sin(angle)
        }
    }

    return (
        <div className="w-full h-[600px] relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/5 to-violet-900/10 border border-purple-500/20">
            {/* Instructions */}
            <div className="absolute top-4 left-4 z-10 text-xs text-purple-300 font-mono">
                <p>Hover to explore • Interactive skill constellation</p>
            </div>

            {/* Animated background circles */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-purple-500/10"
                        style={{
                            width: `${(i + 1) * 25}%`,
                            height: `${(i + 1) * 25}%`,
                        }}
                        animate={{
                            rotate: 360,
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            rotate: {
                                duration: 30 + i * 10,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            scale: {
                                duration: 3 + i,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    />
                ))}

                {/* Center glow */}
                <div className="absolute w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>

            {/* Skills constellation */}
            <div className="absolute inset-0">
                <svg className="w-full h-full">
                    {/* Connection lines */}
                    {skills.map((skill, i) => {
                        const pos1 = getPosition(i, skills.length)
                        return skills.slice(i + 1, i + 4).map((_, j) => {
                            const pos2 = getPosition(i + j + 1, skills.length)
                            return (
                                <motion.line
                                    key={`${i}-${j}`}
                                    x1={`${pos1.x}%`}
                                    y1={`${pos1.y}%`}
                                    x2={`${pos2.x}%`}
                                    y2={`${pos2.y}%`}
                                    stroke="url(#lineGradient)"
                                    strokeWidth="1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredSkill === i || hoveredSkill === i + j + 1 ? 0.3 : 0.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )
                        })
                    })}

                    {/* Gradient definition */}
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.5" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Skill nodes */}
                {skills.map((skill, index) => {
                    const pos = getPosition(index, skills.length)
                    return (
                        <motion.div
                            key={index}
                            className="absolute"
                            style={{
                                left: `${pos.x}%`,
                                top: `${pos.y}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.03, duration: 0.5 }}
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <motion.div
                                className={`relative px-4 py-2 bg-gradient-to-r ${skill.color} rounded-full cursor-pointer`}
                                whileHover={{ scale: 1.2, zIndex: 50 }}
                                animate={{
                                    opacity: hoveredSkill === null || hoveredSkill === index ? 1 : 0.4,
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-white text-xs font-mono font-semibold whitespace-nowrap">
                                    {skill.name}
                                </span>

                                {/* Glow effect */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-md -z-10`}
                                    animate={{
                                        opacity: hoveredSkill === index ? 0.8 : 0.3
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            {/* Pulsing ring on hover */}
                            {hoveredSkill === index && (
                                <motion.div
                                    className="absolute inset-0 border-2 border-purple-400 rounded-full"
                                    initial={{ scale: 1, opacity: 1 }}
                                    animate={{ scale: 1.5, opacity: 0 }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            )}
                        </motion.div>
                    )
                })}
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>
        </div>
    )
}

export default SkillSphere3D
