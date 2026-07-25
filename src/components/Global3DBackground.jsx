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
    const whiteParticles = Array.from({ length: 32 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1.5 + 0.5,
      radius: Math.random() * 3.5 + 1.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2 - 0.1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.015 + Math.random() * 0.015
    }));

    // Dark Theme Floating Stardust & Cross Stars
    const darkStardust = Array.from({ length: 45 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1.8 + 0.4,
      radius: Math.random() * 2.5 + 0.8,
      isStar: Math.random() > 0.7,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25 - 0.1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.025
    }));

    // Helper: Draw 4-Point Gold Cross Lens Flare Star
    const drawSparkleStar = (cx, cy, radius, alpha) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      // Rays
      ctx.moveTo(cx - radius * 2.5, cy);
      ctx.lineTo(cx + radius * 2.5, cy);
      ctx.moveTo(cx, cy - radius * 2.5);
      ctx.lineTo(cx, cy + radius * 2.5);
      ctx.strokeStyle = "rgba(254, 240, 138, 0.95)";
      ctx.lineWidth = 1.2;
      ctx.shadowColor = "#fde047";
      ctx.shadowBlur = 12;
      ctx.stroke();

      // Center Core Diamond
      ctx.beginPath();
      ctx.moveTo(cx, cy - radius * 0.9);
      ctx.lineTo(cx + radius * 0.45, cy);
      ctx.lineTo(cx, cy + radius * 0.9);
      ctx.lineTo(cx - radius * 0.45, cy);
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
        // ================= DARK THEME (CINEMATIC OBSIDIAN + DYNAMIC GOLD AURORA SILK WAVE + STARDUST) =================
        ctx.fillStyle = "#040508";
        ctx.fillRect(0, 0, width, height);

        // 1. Primary Flowing Gold Aurora Ribbon Wave
        ctx.save();
        const mainWaveY = height * 0.48;
        const mainGrad = ctx.createLinearGradient(0, mainWaveY - 160, width, mainWaveY + 160);
        mainGrad.addColorStop(0, "rgba(184, 134, 11, 0.03)");
        mainGrad.addColorStop(0.3, "rgba(245, 203, 92, 0.18)");
        mainGrad.addColorStop(0.65, "rgba(255, 224, 71, 0.35)");
        mainGrad.addColorStop(1, "rgba(120, 53, 15, 0.04)");

        ctx.beginPath();
        ctx.moveTo(0, mainWaveY);
        for (let x = 0; x <= width; x += 15) {
          const y = mainWaveY + Math.sin(x * 0.0024 + wavePhase) * 85 + Math.cos(x * 0.0012 - wavePhase * 0.75) * 55;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = mainGrad;
        ctx.fill();

        // Multi-Threaded Gold Silk Wave Contour Lines
        const strandCount = 24;
        for (let strand = 0; strand < strandCount; strand++) {
          const offset = (strand - strandCount / 2) * 8;
          ctx.beginPath();
          let isFirst = true;

          for (let x = 0; x <= width; x += 12) {
            const y = mainWaveY + offset + Math.sin(x * 0.0024 + wavePhase + strand * 0.09) * (75 + strand * 0.8) + Math.cos(x * 0.0012 - wavePhase * 0.75) * 45;
            if (isFirst) {
              ctx.moveTo(x, y);
              isFirst = false;
            } else {
              ctx.lineTo(x, y);
            }
          }

          const alpha = 0.1 + (1 - Math.abs(strand - strandCount / 2) / (strandCount / 2)) * 0.35;
          ctx.strokeStyle = `rgba(254, 240, 138, ${alpha})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
        ctx.restore();

        // 2. Secondary Top Swirling Champagne Silk Wave
        ctx.save();
        const topWaveY = height * 0.20;
        const topGrad = ctx.createLinearGradient(0, topWaveY - 100, width, topWaveY + 100);
        topGrad.addColorStop(0, "rgba(245, 203, 92, 0.02)");
        topGrad.addColorStop(0.5, "rgba(254, 240, 138, 0.16)");
        topGrad.addColorStop(1, "rgba(212, 175, 55, 0.02)");

        ctx.beginPath();
        ctx.moveTo(0, topWaveY);
        for (let x = 0; x <= width; x += 20) {
          const y = topWaveY + Math.cos(x * 0.0028 - wavePhase * 1.1) * 65 + Math.sin(x * 0.0015 + wavePhase) * 40;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fillStyle = topGrad;
        ctx.fill();
        ctx.restore();

        // 3. Floating Gold Stardust & Cross Stars Stream
        darkStardust.forEach((p) => {
          p.x += p.vx * p.z;
          p.y += p.vy * p.z;
          p.pulse += p.pulseSpeed;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          const alpha = 0.25 + Math.sin(p.pulse) * 0.25;
          const scale = p.z * (1 + Math.sin(p.pulse) * 0.18);

          if (p.isStar) {
            drawSparkleStar(p.x, p.y, (p.radius + 3) * scale, alpha);
          } else {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * scale, 0, Math.PI * 2);

            const stardustGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * scale);
            stardustGrad.addColorStop(0, "#ffffff");
            stardustGrad.addColorStop(0.5, "#fde047");
            stardustGrad.addColorStop(1, "#d97706");

            ctx.fillStyle = stardustGrad;
            ctx.shadowColor = "#fde047";
            ctx.shadowBlur = 6 * scale;
            ctx.fill();
            ctx.restore();
          }
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
