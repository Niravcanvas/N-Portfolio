'use client';

import { useEffect, useRef, useCallback } from 'react';

interface NodeData {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface ParticleData {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export default function Interactive() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<NodeData[]>([]);
  const particlesRef = useRef<ParticleData[]>([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const statsDisplayRef = useRef<HTMLDivElement>(null);
  const statsParticleDisplayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePosRef.current = { x, y };

    // Spawn cursor particles
    if (Math.random() > 0.7) {
      particlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 1,
        maxLife: 60,
      });
    }
  }, []);

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newNode: NodeData = {
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: 4 + Math.random() * 4,
    };

    if (nodesRef.current.length >= 30) {
      nodesRef.current.shift();
    }
    nodesRef.current.push(newNode);

    // Spawn particle burst
    const burstCount = 15;
    for (let i = 0; i < burstCount; i++) {
      const angle = (Math.PI * 2 * i) / burstCount;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * 3,
        vy: Math.sin(angle) * 3,
        life: 1,
        maxLife: 40,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const debouncedResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 150);
    };
    window.addEventListener('resize', debouncedResize, { passive: true });

    const animate = () => {
      const nodes = nodesRef.current;
      const particles = particlesRef.current;
      const mousePos = mousePosRef.current;

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
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) {
          node.vx = -node.vx;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy = -node.vy;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
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
        }

        // Draw connection to mouse if close
        const dxMouse = node.x - mousePos.x;
        const dyMouse = node.y - mousePos.y;
        const distanceToMouse = Math.sqrt(
          dxMouse * dxMouse + dyMouse * dyMouse
        );

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
        const pulseRadius =
          node.radius + (Math.sin(Date.now() / 500 + i) + 1) * 3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + Math.sin(Date.now() / 500 + i) * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Update and draw particles (filter in-place)
      let writeIdx = 0;
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1 / particle.maxLife;
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        if (particle.life > 0) {
          // Draw particle
          const size = 2 * particle.life;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.life * 0.6})`;
          ctx.fill();

          particles[writeIdx] = particle;
          writeIdx++;
        }
      }
      particles.length = writeIdx;

      // Draw cursor glow
      const cursorGradient = ctx.createRadialGradient(
        mousePos.x,
        mousePos.y,
        0,
        mousePos.x,
        mousePos.y,
        50
      );
      cursorGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      cursorGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, 50, 0, Math.PI * 2);
      ctx.fillStyle = cursorGradient;
      ctx.fill();

      // Update stats DOM directly (no React re-render)
      if (statsDisplayRef.current) {
        statsDisplayRef.current.textContent = `${nodes.length}/30`;
      }
      if (statsParticleDisplayRef.current) {
        statsParticleDisplayRef.current.textContent = `${particles.length}`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', debouncedResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <section id="interactive" className="h-[50vh] relative overflow-hidden bg-black">
      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onClick={handleCanvasClick}
        className="w-full h-full cursor-crosshair"
        aria-label="Interactive node canvas — click to spawn nodes, move mouse to interact"
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
            <span ref={statsDisplayRef} className="text-white">0/30</span>
          </div>
          <div className="px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
            <span className="text-white/40">PARTICLES:</span>{' '}
            <span ref={statsParticleDisplayRef} className="text-white">0</span>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/20" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/20" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20" />
    </section>
  );
}