import { useEffect, useRef, useCallback, useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
}

interface Connection {
  from: Particle;
  to: Particle;
  opacity: number;
}

export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const lastMouseMoveRef = useRef(0);

  // Configuration constants
  const config = useMemo(() => ({
    cols: 100,
    rows: 50,
    maxDistance: 30,
    maxInfluence: 280,
    pushStrength: 30,
    particleSize: 5,
    connectionOpacity: 0.15,
    particleOpacity: 0.3,
    mouseMoveThrottle: 16, // ~60fps
    springBack: 0.1,
    friction: 0.85,
  }), []);



  // Initialize particles
  const initializeParticles = useCallback(() => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const particles: Particle[] = [];
    
    const spacingX = rect.width / (config.cols + 1);
    const spacingY = rect.height / (config.rows + 1);

    // Create particles in a grid
    for (let row = 0; row < config.rows; row++) {
      for (let col = 0; col < config.cols; col++) {
        const x = (col + 1) * spacingX + (Math.random() - 0.5) * 10;
        const y = (row + 1) * spacingY + (Math.random() - 0.5) * 10;
        
        particles.push({
          id: row * config.cols + col,
          x,
          y,
          originalX: x,
          originalY: y,
          vx: 0,
          vy: 0,
        });
      }
    }

    particlesRef.current = particles;

    // Create grid-based connections
    const connections: Connection[] = [];

    for (let row = 0; row < config.rows; row++) {
      for (let col = 0; col < config.cols; col++) {
        const currentIndex = row * config.cols + col;
        const currentParticle = particles[currentIndex];

        // Connect to right neighbor
        if (col < config.cols - 1) {
          const rightIndex = row * config.cols + (col + 1);
          const rightParticle = particles[rightIndex];
          connections.push({
            from: currentParticle,
            to: rightParticle,
            opacity: config.connectionOpacity,
          });
        }

        // Connect to bottom neighbor
        if (row < config.rows - 1) {
          const bottomIndex = (row + 1) * config.cols + col;
          const bottomParticle = particles[bottomIndex];
          connections.push({
            from: currentParticle,
            to: bottomParticle,
            opacity: config.connectionOpacity,
          });
        }
      }
    }

    connectionsRef.current = connections;
  }, [config]);

  // Throttled mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastMouseMoveRef.current < config.mouseMoveThrottle) return;
    
    lastMouseMoveRef.current = now;
    
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, [config.mouseMoveThrottle]);

  // Update particle positions
  const updateParticles = useCallback(() => {
    const mouse = mouseRef.current;
    
    particlesRef.current.forEach(particle => {
      const distanceToMouse = Math.sqrt(
        Math.pow(mouse.x - particle.originalX, 2) + 
        Math.pow(mouse.y - particle.originalY, 2)
      );

      const influence = Math.max(0, 1 - distanceToMouse / config.maxInfluence);

      if (influence > 0) {
        const angle = Math.atan2(
          particle.originalY - mouse.y,
          particle.originalX - mouse.x
        );
        
        const pushX = Math.cos(angle) * config.pushStrength * influence;
        const pushY = Math.sin(angle) * config.pushStrength * influence;
        
        particle.vx += pushX * 0.1;
        particle.vy += pushY * 0.1;
      }

      // Spring back to original position
      const springX = (particle.originalX - particle.x) * config.springBack;
      const springY = (particle.originalY - particle.y) * config.springBack;
      
      particle.vx += springX;
      particle.vy += springY;

      // Apply friction
      particle.vx *= config.friction;
      particle.vy *= config.friction;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
    });
  }, [config]);

  // Render function
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    ctx.strokeStyle = `rgba(100, 116, 139, ${config.connectionOpacity})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    connectionsRef.current.forEach(connection => {
      ctx.moveTo(connection.from.x, connection.from.y);
      ctx.lineTo(connection.to.x, connection.to.y);
    });

    ctx.stroke();

    // Draw particles
    ctx.fillStyle = `rgba(148, 163, 184, ${config.particleOpacity})`;
    ctx.strokeStyle = `rgba(100, 116, 139, 0.25)`;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 1;

    particlesRef.current.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, config.particleSize / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  }, [config]);

  // Animation loop
  const animate = useCallback(() => {
    updateParticles();
    render();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, render]);

  // Handle resize
  const handleResize = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const canvas = canvasRef.current;
    
    // Set canvas size with device pixel ratio for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    
    initializeParticles();
  }, [initializeParticles]);

  // Effects
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
}