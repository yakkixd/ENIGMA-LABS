import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CYBER_CHARS = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛈᛇᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ"; // Runic / Enchanting Glyph set

const GlitchedButton = ({ text, href, onClick, variant = 'primary', className = '' }) => {
    // variant: 'primary' | 'outline' | 'ghost' | 'white'
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const onMouseEnter = () => {
        let iteration = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 20); // Changed from 30 to 20 for faster animation
    };

    const onMouseLeave = () => {
        clearInterval(intervalRef.current);
        setDisplayText(text);
    };

    const baseStyles = "relative px-8 py-3.5 font-mono text-sm font-bold tracking-wider uppercase overflow-hidden transition-all duration-300 group";

    // Tailwind classes for variants
    const variants = {
        primary: "bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 hover:scale-[1.02]",
        white: "bg-white text-black border border-white rounded-lg hover:bg-gray-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)]",
        outline: "bg-transparent border border-purple-500/50 text-purple-300 rounded-lg hover:bg-purple-500/10 hover:border-purple-500 hover:text-white hover:scale-[1.02]",
        ghost: "bg-transparent text-gray-400 hover:text-white"
    };

    const Component = href ? motion.a : motion.button;
    // Don't pass `onClick` if it's undefined, to avoid issues? No, standard HTML allows undefined.

    // Props for the component
    const props = {
        className: `${baseStyles} ${variants[variant]} ${className}`,
        onMouseEnter,
        onMouseLeave,
        initial: { opacity: 0.9 },
        whileTap: { scale: 0.98 },
    };

    if (href) {
        props.href = href;
    } else {
        props.onClick = onClick;
    }

    return (
        <Component {...props}>
            {/* Background shine effect for primary/white */}
            {(variant === 'primary' || variant === 'white') && (
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12 z-0" />
            )}

            {/* Corner Markers for outline */}
            {variant === 'outline' && (
                <>
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 group-hover:border-white/50 transition-all duration-300" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 group-hover:border-white/50 transition-all duration-300" />
                </>
            )}

            {/* Enchantment Glint - Minecraft Style */}
            <motion.div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-hard-light"
                style={{
                    background: 'linear-gradient(105deg, transparent 20%, rgba(168, 85, 247, 0.4) 40%, rgba(236, 72, 153, 0.4) 45%, rgba(168, 85, 247, 0.4) 50%, transparent 70%)',
                    backgroundSize: '200% 100%'
                }}
                animate={{
                    backgroundPosition: ['200% 0', '-200% 0']
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <span className="relative z-10 flex items-center justify-center gap-2">
                {displayText}
                {/* Optional: Add a small icon or glyph if needed, but text scramble is cleaner alone or with icon prop */}
            </span>
        </Component>
    );
};

export default GlitchedButton;
