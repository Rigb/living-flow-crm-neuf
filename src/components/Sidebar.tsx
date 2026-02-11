import React from 'react';
import { Home, Users, BarChart2, Settings, MessageSquare, Briefcase } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Users, label: 'Contacts', active: false },
    { icon: Briefcase, label: 'Deals', active: false },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: BarChart2, label: 'Analytics', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 h-screen bg-[#0A1118]/80 backdrop-blur-md border-r border-white/10 flex flex-col p-6 z-10">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white">L</div>
        <span className="text-xl font-bold tracking-tight text-white">Living Flow</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
              item.active 
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
            }`}
          >
            <item.icon size={20} className={item.active ? 'text-blue-400' : 'group-hover:text-white'} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 border border-white/20" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Admin User</span>
            <span className="text-xs text-gray-500">Premium Plan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
