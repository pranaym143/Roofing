import React, { useState, useEffect } from 'react';
import { ShieldAlert, Truck, Send, AlertTriangle, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function EmergencyForm() {
  const [zipcode, setZipcode] = useState('');
  const [issue, setIssue] = useState('leak');
  const [phone, setPhone] = useState('');
  const [isDispatched, setIsDispatched] = useState(false);
  const [eta, setEta] = useState(24);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDispatched && eta > 8) {
      interval = setInterval(() => {
        setEta((prev) => prev - 1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isDispatched, eta]);

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipcode || !phone) return;
    setIsDispatched(true);
    // Randomize static ETA for realism
    setEta(Math.floor(Math.random() * 8) + 14);
  };

  return (
    <div className="bg-neutral-950/80 border border-brand-red/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden select-none">
      {/* Background Red Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
        
        {/* Left Hand: Critical Pitch Call */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center space-x-2.5 bg-brand-red/10 border border-brand-red/20 rounded-full py-1.5 px-3.5 w-fit">
            <ShieldAlert className="w-4 h-4 text-brand-red animate-bounce" />
            <span className="font-mono text-[10px] text-brand-red tracking-wider font-bold uppercase">Critical Dispatch Terminal</span>
          </div>

          <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight leading-none">
            Instant Storm Response
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed">
            Major leaks, fallen branches, or compromised shingle barriers. Enter your location to activate immediate high-speed heavy tarp protection.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-3 text-xs font-mono">
            <div className="border border-white/5 bg-neutral-950/60 rounded-xl p-3">
              <span className="text-[10px] text-brand-muted block uppercase">Crew Standby</span>
              <span className="text-emerald-400 font-bold block mt-1">4 Active Teams</span>
            </div>
            <div className="border border-white/5 bg-neutral-950/60 rounded-xl p-3">
              <span className="text-[10px] text-brand-muted block uppercase">Average Dispatch</span>
              <span className="text-white font-bold block mt-1">18 Mins Max</span>
            </div>
          </div>
        </div>

        {/* Right Hand: Action Controller */}
        <div className="w-full md:w-1/2">
          {!isDispatched ? (
            <form onSubmit={handleDispatch} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase tracking-wider text-brand-muted block">Emergency Issue</label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 text-xs px-3.5 py-3 rounded-xl text-white focus:outline-none focus:border-brand-red transition-all cursor-pointer"
                >
                  <option value="leak">Severe Flowing Water / Leak</option>
                  <option value="wind">Wind Failure / Exposed Decking</option>
                  <option value="impact">Tree strike / Structural impact</option>
                  <option value="hail">Major Hail compromise</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-brand-muted block">Your Zipcode</label>
                  <input
                    type="text"
                    required
                    pattern="[0-9]{5}"
                    placeholder="90210"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 text-xs px-3.5 py-3 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-brand-muted block">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 012-3456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 text-xs px-3.5 py-3 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-red transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full group bg-brand-red hover:bg-neutral-100 hover:text-brand-bg text-white font-medium text-xs font-mono tracking-wider py-3.5 px-6 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-brand-red/10 active:scale-95"
              >
                <span>INITIATE EMERGENCY DISPATCH</span>
                <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brand-red/5 border border-brand-red/40 rounded-2xl p-6 text-center space-y-4"
            >
              <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-brand-red/10 mx-auto border border-brand-red/40">
                <Truck className="h-6 w-6 text-brand-red animate-bounce" />
                <span className="absolute inset-x-0 h-4 w-4 bg-brand-red/20 blur-md pointer-events-none rounded-full" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F5B942]">DISPATCH CONFIRMED</span>
                <h4 className="text-white text-base font-semibold font-display">Response Unit #413 En Route</h4>
                <p className="text-[11px] text-brand-muted max-w-sm mx-auto leading-relaxed pt-1">
                  Active rescue truck with heavy-duty thermal water block tarps departs immediately. We have logged contact point <span className="text-white font-medium">{phone}</span> near ZIP <span className="text-white font-medium">{zipcode}</span>.
                </p>
              </div>

              {/* Dynamic countdown visualizer */}
              <div className="bg-neutral-900/80 rounded-xl p-3 inline-block border border-white/5 font-mono">
                <span className="text-[10px] text-brand-muted block uppercase">ETA COUNTDOWN</span>
                <span className="text-lg text-white font-bold block mt-0.5">{eta} Minutes</span>
              </div>

              <button
                onClick={() => setIsDispatched(false)}
                className="text-[10px] font-mono text-brand-muted underline hover:text-white cursor-pointer mt-2 block mx-auto"
              >
                Cancel or Signal Resolution
              </button>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
