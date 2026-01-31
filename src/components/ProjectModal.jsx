import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProjectModal = ({ project, onClose }) => {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                {/* Backdrop - Optimized: No blur on entry, just opacity */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/90"
                    onClick={onClose}
                />

                {/* Modal Content - Scale & Fade */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full max-w-2xl bg-black border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 z-10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header Image / Gradient */}
                    <div className="h-32 bg-gradient-to-r from-purple-900/40 to-violet-900/40 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]" />

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur border border-white/10 rounded-full text-xs font-mono text-white">
                            STATUS: {project.status.toUpperCase()}
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-2 text-purple-400 font-mono text-xs tracking-wider">
                            <FaTerminal className="w-3 h-3" />
                            <span>PROJECT ID: {project.title.replace(/\s+/g, '_').toUpperCase()}_01</span>
                        </div>

                        <h2 className="text-3xl font-black text-white mb-4 tracking-tight">{project.title}</h2>

                        <p className="text-gray-300 leading-relaxed mb-8 font-light">
                            {project.description}
                            <br /><br />
                            <span className="text-gray-500 text-sm">
                                System architecture designed for scalability and fault tolerance.
                                Implemented utilizing modern engineering principles to ensure optimal performance.
                            </span>
                        </p>

                        {/* Tech Stack Grid */}
                        <div className="mb-8 p-4 bg-purple-900/5 rounded-xl border border-purple-500/10">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tech Matrix</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <Link
                                to={project.links?.demo || "#"}
                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold text-sm transition-all hover:scale-[1.02]"
                            >
                                <FaExternalLinkAlt /> LIVE DEMO
                            </Link>
                            <Link
                                to={project.links?.code || "#"}
                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold text-sm transition-all"
                            >
                                <FaGithub /> SOURCE CODE
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default ProjectModal
