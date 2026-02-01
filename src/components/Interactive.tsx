'use client';

import { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export default function Interactive() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Spawn cursor particles
    if (Math.random() > 0.7) {
      setParticles(prev => [...prev, {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 1,
        maxLife: 60
      }]);
    }
  };

  // Handle canvas click to spawn nodes
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newNode: Node = {
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: 4 + Math.random() * 4,
      connections: []
    };

    setNodes(prev => {
      if (prev.length >= 30) {
        return [...prev.slice(1), newNode];
      }
      return [...prev, newNode];
    });

    // Spawn particle burst
    const burstCount = 15;
    const newParticles: Particle[] = [];
    for (let i = 0; i < burstCount; i++) {
      const angle = (Math.PI * 2 * i) / burstCount;
      newParticles.push({
        x,
        y,
        vx: Math.cos(angle) * 3,
        vy: Math.sin(angle) * 3,
        life: 1,
        maxLife: 40
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw nodes
      setNodes(prevNodes => {
        const updatedNodes = prevNodes.map(node => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;

          // Bounce off edges
          if (newX < 0 || newX > canvas.width) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(canvas.width, newX));
          }
          if (newY < 0 || newY > canvas.height) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(canvas.height, newY));
          }

          return { ...node, x: newX, y: newY, vx: newVx, vy: newVy };
        });

        // Draw connections between nearby nodes
        updatedNodes.forEach((node, i) => {
          updatedNodes.forEach((otherNode, j) => {
            if (i >= j) return;
            
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              const opacity = 1 - distance / 150;
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          });

          // Draw connection to mouse if close
          const dxMouse = node.x - mousePos.x;
          const dyMouse = node.y - mousePos.y;
          const distanceToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          
          if (distanceToMouse < 100) {
            const opacity = 1 - distanceToMouse / 100;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw pulse ring
          const pulseRadius = node.radius + (Math.sin(Date.now() / 500 + i) + 1) * 3;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + Math.sin(Date.now() / 500 + i) * 0.1})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        return updatedNodes;
      });

      // Update and draw particles
      setParticles(prevParticles => {
        return prevParticles
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 1 / particle.maxLife,
            vx: particle.vx * 0.98,
            vy: particle.vy * 0.98
          }))
          .filter(particle => particle.life > 0);
      });

      particles.forEach(particle => {
        const size = 2 * particle.life;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.life * 0.6})`;
        ctx.fill();
      });

      // Draw cursor glow
      const cursorGradient = ctx.createRadialGradient(
        mousePos.x, mousePos.y, 0,
        mousePos.x, mousePos.y, 50
      );
      cursorGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      cursorGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, 50, 0, Math.PI * 2);
      ctx.fillStyle = cursorGradient;
      ctx.fill();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [nodes, particles, mousePos]);

  return (
    <section id="interactive" className="h-[50vh] relative overflow-hidden bg-black">
      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onClick={handleCanvasClick}
        className="w-full h-full cursor-crosshair"
      />

      {/* Subtle instruction hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
          <p className="text-white/40 text-sm font-mono">
            CLICK TO SPAWN NODES • MOVE TO INTERACT
          </p>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute top-8 left-8 pointer-events-none">
        <div className="space-y-2 font-mono text-xs">
          <div className="px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
            <span className="text-white/40">NODES:</span>{' '}
            <span className="text-white">{nodes.length}/30</span>
          </div>
          <div className="px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
            <span className="text-white/40">PARTICLES:</span>{' '}
            <span className="text-white">{particles.length}</span>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/20"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/20"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20"></div>
    </section>
  );
}