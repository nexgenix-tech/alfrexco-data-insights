
import { useEffect, useRef } from 'react';

interface DataPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const DataAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const dataPoints = useRef<DataPoint[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeDataPoints = () => {
      dataPoints.current = [];
      const numPoints = 50;
      
      for (let i = 0; i < numPoints; i++) {
        dataPoints.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw data points
      dataPoints.current.forEach((point, index) => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 112, 33, ${point.opacity})`;
        ctx.fill();
        
        // Draw connections to nearby points
        dataPoints.current.slice(index + 1).forEach(otherPoint => {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.4;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(243, 112, 33, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      // Draw floating data elements
      ctx.font = '12px Inter';
      ctx.fillStyle = 'rgba(243, 112, 33, 0.6)';
      
      const dataTexts = ['ID: 123456', 'VERIFIED', 'DATA SYNC', '99.9%', 'SECURE', 'BIOMETRICS'];
      dataTexts.forEach((text, i) => {
        const x = (canvas.width / dataTexts.length) * i + Math.sin(Date.now() * 0.001 + i) * 20;
        const y = 50 + Math.cos(Date.now() * 0.001 + i) * 10;
        ctx.fillText(text, x, y);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initializeDataPoints();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initializeDataPoints();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default DataAnimation;
