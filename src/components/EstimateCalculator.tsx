import React, { useState, useMemo } from 'react';
import { Sparkles, Calculator, HelpCircle, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface MaterialOption {
  id: string;
  name: string;
  basePricePerSqFt: number;
  description: string;
  icon: string;
  warranty: string;
}

const MATERIALS: MaterialOption[] = [
  {
    id: 'shingle',
    name: 'Architectural Composite Slate',
    basePricePerSqFt: 8.50,
    description: 'Heavy architectural shingles with depth profile mimicking natural slate ridges.',
    icon: 'Layers',
    warranty: '50-Year Limited'
  },
  {
    id: 'metal',
    name: 'Matte-Black Standing Seam',
    basePricePerSqFt: 14.20,
    description: 'Thick continuous zinc-alloy coated modern steel panels with hidden hardware.',
    icon: 'Hammer',
    warranty: 'Lifetime Structural'
  },
  {
    id: 'slate',
    name: 'Genuine Welsh Natural Slate',
    basePricePerSqFt: 28.00,
    description: 'The absolute finest hand-split authentic natural stone. Lifespan exceeding 100 years.',
    icon: 'Mountain',
    warranty: '100-Year Heritage'
  },
  {
    id: 'copper',
    name: 'High-Sheen Standing Copper',
    basePricePerSqFt: 36.50,
    description: 'Luxurious heavy-weight copper sheets configured for stunning architectural patina.',
    icon: 'Crown',
    warranty: 'Lifetime Plus'
  }
];

const PITCHES = [
  { id: 'flat', label: 'Low / Flat Incline', multiplier: 1.0, desc: 'Easiest setup (0° - 15°)' },
  { id: 'medium', label: 'Medium Incline', multiplier: 1.15, desc: 'Standard residential (15° - 35°)' },
  { id: 'steep', label: 'Grand Cathedral Pitch', multiplier: 1.35, desc: 'Complex steep angles (35°+)' }
];

export default function EstimateCalculator() {
  const [area, setArea] = useState(2500);
  const [selectedMaterial, setSelectedMaterial] = useState('metal');
  const [selectedPitch, setSelectedPitch] = useState('medium');
  const [submitted, setSubmitted] = useState(false);
  
  // Lead info state
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');

  const calculations = useMemo(() => {
    const materialObj = MATERIALS.find(m => m.id === selectedMaterial) || MATERIALS[0];
    const pitchObj = PITCHES.find(p => p.id === selectedPitch) || PITCHES[1];

    const baseCost = area * materialObj.basePricePerSqFt * pitchObj.multiplier;
    const laborCost = baseCost * 0.45; // 45% craft install labor
    const safetyBarrierCost = area * 1.80; // ice/water shield, ridge vents
    const warrantyAdmin = 1250;

    const totalEstimateMin = Math.round(baseCost + laborCost + safetyBarrierCost);
    const totalEstimateMax = Math.round((baseCost + laborCost + safetyBarrierCost) * 1.15 + warrantyAdmin);

    return {
      materialCost: Math.round(baseCost),
      laborCost: Math.round(laborCost),
      safetyCost: Math.round(safetyBarrierCost),
      minTotal: totalEstimateMin,
      maxTotal: totalEstimateMax,
      warranty: materialObj.warranty
    };
  }, [area, selectedMaterial, selectedPitch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) return;
    setSubmitted(true);
  };

  return (
    <div id="calculator" className="bg-brand-card/75 border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative select-none">
      {/* Top Banner accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />
      
      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left column: input settings */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="flex items-center space-x-2 text-brand-red font-mono text-xs mb-3">
              <Calculator className="w-4 h-4" />
              <span className="uppercase tracking-widest font-semibold">Interactive Configurator</span>
            </div>
            <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight leading-none">
              Estimate Your Masterpiece
            </h3>
            <p className="text-sm text-brand-muted mt-2 max-w-lg">
              Configure your home size, architecture incline, and elite hardware coatings for an instant ballpark calculation.
            </p>
          </div>

          {/* Roof Area Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-white">Estimated Roof Footprint Area</label>
              <span className="font-mono text-sm text-[#F5B942] font-semibold bg-brand-gold-muted px-2.5 py-1 rounded-md">
                {area.toLocaleString()} sq ft
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="12000"
              step="100"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand-red"
            />
            <div className="flex justify-between font-mono text-[9px] text-brand-muted">
              <span>1,000 sq ft (Cottage)</span>
              <span>6,500 sq ft</span>
              <span>12,000 sq ft (Manor)</span>
            </div>
          </div>

          {/* Premium Material Selector Custom Cards */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white block">Aesthetic Material Coating</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MATERIALS.map((mat) => {
                const isSelected = selectedMaterial === mat.id;
                return (
                  <div
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat.id)}
                    className={`p-4 rounded-xl cursor-pointer text-left transition-all duration-300 border ${
                      isSelected
                        ? 'bg-brand-red/10 border-brand-red/40 text-white shadow-md shadow-brand-red/5'
                        : 'bg-neutral-900/60 border-white/5 hover:border-white/10 text-brand-muted'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-brand-muted'}`}>
                        {mat.name}
                      </span>
                      {isSelected && (
                        <span className="h-4 w-4 bg-brand-red rounded-full flex items-center justify-center text-[10px] text-white">
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] leading-relaxed line-clamp-2 mt-1">
                      {mat.description}
                    </p>
                    <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-white/5 font-mono text-[10px]">
                      <span className="text-[#F5B942]">${mat.basePricePerSqFt.toFixed(2)} / sq ft</span>
                      <span className="opacity-75">{mat.warranty}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Roof Pitch architecture */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white block">Structural Pitch Multiplier</label>
            <div className="grid grid-cols-3 gap-2.5">
              {PITCHES.map((p) => {
                const isSelected = selectedPitch === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPitch(p.id)}
                    className={`p-3 rounded-lg text-center transition-all cursor-pointer font-sans duration-200 border text-xs ${
                      isSelected
                        ? 'bg-neutral-800 text-white border-brand-red font-semibold'
                        : 'bg-neutral-900/40 text-brand-muted border-white/5 hover:border-white/10'
                    }`}
                  >
                    <span className="block text-[11px] font-mono tracking-wider font-bold">
                      {p.multiplier === 1.0 ? 'BASE' : `+${Math.round((p.multiplier - 1) * 100)}%`}
                    </span>
                    <span className="block text-[10px] truncate mt-0.5">{p.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column: Dynamic outcome visualization & Lead Capture */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-neutral-950/80 border border-white/5 rounded-2xl p-6 space-y-6 relative">
            <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded">
              Engine Active
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted">Target Valuation Range</span>
              <div className="flex items-baseline space-x-1">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">
                  ${calculations.minTotal.toLocaleString()}
                </span>
                <span className="text-brand-muted text-xs mx-1">to</span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#F5B942]">
                  ${calculations.maxTotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[11px] text-brand-muted italic leading-relaxed pt-1">
                *Approximate full replacement proposal value including standard white-glove site setup and certification.
              </p>
            </div>

            {/* Calculations drill-down */}
            <div className="border-t border-white/5 pt-5 space-y-3.5 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-brand-muted">Architectural Materials</span>
                <span className="text-white">${calculations.materialCost.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-brand-muted">Craftsmanship Labor (45%)</span>
                <span className="text-white">${calculations.laborCost.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-brand-muted">Structural Weather Barrier</span>
                <span className="text-white">${calculations.safetyCost.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-[#F5B942] bg-brand-gold-muted/10 p-2.5 rounded-lg border border-brand-gold/10">
                <span>Integrated Warranty Limit</span>
                <span className="font-semibold">{calculations.warranty} Limit</span>
              </div>
            </div>
          </div>

          {/* Lead capture activation */}
          <div className="mt-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 bg-neutral-900/40 p-4 rounded-2xl border border-white/5">
                <p className="text-[11px] text-white font-medium flex items-center space-x-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-red animate-pulse" />
                  <span>Lock In This Valuation & Schedule Site Plan</span>
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="bg-neutral-950 border border-white/5 text-xs px-3.5 py-2.5 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-red transition-all"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="bg-neutral-950 border border-white/5 text-xs px-3.5 py-2.5 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-red-700 text-white font-medium text-xs py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center space-x-1.5"
                >
                  <span>Submit Estimate Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-950/25 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-2"
              >
                <div className="h-8 w-8 bg-emerald-500 rounded-full mx-auto flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <h4 className="text-white text-sm font-semibold">Estimate Locked In!</h4>
                <p className="text-[11px] text-brand-muted max-w-xs mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{leadName}</span>. An executive design consultant will call you at <span className="text-white font-medium">{leadPhone}</span> within 15 minutes to secure your forensic drone inspection slot.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] font-mono text-brand-red underline cursor-pointer hover:text-red-400 mt-2 block mx-auto"
                >
                  Reconfigure Setup
                </button>
              </motion.div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}
