import React, { useEffect, useRef, useState } from 'react';

interface Point {
    x: number;
    y: number;
    age: number;
}

const CursorTrail: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Detect touch device
        setIsTouch('ontouchstart' in window);
        if ('ontouchstart' in window) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Add new point
            pointsRef.current.push({
                x: e.clientX,
                y: e.clientY,
                age: 0
            });

            // Limit points
            if (pointsRef.current.length > 50) {
                pointsRef.current.shift();
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw points
            pointsRef.current = pointsRef.current.filter(point => {
                point.age += 1;
                const maxAge = 30;

                if (point.age > maxAge) return false;

                const progress = point.age / maxAge;
                const opacity = (1 - progress) * 0.6;
                const size = (1 - progress) * 8 + 2;

                // Golden gradient particle
                const gradient = ctx.createRadialGradient(
                    point.x, point.y, 0,
                    point.x, point.y, size
                );
                gradient.addColorStop(0, `rgba(212, 175, 55, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(212, 175, 55, ${opacity * 0.5})`);
                gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                ctx.fill();

                return true;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Don't render on touch devices
    if (isTouch) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[200]"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default CursorTrail;
