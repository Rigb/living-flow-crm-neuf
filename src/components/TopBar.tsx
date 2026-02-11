import React from 'react';
import { Search, Bell, Command, ChevronDown, Activity, Globe } from 'lucide-react';

const TopBar = () => {
  return (
    <header className="h-20 border-b border-white/5 bg-[#050D14]/80 backdrop-blur-xl flex items-center justify-between px-8 z-20">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search commands or data..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-20 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500">
            <Command size={10} /> K
          </div>
        </div>
      </div>

      {/* System Status & Actions */}
      <div className="flex items-center gap-6">
        {/* Status Indicators */}
        <div className="hidden lg:flex items-center gap-4 border-r border-white/10 pr-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nodes Active</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="text-blue-400" size={14} />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">2.4ms Latency</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="text-purple-400" size={14} />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Sync</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all group">
            <Bell size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#050D14]" />
          </button>
          
          <button className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-blue-600/20">
              LF
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs font-bold text-white tracking-wide">Workspace</span>
              <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">Production</span>
            </div>
            <ChevronDown size={14} className="text-gray-500 group-hover:text-white transition-colors ml-1" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
