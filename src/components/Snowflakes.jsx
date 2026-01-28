import { memo } from 'react'

const Snowflakes = () => {
    // Create a fixed set of snowflakes to avoid re-renders
    const snowflakes = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.1,
        size: Math.random() * 3 + 1 + 'px'
    }))

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden" aria-hidden="true">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute bg-white rounded-full mix-blend-screen"
                    style={{
                        left: flake.left,
                        top: '-10px',
                        width: flake.size,
                        height: flake.size,
                        opacity: flake.opacity * 1.5, // Boost opacity
                        animation: `snowfall ${flake.animationDuration} linear infinite`,
                        animationDelay: flake.animationDelay,
                        willChange: 'transform'
                    }}
                />
            ))}
            <style>{`
                @keyframes snowfall {
                    0% { transform: translate3d(0, -10px, 0); }
                    100% { transform: translate3d(0, 100vh, 0); }
                }
            `}</style>
        </div>
    )
}

export default memo(Snowflakes)
