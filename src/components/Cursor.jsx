import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring physics for main dot
    const dotX = useSpring(cursorX, { stiffness: 1000, damping: 50 });
    const dotY = useSpring(cursorY, { stiffness: 1000, damping: 50 });

    // Slightly delayed spring for trailing ring
    const ringX = useSpring(cursorX, { stiffness: 200, damping: 20 });
    const ringY = useSpring(cursorY, { stiffness: 200, damping: 20 });

    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Check hover status less frequently or use a more efficient check if needed
            // For now, this logic is okay but can be optimized if "lag" persists.
            // Keeping it simple for accurate hover detection.
            const target = e.target;
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isPointer ? 0.5 : 1
                }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-purple-500/40 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isPointer ? 1.5 : 1,
                    borderColor: isPointer ? 'rgba(255, 255, 255, 0.9)' : 'rgba(168, 85, 247, 0.4)',
                    backgroundColor: isPointer ? 'rgba(168, 85, 247, 0.1)' : 'transparent'
                }}
                transition={{ duration: 0.15 }} // Smooth transition for scale/color changes
            />
        </>
    );
};

export default Cursor;
