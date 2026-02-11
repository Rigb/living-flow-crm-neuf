import React from 'react';
import { Mail, Settings, MessageSquare, Plus, ExternalLink, ShieldCheck } from 'lucide-react';

const RightPanel = () => {
  return (
    <div className="w-80 h-screen bg-[#0A1118]/80 backdrop-blur-xl border-l border-white/10 flex flex-col p-6 z-10 overflow-y-auto">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <div className="relative inline-block mb-4">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-600 p-1">
            <div className="w-full h-full rounded-[14px] bg-[#050D14] flex items-center justify-center text-3xl font-bold text-white overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pauline" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-lg border-4 border-[#0A1118] flex items-center justify-center text-white">
            <ShieldCheck size={14} />
          </div>
        </div>
        <h2 className="text-xl font-bold text-white mb-1">Pauline</h2>
        <p className="text-gray-500 text-sm font-medium">Head of Operations</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {[Mail, MessageSquare, Plus, Settings].map((Icon, i) => (
          <button key={i} className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all group">
            <Icon size={18} className="group-hover:scale-110 transition-transform" />
          </button>
        ))}
      </div>

      {/* Automations Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Flows</h3>
          <button className="text-blue-400 hover:text-blue-300 transition-colors">
            <Plus size={16} />
          </button>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Email Campaign', status: 'RUNNING', color: 'bg-blue-400' },
            { label: 'SEO Analysis', status: 'COMPLETED', color: 'bg-emerald-400' },
            { label: 'Video Render', status: '72% PROCESSING', color: 'bg-orange-400' },
          ].map((flow, i) => (
            <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{flow.label}</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase mt-1">{flow.status}</span>
              </div>
              <div className={`w-1.5 h-1.5 rounded-full ${flow.color} animate-pulse`} />
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Hub */}
      <div className="mt-auto">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-emerald-600/20 border border-blue-500/20">
          <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            Business Hub <ExternalLink size={14} />
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            Access your unified command center for all AI-driven business processes.
          </p>
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/20">
            Open Command Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
