import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(onLoadingComplete, 600)
                    return 100
                }
                // Smooth, consistent increment
                return prev + 2
            })
        }, 30)

        return () => clearInterval(timer)
    }, [onLoadingComplete])

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
        >
            <div className="w-64 relative">
                {/* Minimal Logo / Text */}
                <div className="flex justify-between items-end mb-4">
                    <span className="text-white font-bold tracking-tight text-lg">ENIGMA LABS</span>
                    <span className="text-gray-500 font-mono text-xs">{progress}%</span>
                </div>

                {/* Ultra-thin Background Line */}
                <div className="h-[1px] w-full bg-gray-800 rounded-full overflow-hidden">
                    {/* Progress Fill */}
                    <motion.div
                        className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Loader
