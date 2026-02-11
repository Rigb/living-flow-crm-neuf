import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Zap, 
  MessageSquare, 
  HelpCircle,
  LogOut,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Contacts', icon: Users },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Automations', icon: Zap },
    { name: 'Messages', icon: MessageSquare },
  ];

  const secondaryItems = [
    { name: 'Settings', icon: Settings },
    { name: 'Help', icon: HelpCircle },
  ];

  return (
    <aside className="w-[260px] h-screen bg-[#0A1118] border-r border-white/10 flex flex-col z-20 shrink-0">
      {/* Brand Header */}
      <div className="h-20 flex items-center px-6 border-b border-white/5">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
            <Zap className="text-white fill-current" size={22} />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-tight tracking-tight">Living Flow</span>
            <span className="text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase">Enterprise</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto custom-scrollbar">
        <div className="px-4 mb-4">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em]">Main Menu</p>
        </div>
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeItem === item.name 
                ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-inner shadow-blue-500/5' 
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} className={activeItem === item.name ? 'text-blue-400' : 'text-gray-500 group-hover:text-white transition-colors'} />
              <span className="text-sm font-semibold tracking-wide">{item.name}</span>
            </div>
            {activeItem === item.name && (
              <ChevronRight size={14} className="text-blue-400 animate-in fade-in slide-in-from-left-2" />
            )}
          </button>
        ))}

        <div className="px-4 pt-8 mb-4">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em]">System</p>
        </div>
        {secondaryItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
              activeItem === item.name 
                ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <item.icon size={20} className={activeItem === item.name ? 'text-blue-400' : 'text-gray-500 group-hover:text-white transition-colors'} />
            <span className="text-sm font-semibold tracking-wide">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Footer Profile Toggle */}
      <div className="p-4 border-t border-white/5">
        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-rose-500/10 text-gray-500 hover:text-rose-400 transition-all duration-300 group">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Disconnect</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
