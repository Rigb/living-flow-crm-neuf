import React from 'react';
import { Mail, Settings, MessageSquare, Plus, ExternalLink, ShieldCheck, Box, List, BarChart3, ChevronRight, Minimize2, Maximize2 } from 'lucide-react';

const RightPanel = () => {
  return (
    <div className="w-[340px] h-screen bg-black/60 backdrop-blur-3xl border-l border-emerald-500/10 flex flex-col p-5 z-30 overflow-y-auto custom-scrollbar">
      {/* Header Profile Toggle */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-lg font-bold text-white tracking-tight">Pauline</h2>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg hover:bg-white/5 text-gray-500 transition-colors">
            <Minimize2 size={14} />
          </button>
          <button className="p-1.5 rounded-lg hover:bg-white/5 text-gray-500 transition-colors">
            <Settings size={14} />
          </button>
        </div>
      </div>

      {/* Main Profile Image Area */}
      <div className="relative mb-6 group cursor-pointer">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pauline" 
            alt="Pauline AI" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em]">Active AI Agent</span>
          </div>
        </div>
      </div>

      {/* Quick Access Tools */}
      <div className="grid grid-cols-5 gap-2 mb-8">
        {[Box, List, Mail, Plus, Settings].map((Icon, i) => (
          <button key={i} className="aspect-square rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all group">
            <Icon size={18} className="group-hover:scale-110 transition-transform" />
          </button>
        ))}
      </div>

      {/* System Logs / Activity */}
      <div className="flex-1 space-y-3 mb-8">
        {[
          { text: 'Opening AI Studios module...', status: 'running' },
          { text: 'Analyzing current data...', status: 'processing' },
          { text: 'Generating new content draft...', status: 'waiting' },
        ].map((log, i) => (
          <div key={i} className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-between group cursor-pointer hover:bg-emerald-500/10 transition-all border-l-2 border-l-emerald-500/30">
            <span className="text-[12px] text-gray-400 font-medium group-hover:text-emerald-300 transition-colors">{log.text}</span>
            <ChevronRight size={14} className="text-emerald-500/30 group-hover:text-emerald-500 transition-colors" />
          </div>
        ))}
      </div>

      {/* Tabs Section */}
      <div className="flex items-center gap-1 p-1 rounded-xl bg-black/40 border border-emerald-500/10 mb-6">
        {['Logs', 'Tasks', 'Stats'].map((tab) => (
          <button key={tab} className={`flex-1 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all ${tab === 'Logs' ? 'bg-emerald-500/10 text-emerald-400' : 'text-gray-500 hover:text-gray-300'}`}>
            {tab}
          </button>
        ))}
        <button className="p-1.5 text-emerald-500/50 hover:text-emerald-500">
          <BarChart3 size={14} />
        </button>
      </div>

      {/* Automations Progress */}
      <div className="space-y-4 mb-6">
        {[
          { label: 'Email Campaign', status: 'RUNNING', color: 'bg-emerald-500', progress: 65, icon: Mail },
          { label: 'SEO Analysis', status: 'COMPLETED', color: 'bg-emerald-400', progress: 100, icon: BarChart3 },
          { label: 'Video Render', status: '72% PROCESSING', color: 'bg-emerald-600', progress: 72, icon: Box },
        ].map((flow, i) => (
          <div key={i} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <flow.icon size={14} className="text-gray-500 group-hover:text-emerald-400 transition-colors" />
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{flow.label}:</span>
                <span className={`text-[10px] font-black tracking-tighter ${flow.progress === 100 ? 'text-emerald-400' : 'text-emerald-500'}`}>{flow.status}</span>
              </div>
            </div>
            <div className="w-full h-1.5 bg-emerald-500/5 rounded-full overflow-hidden border border-emerald-500/10">
              <div 
                className={`h-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)] ${flow.color}`}
                style={{ width: `${flow.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Widgets */}
      <div className="grid grid-cols-2 gap-3 mt-auto pt-4">
        <button className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-between group hover:bg-emerald-500/10 transition-all">
          <div className="flex items-center gap-2">
            <Box size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Prompt Library</span>
          </div>
          <ChevronRight size={12} className="text-emerald-500/30 group-hover:text-emerald-500" />
        </button>
        <button className="p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-between group hover:bg-emerald-500/10 transition-all">
          <div className="flex items-center gap-2">
            <Settings size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Business Hub</span>
          </div>
          <ChevronRight size={12} className="text-emerald-500/30 group-hover:text-emerald-500" />
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
