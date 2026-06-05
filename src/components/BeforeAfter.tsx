import React, { useState, useRef, useEffect } from 'react';
import { Eye } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  location?: string;
}

export default function BeforeAfter({ beforeImage, afterImage, title, location }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-950 select-none">
      {/* Visual Header */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
        <Eye className="w-4 h-4 text-brand-red animate-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-white">Before & After Showcase</span>
      </div>

      <div className="absolute top-4 right-4 z-20 bg-brand-red text-white text-[10px] uppercase font-mono px-3.5 py-1.5 rounded-full font-bold">
        Slide to Compare
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onTouchStart={() => setIsDragging(true)}
        className="relative h-[480px] w-full cursor-ew-resize overflow-hidden"
      >
        {/* AFTER IMAGE (Background - Premium Slate/Metal Roof) */}
        <img
          src={afterImage}
          alt="Premium Refurbished"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-6 right-6 z-10 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-right border border-white/5">
          <span className="text-[10px] font-mono tracking-widest text-[#F5B942] block uppercase">AFTER</span>
          <span className="text-white font-display font-medium text-sm">{title}</span>
          {location && <span className="text-[10px] font-mono text-brand-muted block mt-0.5">{location}</span>}
        </div>

        {/* BEFORE IMAGE (Overlay - Weathered Roof) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Original Weathered"
            className="absolute inset-0 w-[800px] h-full object-cover max-w-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
          />
        </div>
        
        {/* BEFORE LABEL */}
        <div 
          className="absolute bottom-6 left-6 z-10 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 transition-opacity duration-300"
          style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
        >
          <span className="text-[10px] font-mono tracking-widest text-brand-red block uppercase">BEFORE</span>
          <span className="text-white font-display font-medium text-sm">Worn Out Shingles</span>
          <span className="text-[10px] font-mono text-brand-muted block mt-0.5">Leaking & Weathered</span>
        </div>

        {/* DRAGGER BAR */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white/40 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Central Grab Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-red flex items-center justify-center border-2 border-white shadow-xl shadow-brand-red/50 transition-transform duration-200 group-hover:scale-110 active:scale-95">
            <div className="flex space-x-1.5 justify-center items-center">
              <span className="text-white text-xs font-bold font-mono">◀</span>
              <span className="text-white text-xs font-bold font-mono">▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
