import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Global3DBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // 1. White Theme 3D Fragmented Geometric Blocks (Actively Exchanging Places)
    const cols = 5;
    const rows = 4;
    const gridPositions = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        gridPositions.push({
          origX: (width / cols) * c,
          origY: (height / rows) * r,
          w: width / cols,
          h: height / rows
        });
      }
    }

    const blocks = gridPositions.map((pos, i) => ({
      id: i,
      x: pos.origX,
      y: pos.origY,
      targetX: pos.origX,
      targetY: pos.origY,
      w: pos.w,
      h: pos.h,
      elevation: Math.random() * 20 + 5,
      targetElevation: Math.random() * 20 + 5,
      phase: Math.random() * Math.PI * 2
    }));

    // Periodically Swap Neighboring 3D Block Target Positions in White Theme
    const swapInterval = setInterval(() => {
      if (!isLight || blocks.length < 2) return;
      const idxA = Math.floor(Math.random() * blocks.length);
      let idxB = Math.floor(Math.random() * blocks.length);
      while (idxB === idxA) idxB = Math.floor(Math.random() * blocks.length);

      const tempX = blocks[idxA].targetX;
      const tempY = blocks[idxA].targetY;
      blocks[idxA].targetX = blocks[idxB].targetX;
      blocks[idxA].targetY = blocks[idxB].targetY;
      blocks[idxB].targetX = tempX;
      blocks[idxB].targetY = tempY;

      blocks[idxA].targetElevation = Math.random() * 25 + 5;
      blocks[idxB].targetElevation = Math.random() * 25 + 5;
    }, 2800);

    // White Theme Floating Champagne Particles
    const whiteParticles = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1.5 + 0.5,
      radius: Math.random() * 3.5 + 1.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2 - 0.1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.015 + Math.random() * 0.015
    }));

    // Dark Theme Sparkling Cross Stars
    const sparkleStars = Array.from({ length: 18 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 5 + 3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03
    }));

    // Helper: Draw 4-Point Gold Cross Sparkle Star
    const drawSparkleStar = (cx, cy, radius, alpha) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      // Horizontal & Vertical Lens Flare Rays
      ctx.moveTo(cx - radius * 2.2, cy);
      ctx.lineTo(cx + radius * 2.2, cy);
      ctx.moveTo(cx, cy - radius * 2.2);
      ctx.lineTo(cx, cy + radius * 2.2);
      ctx.strokeStyle = "rgba(254, 240, 138, 0.9)";
      ctx.lineWidth = 1.2;
      ctx.shadowColor = "#fde047";
      ctx.shadowBlur = 10;
      ctx.stroke();

      // Center Core Sparkle Diamond
      ctx.beginPath();
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx + radius * 0.4, cy);
      ctx.lineTo(cx, cy + radius);
      ctx.lineTo(cx - radius * 0.4, cy);
      ctx.closePath();
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.restore();
    };

    let wavePhase = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      wavePhase += 0.007;

      if (!isLight) {
        // ================= DARK THEME (DENSE 3D GOLDEN SAND PARTICLE WAVE MESH + SPARKLE STARS) =================
        ctx.fillStyle = "#050608";
        ctx.fillRect(0, 0, width, height);

        const strandCount = 28;
        const mainWaveY = height * 0.52;

        // 1. Draw Dense Golden Sand Wave Strands & Particle Points (Reference Image)
        for (let strand = 0; strand < strandCount; strand++) {
          const strandOffset = (strand - strandCount / 2) * 9;
          const phaseOffset = strand * 0.11;

          ctx.beginPath();
          let isFirst = true;

          const pointsPerStrand = Math.floor(width / 18);
          const points = [];

          for (let i = 0; i <= pointsPerStrand; i++) {
            const x = (i / pointsPerStrand) * width;
            const waveY =
              mainWaveY +
              strandOffset +
              Math.sin(x * 0.0026 + wavePhase + phaseOffset) * (75 + strand * 1.2) +
              Math.cos(x * 0.0013 - wavePhase * 0.7) * 40;

            points.push({ x, y: waveY });

            if (isFirst) {
              ctx.moveTo(x, waveY);
              isFirst = false;
            } else {
              ctx.lineTo(x, waveY);
            }
          }

          // Contour Thread Line connecting sand particles
          const strandAlpha = 0.15 + (1 - Math.abs(strand - strandCount / 2) / (strandCount / 2)) * 0.35;
          ctx.strokeStyle = `rgba(245, 203, 92, ${strandAlpha * 0.6})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();

          // Render Dense Golden Sand Dots along each Strand
          points.forEach((pt, pIdx) => {
            if (pIdx % 2 === 0) { // Render fine sand dots
              const sandSize = 0.8 + (Math.sin(pt.x * 0.01 + wavePhase) + 1) * 0.7;
              ctx.save();
              ctx.globalAlpha = strandAlpha * 0.85;
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, sandSize, 0, Math.PI * 2);
              ctx.fillStyle = strand % 2 === 0 ? "#fde047" : "#e2b740";
              ctx.shadowColor = "#fde047";
              ctx.shadowBlur = 4;
              ctx.fill();
              ctx.restore();
            }
          });
        }

        // 2. Secondary Upper Flowing Golden Sand Ribbon
        const upperWaveY = height * 0.22;
        for (let strand = 0; strand < 14; strand++) {
          const strandOffset = (strand - 7) * 8;
          ctx.beginPath();
          let isFirst = true;

          const pointsPerStrand = Math.floor(width / 22);

          for (let i = 0; i <= pointsPerStrand; i++) {
            const x = (i / pointsPerStrand) * width;
            const waveY =
              upperWaveY +
              strandOffset +
              Math.cos(x * 0.003 - wavePhase * 1.1 + strand * 0.1) * 55 +
              Math.sin(x * 0.0016 + wavePhase) * 30;

            if (isFirst) {
              ctx.moveTo(x, waveY);
              isFirst = false;
            } else {
              ctx.lineTo(x, waveY);
            }

            if (i % 3 === 0) {
              ctx.save();
              ctx.globalAlpha = 0.25;
              ctx.beginPath();
              ctx.arc(x, waveY, 1.2, 0, Math.PI * 2);
              ctx.fillStyle = "#fef08a";
              ctx.fill();
              ctx.restore();
            }
          }

          ctx.strokeStyle = `rgba(254, 240, 138, ${0.1 + (1 - Math.abs(strand - 7) / 7) * 0.2})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // 3. Render 4-Point Gold Cross Stars matching reference image
        sparkleStars.forEach((star) => {
          star.pulse += star.pulseSpeed;
          const alpha = 0.4 + Math.sin(star.pulse) * 0.35;
          drawSparkleStar(star.x, star.y, star.radius, alpha);
        });

      } else {
        // ================= WHITE THEME (3D FRAGMENTED BLOCKS EXCHANGING PLACES) =================
        ctx.fillStyle = "#f8f6f0";
        ctx.fillRect(0, 0, width, height);

        // Smooth Interpolation of 3D Geometric Blocks Exchanging Places
        blocks.forEach((b) => {
          b.x += (b.targetX - b.x) * 0.02;
          b.y += (b.targetY - b.y) * 0.02;
          b.elevation += (b.targetElevation - b.elevation) * 0.03;
          b.phase += 0.012;

          const currentY = b.y + Math.sin(b.phase) * 8;
          const currentX = b.x + Math.cos(b.phase * 0.8) * 6;
          const elev = b.elevation;

          ctx.save();
          
          // 3D Drop Shadow behind block
          ctx.shadowColor = "rgba(0, 0, 0, 0.08)";
          ctx.shadowBlur = elev * 0.8;
          ctx.shadowOffsetX = elev * 0.3;
          ctx.shadowOffsetY = elev * 0.4;

          // 3D Polygonal Block Path
          ctx.beginPath();
          ctx.moveTo(currentX + 8, currentY + 8);
          ctx.lineTo(currentX + b.w - 12, currentY + 6);
          ctx.lineTo(currentX + b.w - 6, currentY + b.h - 12);
          ctx.lineTo(currentX + 10, currentY + b.h - 8);
          ctx.closePath();

          // Smooth 3D Lighting Fill
          const blockGrad = ctx.createLinearGradient(currentX, currentY, currentX + b.w, currentY + b.h);
          blockGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
          blockGrad.addColorStop(0.5, "rgba(246, 242, 233, 0.85)");
          blockGrad.addColorStop(1, "rgba(238, 232, 218, 0.75)");

          ctx.fillStyle = blockGrad;
          ctx.fill();

          // Clean Beveled 3D Edge Line
          ctx.strokeStyle = "rgba(216, 208, 190, 0.5)";
          ctx.lineWidth = 1.2;
          ctx.stroke();

          ctx.restore();
        });

        // Draw Soft Translucent Champagne Spheres (Non-Dominating)
        whiteParticles.forEach((p) => {
          p.x += p.vx * p.z;
          p.y += p.vy * p.z;
          p.pulse += p.pulseSpeed;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          const scale = p.z * (1 + Math.sin(p.pulse) * 0.12);

          ctx.save();
          ctx.globalAlpha = 0.32;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * scale, 0, Math.PI * 2);

          const sphereGrad = ctx.createRadialGradient(
            p.x - p.radius * 0.2,
            p.y - p.radius * 0.2,
            p.radius * 0.1,
            p.x,
            p.y,
            p.radius * scale
          );
          sphereGrad.addColorStop(0, "#ffffff");
          sphereGrad.addColorStop(0.5, "#e2b740");
          sphereGrad.addColorStop(1, "#b8860b");

          ctx.fillStyle = sphereGrad;
          ctx.shadowColor = "rgba(226, 183, 64, 0.25)";
          ctx.shadowBlur = 6 * scale;
          ctx.fill();
          ctx.restore();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(swapInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isLight]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
      style={{ zIndex: -1 }}
    />
  );
}
