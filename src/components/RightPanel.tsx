import React from 'react';
import { Mail, Settings, MessageSquare, Plus, ExternalLink, ShieldCheck, PieChart, Activity } from 'lucide-react';

const RightPanel = () => {
  return (
    <div className="w-80 h-screen bg-[#0A1118]/95 backdrop-blur-2xl border-l border-white/10 flex flex-col p-6 z-10 overflow-y-auto custom-scrollbar">
      {/* Profile Section */}
      <div className="text-center mb-8 pt-4">
        <div className="relative inline-block mb-4">
          <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-500 p-[2px] rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer">
            <div className="w-full h-full rounded-[1.9rem] bg-[#050D14] flex items-center justify-center text-3xl font-bold text-white overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pauline" alt="Avatar" className="w-full h-full object-cover scale-110" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-xl border-4 border-[#0A1118] flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <ShieldCheck size={14} />
          </div>
        </div>
        <h2 className="text-xl font-bold text-white mb-1 tracking-tight">Pauline Rigb</h2>
        <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em]">Head of Operations</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-4 gap-3 mb-10">
        {[
          { icon: Mail, label: 'Mail', color: 'hover:text-blue-400' },
          { icon: MessageSquare, label: 'Chat', color: 'hover:text-emerald-400' },
          { icon: Plus, label: 'Add', color: 'hover:text-purple-400' },
          { icon: Settings, label: 'Settings', color: 'hover:text-orange-400' }
        ].map((item, i) => (
          <button 
            key={i} 
            title={item.label}
            className={`aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${item.color} hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg shadow-black/20`}
          >
            <item.icon size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        ))}
      </div>

      {/* Real-time Metrics Section */}
      <div className="mb-10 space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em]">Live Performance</h3>
          <Activity size={12} className="text-emerald-500 animate-pulse" />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <PieChart size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Efficiency</span>
            </div>
            <div className="text-xl font-bold text-white tracking-tight">94.2%</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={14} className="text-emerald-400" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uptime</span>
            </div>
            <div className="text-xl font-bold text-white tracking-tight">99.9%</div>
          </div>
        </div>
      </div>

      {/* Automations Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em]">Active Flows</h3>
          <button className="p-1.5 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-all">
            <Plus size={14} />
          </button>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Email Campaign', status: 'RUNNING', progress: 65, color: 'bg-blue-500' },
            { label: 'SEO Analysis', status: 'COMPLETED', progress: 100, color: 'bg-emerald-500' },
            { label: 'Video Render', status: 'PROCESSING', progress: 42, color: 'bg-orange-500' },
          ].map((flow, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 group cursor-pointer hover:border-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{flow.label}</span>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/5 tracking-widest ${flow.progress === 100 ? 'text-emerald-400' : 'text-blue-400'}`}>
                  {flow.progress}%
                </span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ease-out ${flow.color}`}
                  style={{ width: `${flow.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Hub Footer */}
      <div className="mt-auto pt-6">
        <div className="relative p-5 rounded-[2rem] bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent border border-blue-500/20 overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
          <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2 relative z-10">
            Business Hub <ExternalLink size={14} className="text-blue-400" />
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-5 relative z-10 font-medium">
            Unified command center for AI-driven business intelligence and process monitoring.
          </p>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 relative z-10">
            Open Command Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
