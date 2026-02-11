import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  User, 
  Cpu, 
  PenTool, 
  Users as UsersIcon, 
  Video, 
  Box, 
  Database, 
  Zap, 
  Library, 
  Settings,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Viral Video');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Pauline', icon: User },
    { name: 'Studios', icon: Cpu },
    { name: 'AI Writing', icon: PenTool },
    { name: 'IA Influencer', icon: UsersIcon },
    { name: 'Viral Video', icon: Video },
    { name: 'Webflow Builder', icon: Box },
    { name: 'CRM', icon: Database },
    { name: 'Automations', icon: Zap },
    { name: 'Library', icon: Library },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-[240px] h-screen bg-black/40 backdrop-blur-xl border-r border-emerald-500/10 flex flex-col z-30 shrink-0">
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-300 group ${
              activeItem === item.name 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                : 'text-gray-400 hover:text-emerald-300 hover:bg-emerald-500/5 border border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} className={activeItem === item.name ? 'text-emerald-400' : 'text-gray-500 group-hover:text-emerald-400 transition-colors'} />
              <span className="text-[13px] font-medium tracking-tight">{item.name}</span>
            </div>
            {activeItem === item.name && (
              <ChevronRight size={14} className="text-emerald-400 animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
