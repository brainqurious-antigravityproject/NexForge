'use client';

import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

export default function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const phiRef = useRef(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = Math.min(
      canvas.parentElement?.clientWidth ?? 500,
      canvas.parentElement?.clientHeight ?? 700,
      700
    );

    try {
      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio, 2),
        width: size * 2,
        height: size * 2,
        phi: 0,
        theta: 0.25,
        dark: 1,
        diffuse: 1.8,
        mapSamples: 18000,
        mapBrightness: 7,
        mapBaseBrightness: 0.02,
        baseColor: [0.12, 0.12, 0.12],
        glowColor: [0.71, 1, 0.24],   // lime green glow — matches #b5ff3e
        markerColor: [0.71, 1, 0.24], // lime green markers
        markers: [
          { location: [28.61, 77.21], size: 0.06 },  // New Delhi ← your city
          { location: [19.07, 72.88], size: 0.04 },  // Mumbai
          { location: [51.51, -0.13], size: 0.04 },  // London
          { location: [40.71, -74.01], size: 0.04 }, // New York
          { location: [25.20, 55.27], size: 0.04 },  // Dubai
          { location: [1.35, 103.82], size: 0.03 },  // Singapore
        ],
        opacity: 0.92,
        scale: 1,
        offset: [0, 0],
        // @ts-expect-error - onRender is missing from cobe types but is a valid option
        onRender: (state: Record<string, any>) => {
          state.phi = phiRef.current;
          phiRef.current += 0.003;
        },
      });
    } catch (e) {
      console.warn('COBE globe failed:', e);
      setTimeout(() => setFailed(true), 0);
      return;
    }

    // Mouse tilt
    let mouseX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      globeRef.current?.destroy();
    };
  }, []);

  // Subtle CSS fallback if COBE also fails (extremely rare)
  if (failed) {
    return (
      <div className="absolute right-0 top-0 w-full h-full lg:w-[45%] md:w-[40%] z-0 pointer-events-none">
        <div className="absolute inset-0 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(181,255,62,0.15) 0%, transparent 70%)' }} />
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-0 w-full h-full lg:w-[45%] md:w-[40%] z-0 pointer-events-none flex items-center justify-center opacity-30 md:opacity-100">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', maxWidth: '700px', maxHeight: '700px', aspectRatio: '1/1' }}
      />
    </div>
  );
}
