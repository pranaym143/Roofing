import React from 'react';
import { X, Calendar, Shield, Maximize2, MapPin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface LightboxProps {
  project: Project | null;
  onClose: () => void;
}

export default function Lightbox({ project, onClose }: LightboxProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 select-none">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          className="relative max-w-5xl w-full bg-brand-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-brand-red cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: Large Visual */}
          <div className="w-full md:w-3/5 h-[300px] md:h-auto min-h-[350px] relative bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            
            {/* Visual Location tag */}
            <div className="absolute bottom-6 left-6 z-10">
              <div className="flex items-center space-x-2 text-[#F5B942] mb-1">
                <MapPin className="w-4 h-4" />
                <span className="font-mono text-xs tracking-wider uppercase font-semibold">{project.location}</span>
              </div>
              <h3 className="font-display font-medium text-2xl lg:text-3xl text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Right Side: Elite Data specs */}
          <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[calc(90vh-100px)] md:max-h-none">
            <div>
              {/* Material Classification chip */}
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[11px] font-mono uppercase tracking-wider mb-6">
                Certified Premium Install
              </div>

              <div className="mb-6">
                <h4 className="font-display font-semibold text-lg text-white mb-2">Project Overview</h4>
                <p className="text-sm text-brand-muted leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Grid Specifications list */}
              <div className="space-y-4 mb-8">
                <h4 className="font-display font-semibold text-xs text-[#F5B942] uppercase tracking-widest">
                  Technical Specifications
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-4.5">
                    <span className="text-[10px] font-mono text-brand-muted block uppercase">Material Grade</span>
                    <span className="text-white text-xs font-semibold block mt-1">{project.specs.material}</span>
                  </div>

                  <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-4.5">
                    <span className="text-[10px] font-mono text-brand-muted block uppercase">Total Area</span>
                    <span className="text-white text-xs font-semibold block mt-1">{project.specs.area}</span>
                  </div>

                  <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-4.5">
                    <span className="text-[10px] font-mono text-brand-muted block uppercase">Time Completed</span>
                    <span className="text-white text-xs font-semibold block mt-1 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-red" />
                      <span>{project.specs.duration}</span>
                    </span>
                  </div>

                  <div className="bg-neutral-900/60 border border-white/5 rounded-2xl p-4.5">
                    <span className="text-[10px] font-mono text-brand-muted block uppercase">Warranty Package</span>
                    <span className="text-white text-xs font-semibold block mt-1 flex items-center space-x-1 text-emerald-400">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{project.specs.warranty}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Standard Badges */}
            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-[10px] tracking-wider text-brand-muted uppercase">ASCE 7 Standard</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-[10px] tracking-wider text-brand-muted uppercase">ICC Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
