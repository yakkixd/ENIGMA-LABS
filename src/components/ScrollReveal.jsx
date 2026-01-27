import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    return (
        <div ref={ref} className={className}>
            <div
                style={{
                    transform: isInView ? 'none' : 'translateY(40px)',
                    opacity: isInView ? 1 : 0,
                    transition: `all 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s`,
                    willChange: 'transform, opacity' // Critical for 120 FPS
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default ScrollReveal
