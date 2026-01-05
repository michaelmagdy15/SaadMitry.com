import React, { useEffect, useRef } from 'react';

const DustBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            speedX: number;
            opacity: number;
            shimmerOffset: number;
            isGolden: boolean;
            glowSize: number;

            constructor() {
                this.x = Math.random() * (canvas?.width || 0);
                this.y = Math.random() * (canvas?.height || 0);
                this.size = Math.random() * 3 + 0.5;
                this.speedY = -(Math.random() * 0.4 + 0.1); // Ascending motion
                this.speedX = Math.random() * 0.3 - 0.15; // Gentle horizontal drift
                this.opacity = Math.random() * 0.5 + 0.2;
                this.shimmerOffset = Math.random() * Math.PI * 2;
                this.isGolden = Math.random() > 0.3; // 70% golden particles
                this.glowSize = this.size * (2 + Math.random() * 2);
            }

            update(time: number) {
                if (!canvas) return;

                // Ascending motion with gentle wave
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(time * 0.001 + this.shimmerOffset) * 0.1;

                // Reset at top
                if (this.y < -10) {
                    this.y = canvas.height + 10;
                    this.x = Math.random() * canvas.width;
                }

                // Wrap horizontally
                if (this.x > canvas.width + 10) this.x = -10;
                if (this.x < -10) this.x = canvas.width + 10;
            }

            draw(ctx: CanvasRenderingContext2D, time: number) {
                // Shimmer effect - oscillating opacity
                const shimmer = Math.sin(time * 0.003 + this.shimmerOffset) * 0.3 + 0.7;
                const currentOpacity = this.opacity * shimmer;

                if (this.isGolden) {
                    // Golden glow effect
                    const gradient = ctx.createRadialGradient(
                        this.x, this.y, 0,
                        this.x, this.y, this.glowSize
                    );
                    gradient.addColorStop(0, `rgba(212, 175, 55, ${currentOpacity})`);
                    gradient.addColorStop(0.4, `rgba(212, 175, 55, ${currentOpacity * 0.4})`);
                    gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);

                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2);
                    ctx.fill();

                    // Bright core
                    ctx.fillStyle = `rgba(255, 230, 150, ${currentOpacity * 0.8})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    // Traditional sand-colored dust
                    ctx.fillStyle = `rgba(244, 241, 234, ${currentOpacity * 0.5})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 8000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            time++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update(time);
                particle.draw(ctx, time);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-60"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default DustBackground;
