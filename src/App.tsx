import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import RightPanel from './components/RightPanel';

function App() {
  return (
    <div className="flex min-h-screen bg-[#020609] text-white overflow-hidden font-sans selection:bg-emerald-500/30">
      {/* Dynamic Background Image (from screenshot) */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020609] via-transparent to-[#020609] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Sidebar (240px) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
        {/* TopBar (64px) */}
        <TopBar />

        {/* Content Scrollable Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar relative">
          <div className="h-full w-full flex flex-col items-center justify-center p-12">
            
            {/* 3D Scene Mockup (Phase 3 Integration) */}
            <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
              {/* Central Globe Mockup */}
              <div className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-500/20 via-emerald-400/40 to-emerald-300/20 shadow-[0_0_100px_rgba(16,185,129,0.2)] flex items-center justify-center group cursor-pointer transition-transform duration-700 hover:scale-110">
                <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border border-emerald-500/10 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="text-center">
                  <h2 className="text-2xl font-black tracking-[0.3em] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase italic">Living Flow</h2>
                  <div className="mt-2 h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                </div>
              </div>

              {/* Orbital Nodes Mockup */}
              {[
                { label: 'AI Studios', pos: 'top-0 left-1/4', size: 'w-32 h-32' },
                { label: 'Web Creation', pos: 'top-0 right-1/4', size: 'w-40 h-40' },
                { label: 'CRM Hub', pos: 'bottom-0 left-1/4', size: 'w-36 h-36' },
                { label: 'Influencer IA', pos: 'bottom-1/4 right-0', size: 'w-36 h-36' },
                { label: 'Automations', pos: 'bottom-0 left-1/2 -translate-x-1/2', size: 'w-28 h-28' },
              ].map((node, i) => (
                <div key={i} className={`absolute ${node.pos} ${node.size} rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md flex items-center justify-center group cursor-pointer hover:bg-emerald-500/10 transition-all duration-500 hover:border-emerald-500/40 shadow-lg shadow-black/40`}>
                  <div className="absolute inset-0 rounded-full border border-emerald-500/10 group-hover:animate-pulse" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400/80 group-hover:text-emerald-300 transition-colors drop-shadow-md">{node.label}</span>
                </div>
              ))}

              {/* Orbital Rings (CSS) */}
              <div className="absolute w-[80%] aspect-square rounded-full border border-emerald-500/5 -rotate-12 pointer-events-none" />
              <div className="absolute w-[70%] aspect-square rounded-full border border-emerald-500/5 rotate-45 pointer-events-none" />
            </div>

            {/* Bottom Widgets Placeholder */}
            <div className="w-full max-w-5xl mt-12 flex justify-between gap-6 opacity-40">
               <div className="h-1 bg-emerald-500/20 flex-1 rounded-full" />
               <div className="h-1 bg-emerald-500/20 flex-1 rounded-full" />
               <div className="h-1 bg-emerald-500/20 flex-1 rounded-full" />
            </div>
          </div>
        </main>
      </div>

      {/* Right Panel (340px) */}
      <RightPanel />
    </div>
  );
}

export default App;
