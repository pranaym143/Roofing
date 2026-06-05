import React, { useState, useRef } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  Award, 
  Hammer, 
  Clock, 
  Star, 
  ArrowRight, 
  PhoneCall, 
  MapPin, 
  ChevronRight, 
  CheckCircle, 
  Layers, 
  HardHat, 
  Sparkles, 
  HelpCircle,
  FileText,
  BadgeAlert,
  ArrowUp,
  UserCheck,
  ChevronDown,
  Gauge
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import custom sub-components
import Navbar from './components/Navbar';
import BeforeAfter from './components/BeforeAfter';
import Lightbox from './components/Lightbox';
import EstimateCalculator from './components/EstimateCalculator';
import EmergencyForm from './components/EmergencyForm';

// Import premium mock data
import { SERVICES, PROJECTS, TESTIMONIALS, PROCESS_STEPS, FAQS } from './data';
import { Project, Service } from './types';

export default function App() {
  // Navigation & Interactive states
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'residential' | 'commercial' | 'drone' | 'modern'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<string | null>('faq-1');
  const [activeProcessStep, setActiveProcessStep] = useState<string>('01');
  const [activeServiceTab, setActiveServiceTab] = useState<string>('roof-replacement');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Quick Schedule State
  const [scheduleSuccess, setScheduleSuccess] = useState(false);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleService, setScheduleService] = useState('Inspect');

  // Multi-Step Testimonials Slider State
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  React.useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const handleTestimonialNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleTestimonialPrev = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const scrollToElementId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Filter project categories
  const filteredProjects = selectedCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  const selectedService = SERVICES.find(s => s.id === activeServiceTab) || SERVICES[0];

  const handleQuickSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scheduleDate) return;
    setScheduleSuccess(true);
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen relative font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">
      
      {/* Decorative ambient visual layout lines representing fine architecture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
        <div className="mx-auto max-w-7xl h-full w-full border-x border-dashed border-white/5 flex justify-between">
          <div className="w-1/4 h-full border-r border-dashed border-white/5" />
          <div className="w-1/4 h-full border-r border-dashed border-white/5" />
          <div className="w-1/4 h-full border-r border-dashed border-white/5" />
        </div>
      </div>

      {/* Floating UI Widget: Action Hub */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Back to top scroll indicator */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3.5 rounded-full bg-brand-card/90 border border-white/10 text-brand-red hover:bg-brand-red hover:text-white cursor-pointer shadow-xl transition-colors shrink-0"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Call Emergency Button */}
        <a
          href="tel:1-800-555-ROOF"
          className="flex items-center space-x-2 bg-gradient-to-r from-brand-red to-orange-600 text-white font-medium text-xs font-mono tracking-wider py-3.5 px-5 rounded-full shadow-2xl shadow-brand-red/30 transition-transform hover:scale-105 active:scale-95 z-55 cursor-pointer border border-white/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <PhoneCall className="w-3.5 h-3.5" />
          <span className="hidden md:inline">EMERGENCY DISPATCH</span>
        </a>
      </div>

      {/* STICKY GLASSMORPHISM NAVIGATION */}
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden md:snap-start">
        
        {/* Fullscreen cinematic hero image overlay simulating high-end drone view */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Modern Architecture Roof" 
            className="w-full h-full object-cover opacity-35 scale-105 motion-safe:animate-[pulse_10s_infinite_alternate]"
          />
          {/* Elite Radial gradients for absolute high-contrast */}
          <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 20%, #050505 90%)" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
          <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#050505] to-transparent" />
        </div>

        {/* Ambient floating red and gold gimmers */}
        <div className="absolute top-1/4 left-10 glow-accent" />
        <div className="absolute bottom-1/4 right-10 glow-accent-amber" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8 select-none">
          
          {/* Top category label */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full py-1.5 px-4.5">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-[#F5B942] uppercase font-bold">
              Award-Winning Elite Roofing Standard
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-none">
              ROOFING <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-orange-500 to-[#F5B942]">REDEFINED</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-sans font-light text-brand-muted max-w-2xl mx-auto leading-relaxed">
              Premium Roofing Solutions Designed For Modern Homeowners.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
            <button
              onClick={() => scrollToElementId('calculator')}
              className="w-full sm:w-auto bg-brand-red hover:bg-neutral-100 hover:text-brand-bg text-white font-medium text-sm py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-brand-red/10 cursor-pointer flex items-center justify-center space-x-2 group active:scale-95"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToElementId('showcase')}
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white font-medium text-sm py-4 px-8 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 active:scale-95"
            >
              <span>View Projects</span>
            </button>
          </div>

          {/* Section 1 Trust Metrics */}
          <div className="pt-16 max-w-5xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-widest text-brand-muted mb-6">
              Empirical Performance metrics
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center">
              <div className="bg-brand-card/45 backdrop-blur-md rounded-2xl p-5 border border-white/5">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white block">5000+</span>
                <span className="text-xs text-brand-muted font-sans mt-1 block">Projects Completed</span>
              </div>
              <div className="bg-brand-card/45 backdrop-blur-md rounded-2xl p-5 border border-white/5">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-brand-red block">15+</span>
                <span className="text-xs text-brand-muted font-sans mt-1 block">Years Experience</span>
              </div>
              <div className="bg-brand-card/45 backdrop-blur-md rounded-2xl p-5 border border-white/5">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#F5B942] block">24/7</span>
                <span className="text-xs text-brand-muted font-sans mt-1 block">Emergency Support</span>
              </div>
              <div className="bg-brand-card/45 backdrop-blur-md rounded-2xl p-5 border border-white/5">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white block">98%</span>
                <span className="text-xs text-brand-muted font-sans mt-1 block">Customer Satisfaction</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — TRUST BAR */}
      <section className="bg-brand-card/50 border-y border-white/5 py-10 relative overflow-hidden">
        {/* Subtle decorative left/right fade-out overlays */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-center items-center divide-x-0 md:divide-x divide-white/5">
            
            <div className="flex flex-col items-center justify-center p-2 text-center group">
              <ShieldCheck className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-sm text-white mt-2 block tracking-tight">Licensed</span>
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider">Charter Certified</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center group">
              <Shield className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-sm text-white mt-2 block tracking-tight">Insured</span>
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider">$10M Liability Guarantee</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center group">
              <Award className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-sm text-white mt-2 block tracking-tight">Certified</span>
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider">Master Slate Installers</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center group">
              <CheckCircle className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-sm text-white mt-2 block tracking-tight">Warranty Protected</span>
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider">Fully Transferable</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center group">
              <Hammer className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-sm text-white mt-2 block tracking-tight">Premium Materials</span>
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider">Welsh Slate / Copper</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 text-center group border-r-0">
              <Clock className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-sm text-white mt-2 block tracking-tight">Fast Response</span>
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider">24/7 Active Crew Pool</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT */}
      <section id="about" className="py-24 sm:py-32 relative">
        <div className="absolute top-1/3 left-0 glow-accent opacity-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Visual Column / Spacing Card */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand-red to-orange-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80" 
                  alt="Elite roofing structural detail"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating graphic specs label */}
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center space-x-3 max-w-xs">
                  <div className="flex items-center justify-center h-10 w-10 bg-brand-red/10 rounded-xl border border-brand-red/30">
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <span className="font-display font-semibold text-xs text-white block">Welsh Slate certified</span>
                    <span className="font-mono text-[9px] text-brand-muted uppercase tracking-wider">Origin guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stories Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-semibold block">The Redefined Heritage</span>
                <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  Crafting Permanent Shields For Elite Architecture.
                </h2>
                <div className="h-1 w-20 bg-brand-red rounded-full mt-4" />
              </div>

              <div className="space-y-6 text-brand-muted text-sm sm:text-base leading-relaxed font-sans font-light">
                <p>
                  At Roofing Redefined, we operate under a single, uncompromising belief: a luxury home deserves luxury protection. We have rejected standard subcontracting models and the cut-rate, hurried timelines of general roofers to establish an elite class of roof craftsmanship.
                </p>
                <p>
                  Every home we repair, replace, or construct is treated as an architectural masterwork. We synthesize ancient fine-grain stone cutting, aerospace counter-flashing systems, and advanced thermal air layer integration into a premium, permanent envelope certified to withstand generations of storms.
                </p>
              </div>

              {/* Dynamic Sub-tab blocks info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-brand-card border border-white/5">
                  <div className="h-2 w-10 bg-brand-red rounded-full mb-3" />
                  <h4 className="font-display font-semibold text-white text-sm">Authentic Provenance</h4>
                  <p className="text-[12px] text-brand-muted mt-2 font-sans leading-relaxed">
                    All slates, copper sheet layouts, and metals are sourced raw directly from top sustainable volcanic reserves and high-purity mills.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-brand-card border border-white/5">
                  <div className="h-2 w-10 bg-[#F5B942] rounded-full mb-3" />
                  <h4 className="font-display font-semibold text-white text-sm">Clinical Precision</h4>
                  <p className="text-[12px] text-brand-muted mt-2 font-sans leading-relaxed">
                    We perform computerized thermal waterpath routing simulation on every roof crease before a single hammer is raised.
                  </p>
                </div>
              </div>

              {/* Story Contact Link button */}
              <div className="pt-2 flex">
                <button 
                  onClick={() => scrollToElementId('calculator')}
                  className="group flex items-center space-x-2 text-sm font-semibold text-white p-1 hover:text-brand-red transition-all cursor-pointer"
                >
                  <span>Experience custom planning</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section id="services" className="bg-brand-card/30 border-y border-white/5 py-24 sm:py-32 relative">
        <div className="absolute top-1/4 right-0 glow-accent-amber opacity-40" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-semibold block">Exclusive Capabilities</span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight mt-2">
                Uncompromising Services.
              </h2>
            </div>
            <p className="text-sm text-brand-muted max-w-md">
              From historic slate restoration to heavy commercial thermodynamic metal installations. We solve high-end challenges with permanent accuracy files.
            </p>
          </div>

          {/* Interactive tab-switch Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick left navigator */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#F5B942] block mb-3 pl-3">Selective Capabilities</span>
              {SERVICES.map((s) => {
                const isActive = activeServiceTab === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveServiceTab(s.id)}
                    className={`p-4 rounded-xl cursor-pointer text-left transition-all duration-300 border flex items-center justify-between ${
                      isActive
                        ? 'bg-brand-card border-brand-red/50 text-white shadow-xl shadow-brand-red/5'
                        : 'bg-transparent border-transparent hover:bg-white/5 text-brand-muted'
                    }`}
                  >
                    <div>
                      <span className="font-display font-bold text-sm block">{s.title}</span>
                      <span className="font-mono text-[9px] text-brand-muted uppercase tracking-wider">{s.subtitle}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-all ${isActive ? 'text-brand-red translate-x-1' : 'text-neutral-700'}`} />
                  </div>
                );
              })}
            </div>

            {/* Active service view screen with beautiful detailed visual animations */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand-card border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-8"
                >
                  
                  {/* Service Right info column */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="font-mono text-[#F5B942] text-[10px] font-bold tracking-widest block uppercase mb-1">
                        {selectedService.subtitle}
                      </span>
                      <h3 className="font-display font-medium text-2xl sm:text-3xl text-white leading-tight">
                        {selectedService.title}
                      </h3>
                      <p className="text-xs font-mono text-brand-muted mt-2">
                        Premium pricing guideline: <span className="text-white font-semibold">{selectedService.priceRange}</span>
                      </p>
                      <p className="text-sm text-brand-muted font-sans font-light leading-relaxed mt-4">
                        {selectedService.longDescription}
                      </p>

                      <div className="mt-6 space-y-2">
                        <span className="text-[10px] font-mono uppercase text-white tracking-widest block mb-2">Performance Standards</span>
                        {selectedService.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs">
                            <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                            <span className="text-brand-muted">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => scrollToElementId('calculator')}
                      className="w-full sm:w-auto bg-neutral-900 hover:bg-brand-red text-white text-xs font-mono tracking-wider font-semibold py-3.5 px-6 rounded-xl border border-white/5 hover:border-transparent transition-all self-start cursor-pointer active:scale-95"
                    >
                      Book Special Assessment
                    </button>
                  </div>

                  {/* Service Left image zoom column */}
                  <div className="w-full md:w-1/2 h-[300px] md:h-auto min-h-[300px] bg-neutral-950 rounded-2xl overflow-hidden relative group">
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    
                    <div className="absolute top-4 right-4 bg-brand-bg/85 border border-white/10 rounded-full py-1.5 px-3">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-green-400">Certified active service</span>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5 — PROJECT SHOWCASE */}
      <section id="showcase" className="py-24 sm:py-32 relative">
        <div className="absolute bottom-1/4 left-10 glow-accent opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F5B942] font-semibold block">Craft Highlight</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-none leading-tight">
              World-Class Portfolio.
            </h2>
            <div className="h-1 w-20 bg-brand-red rounded-full mx-auto" />
            <p className="text-sm text-brand-muted max-w-lg mx-auto">
              Inspect our drone and physical construction files of luxury estates. Select any project block to load diagnostic stats details.
            </p>
          </div>

          {/* Interactive Category Filter Menu */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'residential', label: 'Residential Slates' },
              { id: 'modern', label: 'Modern Metals' },
              { id: 'commercial', label: 'Commercial Membrane' },
              { id: 'drone', label: 'Drone Imagery' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`py-2 px-4.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id 
                    ? 'bg-brand-red text-white font-semibold' 
                    : 'bg-brand-card/50 text-brand-muted hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mosaic Grid with Project blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative h-[380px] rounded-3xl overflow-hidden border border-white/15 cursor-pointer shadow-xl transition-all hover:border-brand-red/40"
              >
                {/* Visual Image overlay */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                
                {/* Gradient shadows overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/95 via-[#020202]/30 to-transparent transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Visual specifications pill */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 z-10">
                  <span className="font-mono text-[9px] uppercase text-[#F5B942] tracking-widest">{project.specs.material}</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-1.5 z-10">
                  <div className="flex items-center space-x-1 text-[10px] font-mono text-brand-muted">
                    <MapPin className="w-3 h-3 text-brand-red" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-display font-medium text-xl sm:text-2xl text-white tracking-tight">
                    {project.title}
                  </h3>

                  <div className="pt-2 flex justify-between items-center text-xs text-brand-muted border-t border-white/5 mt-3 group-hover:text-white transition-colors">
                    <span className="font-mono text-[10px]">Warranty: {project.specs.warranty}</span>
                    <button className="text-brand-red flex items-center space-x-1 text-[11px] font-semibold group-hover:underline">
                      <span>Inspect stats</span>
                      <ArrowRight className="w-3.1 h-3.1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Interactive Before-After Slider block embedded right in the center */}
          <div className="mt-20 max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <p className="font-mono text-[#F5B942] text-[10px] tracking-widest uppercase font-bold">
                Direct Side-By-Side Contrast
              </p>
              <h3 className="font-display font-medium text-xl sm:text-2xl text-white mt-1">
                The Obsidian Re-engineering Impact
              </h3>
            </div>
            
            <BeforeAfter 
              beforeImage={PROJECTS[0].beforeImage!} 
              afterImage={PROJECTS[0].image} 
              title={PROJECTS[0].title} 
              location={PROJECTS[0].location}
            />
          </div>

        </div>
      </section>

      {/* SECTION 6 — WHY CHOOSE US */}
      <section className="bg-brand-card/20 border-y border-white/5 py-24 sm:py-32 relative">
        <div className="absolute top-1/2 left-10 glow-accent opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F5B942] font-semibold block">Elite Comparison</span>
                <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  How We Redefine.
                </h2>
                <div className="h-1 w-20 bg-brand-red rounded-full" />
              </div>

              <p className="text-sm text-brand-muted leading-relaxed font-sans font-light">
                General contractors treat roofing as an obstacle to survive before they collect handshakes. We treat it as an engineered crown layout designed for lasting defense.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3 text-xs p-3 rounded-xl bg-orange-950/10 border border-orange-500/20">
                  <span className="text-[#F5B942] font-semibold">✔ Exceptional Craftsmanship</span>
                  <span className="text-brand-muted text-[11px] block mt-1">We utilize fully certified in-house master smiths who study split slate tolerances raw on stone.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs p-3 rounded-xl bg-orange-950/10 border border-orange-500/20">
                  <span className="text-[#F5B942] font-semibold">✔ Transparent Pricing</span>
                  <span className="text-brand-muted text-[11px] block mt-1">Guaranteed pricing models without single itemized extras or change fee maneuvers.</span>
                </div>
              </div>
            </div>

            {/* Right Comparison Bento Column */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-neutral-950 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6 opacity-60">
                <div className="flex items-center space-x-2 text-neutral-500">
                  <span className="h-2 w-2 rounded-full bg-neutral-600" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Standard Contractors</span>
                </div>
                
                <ul className="space-y-4 text-xs font-sans text-[#A0A0A0]">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-brand-red mt-0.5">✕</span>
                    <span>Subcontracted, uncertified day labor crews</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-brand-red mt-0.5">✕</span>
                    <span>Basic shingle layers without high-grade ridge airflow</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-brand-red mt-0.5">✕</span>
                    <span>Rough variable bids that scale mid-construction</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-brand-red mt-0.5">✕</span>
                    <span>5-Year standard labor guarantees that expire early</span>
                  </li>
                </ul>
              </div>

              {/* Roofing Redefined Standard (High visibility) */}
              <div className="bg-brand-card border-2 border-brand-red rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl">
                <div className="absolute top-4 right-4 bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold">
                  REDEFINED STANDARD
                </div>

                <div className="flex items-center space-x-2 text-brand-red">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Roofing Redefined</span>
                </div>

                <ul className="space-y-4 text-xs font-sans text-white">
                  <li className="flex items-start space-x-2.5 font-medium">
                    <span className="text-[#F5B942] font-semibold mt-0.5">✔</span>
                    <span>Permanent in-house master craftsmen</span>
                  </li>
                  <li className="flex items-start space-x-2.5 font-medium">
                    <span className="text-[#F5B942] font-semibold mt-0.5">✔</span>
                    <span>Custom structural airflow system shielding thermal decks</span>
                  </li>
                  <li className="flex items-start space-x-2.5 font-medium">
                    <span className="text-[#F5B942] font-semibold mt-0.5">✔</span>
                    <span>100% Fixed contract pricing guarantees</span>
                  </li>
                  <li className="flex items-start space-x-2.5 font-medium">
                    <span className="text-[#F5B942] font-semibold mt-0.5">✔</span>
                    <span>Standard Lifetime Transferable Warranties</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="py-24 sm:py-32 relative select-none">
        <div className="absolute top-1/4 right-0 glow-accent opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F5B942] font-semibold block">Client Endorsements</span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight mt-2 animate-pulse">
                The Verified Word.
              </h2>
            </div>
            
            {/* Slide controllers */}
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button 
                onClick={handleTestimonialPrev}
                className="h-10 w-10 rounded-xl bg-brand-card hover:bg-neutral-800 text-white flex items-center justify-center border border-white/5 cursor-pointer"
              >
                ◀
              </button>
              <button 
                onClick={handleTestimonialNext}
                className="h-10 w-10 rounded-xl bg-brand-card hover:bg-neutral-800 text-white flex items-center justify-center border border-white/5 cursor-pointer"
              >
                ▶
              </button>
            </div>
          </div>

          {/* Testimonial Active Slider element */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-brand-card/85 backdrop-blur-md border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
              >
                
                {/* Large 5 Star Rating visual */}
                <div className="w-full md:w-2/3 space-y-6">
                  <div className="flex items-center space-x-1 bg-yellow-500/10 border border-yellow-500/20 py-1.5 px-3 rounded-full w-fit">
                    {[...Array(TESTIMONIALS[currentTestimonialIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5B942] text-[#F5B942]" />
                    ))}
                    <span className="font-mono text-[10px] text-[#F5B942] pl-2 font-bold uppercase">5.0 Master Grade Verified</span>
                  </div>

                  <p className="text-base sm:text-lg italic text-white font-sans font-light leading-relaxed">
                    "{TESTIMONIALS[currentTestimonialIndex].comment}"
                  </p>

                  <div className="pt-2">
                    <span className="font-display font-bold text-white block">
                      {TESTIMONIALS[currentTestimonialIndex].name}
                    </span>
                    <span className="text-xs text-brand-muted block font-sans">
                      {TESTIMONIALS[currentTestimonialIndex].role} &mdash; <span className="text-[#F5B942]">{TESTIMONIALS[currentTestimonialIndex].location}</span>
                    </span>
                  </div>
                </div>

                {/* Avatar Display */}
                <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
                  <div className="relative rounded-full overflow-hidden border-2 border-brand-red aspect-square w-24">
                    <img 
                      src={TESTIMONIALS[currentTestimonialIndex].avatar} 
                      alt={TESTIMONIALS[currentTestimonialIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brand-muted bg-white/5 border border-white/5 px-3 py-1 rounded">
                      Material System: {TESTIMONIALS[currentTestimonialIndex].projectType}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION 8 — PROCESS */}
      <section id="process" className="bg-brand-card/20 border-y border-white/5 py-24 sm:py-32 relative">
        <div className="absolute top-1/2 left-10 glow-accent opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F5B942] font-semibold block">Craft Sequence</span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight mt-2">
                The Construction Standard.
              </h2>
            </div>
            <p className="text-sm text-brand-muted max-w-sm mt-3 md:mt-0 leading-relaxed font-sans font-light">
              We execute our custom replacements in four strict tactical stages, keeping your site clean and operations transparent.
            </p>
          </div>

          {/* Interactive Timeline Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Timeline Left Trigger Column */}
            <div className="lg:col-span-4 space-y-3.5">
              {PROCESS_STEPS.map((step) => {
                const isSelected = activeProcessStep === step.step;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveProcessStep(step.step)}
                    className={`p-5 rounded-2xl cursor-pointer text-left transition-all duration-300 border flex items-center space-x-4 ${
                      isSelected
                        ? 'bg-neutral-905 border-brand-red text-white shadow-xl shadow-brand-red/5'
                        : 'bg-transparent border-transparent hover:bg-white/5 text-brand-muted'
                    }`}
                  >
                    <span className={`font-mono text-xl font-bold ${isSelected ? 'text-brand-red' : 'text-neutral-700'}`}>
                      {step.step}
                    </span>
                    <div>
                      <span className="font-display font-medium text-sm block">{step.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline Right Show Case Column */}
            <div className="lg:col-span-8 bg-brand-card border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl">
              {(() => {
                const currentStep = PROCESS_STEPS.find(s => s.step === activeProcessStep) || PROCESS_STEPS[0];
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="inline-block px-3.5 py-1 bg-brand-red/10 text-brand-red text-[11px] font-mono rounded-full border border-brand-red/20 font-bold uppercase">
                        Stage {currentStep.step} Details
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
                        {currentStep.title}
                      </h3>
                      <p className="text-xs text-[#F5B942] uppercase font-mono tracking-widest leading-none">
                        {currentStep.subtitle}
                      </p>

                      <p className="text-sm text-brand-muted leading-relaxed font-sans font-light">
                        {currentStep.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-mono uppercase text-white tracking-widest block mb-2">Stage Checklist</span>
                        {currentStep.detailPoints.map((point, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-brand-muted">
                            <span className="text-brand-red font-semibold font-mono">✔</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-[250px] md:h-auto rounded-2xl overflow-hidden relative group">
                      <img 
                        src={currentStep.image} 
                        alt={currentStep.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 font-mono text-[9px] text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                        Secure Construction Phase
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9 — EMERGENCY SERVICES */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute top-1/4 left-10 glow-accent opacity-35" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EmergencyForm />
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section id="faq" className="py-24 sm:py-32 bg-brand-card/10 border-y border-white/5 relative">
        <div className="absolute top-1/3 right-10 glow-accent-amber opacity-30" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F5B942] font-semibold block">Inquiries</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-none">
              Client FAQ.
            </h2>
            <div className="h-1 w-20 bg-brand-red rounded-full mx-auto" stroke-width="5" />
          </div>

          {/* Accordion List blocks with custom icons */}
          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = activeFAQ === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-brand-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between text-white font-medium hover:text-[#F5B942] cursor-pointer"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <HelpCircle className="w-5 h-5 text-brand-red shrink-0" />
                      <span className="font-display text-base tracking-tight leading-snug">{faq.question}</span>
                    </div>
                    <span className={`text-xl transition-transform font-bold ${isOpen ? 'rotate-180 text-brand-red' : 'text-neutral-600'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-white/5 text-sm text-brand-muted font-sans font-light leading-relaxed pl-12.5">
                          {faq.answer}
                          <span className="block font-mono text-[9px] text-[#F5B942] uppercase tracking-widest mt-4">
                            Topic: {faq.category} Standard
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DYNAMIC ESTIMATE CONFIGURATOR INTEGRATED DIRECTLY FOR MAXIMUM WOW FACTOR */}
      <section className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F5B942] font-semibold block">Digital Tool</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-none leading-tight">
              Real-Time Proposal Configurator.
            </h2>
            <p className="text-sm text-[#A0A0A0] max-w-md mx-auto leading-relaxed">
              Play with real materials constraints to design and value-engineer your premium roof package online.
            </p>
          </div>

          <EstimateCalculator />
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-[#050505] to-[#100505] relative overflow-hidden">
        {/* Extreme Red Glimmer overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-radial-gradient(circle at bottom, rgba(211, 47, 47, 0.12) 0%, rgba(0,0,0,0) 80%) pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8 select-none">
          
          <span className="font-mono text-[10px] tracking-widest text-[#F5B942] bg-brand-gold-muted/10 border border-brand-gold-muted px-4 py-1.5 rounded-full uppercase font-bold">
            Secure Safe Havens
          </span>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-none">
            READY TO PROTECT YOUR HOME?
          </h2>
          <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto leading-relaxed font-sans font-light">
            Secure full peace of mind. Join the elite network of custom estates that hold permanent architectural shields.
          </p>

          <div className="max-w-2xl mx-auto bg-brand-card/45 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-xl text-left">
            {!scheduleSuccess ? (
              <form onSubmit={handleQuickSchedule} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-muted uppercase tracking-wider block">Target Date</label>
                    <input 
                      type="date"
                      required
                      value={scheduleDate}
                      onChange={(e) => setScheduleDate(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/10 text-xs text-white px-3.5 py-3 rounded-xl focus:border-brand-red focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-muted uppercase tracking-wider block">Assessment Type</label>
                    <select
                      value={scheduleService}
                      onChange={(e) => setScheduleService(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/10 text-xs text-brand-muted px-3.5 py-3 rounded-xl focus:border-brand-red focus:outline-none cursor-pointer"
                    >
                      <option value="Inspect">Forensic Drone Inspection (Recommended)</option>
                      <option value="Metal">Matte-Black Metal Consultant</option>
                      <option value="Slate">Italian Natural Slate Consultant</option>
                      <option value="Repair">Target Damage / Leak assessment</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Your Street Address"
                    className="w-full bg-neutral-900 border border-white/10 text-xs px-3.5 py-3 rounded-xl focus:border-brand-red focus:outline-none placeholder-brand-muted"
                  />
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone contact"
                    className="w-full bg-neutral-900 border border-white/10 text-xs px-3.5 py-3 rounded-xl focus:border-brand-red focus:outline-none placeholder-brand-muted"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-neutral-100 hover:text-brand-bg text-white font-mono tracking-wider text-xs font-medium py-3.5 px-6 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>SCHEDULE EXECUTIVE SITE PLAN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="h-12 w-12 bg-emerald-500 rounded-full mx-auto flex items-center justify-center text-white text-lg font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg text-white">Consultation Lock confirmed!</h4>
                  <p className="text-xs text-brand-muted max-w-sm mx-auto leading-relaxed mt-2 font-sans">
                    We have successfully registered your site inspection request for <span className="text-white font-medium">{scheduleDate}</span>. Our executive design car will arrive matching your time preference.
                  </p>
                </div>
                <button
                  onClick={() => setScheduleSuccess(false)}
                  className="text-xs font-mono text-brand-red hover:underline cursor-pointer"
                >
                  Resign address values
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTION 12 — FOOTER */}
      <footer className="bg-neutral-950 border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 mb-12">
            
            {/* Sitemap left hand logo col */}
            <div className="md:col-span-4 space-y-4 text-left">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30">
                  <Shield className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <span className="font-display font-bold text-lg tracking-wider text-white">
                    ROOFING <span className="text-brand-red">REDEFINED</span>
                  </span>
                </div>
              </div>

              <p className="text-xs text-brand-muted font-sans font-light leading-relaxed max-w-xs">
                Establishing the world-class standard in custom architectural roof design, engineering, and permanent environmental packaging.
              </p>

              <div className="pt-3 font-mono text-[10px] text-brand-muted space-y-1">
                <p>Charter ID: <span className="text-white">US-RRF-1394-CA</span></p>
                <p>Licensed & Insured: <span className="text-white">$10M Safe-Hold Ledger</span></p>
              </div>
            </div>

            {/* Sitemap right hand details */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#F5B942] block">Navigation</span>
                <ul className="space-y-2.5 text-xs font-sans text-brand-muted">
                  <li>
                    <button onClick={() => scrollToElementId('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                      The Standard Heritage
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToElementId('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                      Selective Capabilities
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToElementId('showcase')} className="hover:text-white transition-colors cursor-pointer text-left">
                      Portfolio Masonry
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToElementId('process')} className="hover:text-white transition-colors cursor-pointer text-left">
                      Schedules Sequence
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#F5B942] block">Contact Details</span>
                <ul className="space-y-2.5 text-xs font-mono text-brand-muted">
                  <li className="text-white">
                    1-800-555-ROOF
                  </li>
                  <li className="text-xs font-sans">
                    concierge@roofingredefined.com
                  </li>
                  <li className="text-xs font-sans">
                    600 Madison Avenue, New York, NY
                  </li>
                  <li className="text-xs font-sans">
                    100 Ocean Avenue, Santa Monica, CA
                  </li>
                </ul>
              </div>

              <div className="space-y-4 col-span-2 sm:col-span-1">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#F5B942] block">Active Regions</span>
                <p className="text-xs text-brand-muted font-sans leading-relaxed">
                  We deploy forensic site teams in Aspen, Greenwich, Beverly Hills, Malibu, Hamptons, and South Florida.
                </p>
              </div>

            </div>

          </div>

          {/* Core Footer Trademark credits */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-brand-muted space-y-4 sm:space-y-0">
            <div>
              <span>© {new Date().getFullYear()} Roofing Redefined. All rights reserved.</span>
            </div>
            
            <div className="flex space-x-6">
              <span className="hover:text-white cursor-pointer select-none">Privacy Charter</span>
              <span className="hover:text-white cursor-pointer select-none">ASCE Structural Agreement</span>
            </div>
          </div>

        </div>
      </footer>

      {/* LIGHTBOX FOR EXPLORING LARGE DETAIL PANELS IN PORTFOLIO */}
      <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />

    </div>
  );
}
