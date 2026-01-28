import { useRef, useEffect } from 'react';

const WeatherSystem = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrame;

        let width, height;
        let drops = [];
        let splashes = [];

        // Configuration
        const rainCount = 100;
        const rainSpeed = 15;
        const splashDuration = 20;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            drops = [];
            for (let i = 0; i < rainCount; i++) {
                addDrop();
            }
        };

        const addDrop = () => {
            drops.push({
                x: Math.random() * width,
                y: Math.random() * height,
                length: Math.random() * 20 + 10,
                speed: Math.random() * 10 + rainSpeed,
                opacity: Math.random() * 0.5 + 0.1
            });
        };

        const createSplash = (x, y) => {
            // Create multiple particles for a splash
            for (let i = 0; i < 5; i++) {
                splashes.push({
                    x: x,
                    y: y,
                    vx: (Math.random() - 0.5) * 4,
                    vy: (Math.random() - 1) * 4,
                    life: splashDuration,
                    maxLife: splashDuration,
                    size: Math.random() * 2
                });
            }
        };

        const update = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Rain
            ctx.strokeStyle = 'rgba(174, 126, 230, 0.4)'; // Light purple rain
            ctx.lineWidth = 1;

            drops.forEach(drop => {
                // Update position
                drop.y += drop.speed;

                // Reset if falls off screen
                if (drop.y > height) {
                    drop.y = -drop.length;
                    drop.x = Math.random() * width;
                    // Chance to create a random splash at bottom
                    if (Math.random() > 0.9) createSplash(drop.x, height);
                }

                // Draw drop
                ctx.beginPath();
                ctx.moveTo(drop.x, drop.y);
                ctx.lineTo(drop.x, drop.y + drop.length);
                ctx.stroke();
            });

            // Update & Draw Splashes
            for (let i = splashes.length - 1; i >= 0; i--) {
                let s = splashes[i];
                s.x += s.vx;
                s.y += s.vy;
                s.vy += 0.2; // Gravity
                s.life--;

                if (s.life <= 0) {
                    splashes.splice(i, 1);
                    continue;
                }

                const opacity = s.life / s.maxLife;
                ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrame = requestAnimationFrame(update);
        };

        // Click interaction for splash
        const handleClick = (e) => {
            createSplash(e.clientX, e.clientY);
            createSplash(e.clientX, e.clientY);
            createSplash(e.clientX, e.clientY);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('click', handleClick);

        resize();
        update();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('click', handleClick);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50 mix-blend-screen opacity-60"
        />
    );
};

export default WeatherSystem;
