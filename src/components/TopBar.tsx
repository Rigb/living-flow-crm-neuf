import React from 'react';
import { Search, Bell, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const TopBar = () => {
  const stats = [
    { label: 'Active Deals', value: '42', icon: Activity, color: 'text-blue-400' },
    { label: 'Total Revenue', value: '$128.5k', icon: DollarSign, color: 'text-emerald-400' },
    { label: 'New Leads', value: '+12', icon: Users, color: 'text-purple-400' },
    { label: 'Win Rate', value: '64%', icon: TrendingUp, color: 'text-orange-400' },
  ];

  return (
    <div className="h-20 border-b border-white/10 bg-[#050D14]/50 backdrop-blur-md flex items-center justify-between px-8 z-10">
      <div className="flex items-center gap-8 flex-1">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>

        <div className="flex items-center gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                <stat.icon size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</span>
                <span className="text-sm font-bold text-white">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 ml-8">
        <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#050D14]" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
