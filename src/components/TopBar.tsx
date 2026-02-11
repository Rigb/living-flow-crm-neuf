import React from 'react';
import { Search, ChevronRight, Plus, MoreHorizontal, LayoutGrid, List, BarChart2 } from 'lucide-react';

const TopBar = () => {
  return (
    <header className="h-[64px] border-b border-emerald-500/10 bg-black/40 backdrop-blur-2xl flex items-center justify-between px-6 z-30">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <span className="text-black font-black text-lg tracking-tighter italic">LF</span>
          </div>
        </div>

        <nav className="flex items-center gap-3 text-[13px] font-medium text-gray-500">
          <ChevronRight size={14} className="text-emerald-500/50" />
          <span className="text-white">Dashboard</span>
          <ChevronRight size={14} className="text-emerald-500/50" />
          <span className="hover:text-emerald-400 cursor-pointer transition-colors">Home</span>
        </nav>
      </div>

      <div className="flex-1 max-w-xl mx-12">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Create, Analyze, Automate..."
            className="w-full bg-emerald-500/5 border border-emerald-500/10 rounded-full py-2 pl-12 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/30 focus:bg-emerald-500/10 transition-all shadow-inner"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-emerald-500/10 pr-6 text-[11px] font-bold tracking-tight">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">€ 6,552</span>
            <span className="text-gray-500 uppercase tracking-widest text-[9px]">Today</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">€ 8,320</span>
            <span className="text-gray-500 uppercase tracking-widest text-[9px]">This Month</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-[12px] font-bold hover:bg-emerald-500/10 transition-all uppercase tracking-widest">
            <Plus size={14} /> Create
          </button>
          
          <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center p-0.5 group cursor-pointer overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pauline" alt="Profile" className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
