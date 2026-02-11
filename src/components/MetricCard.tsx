import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon: Icon, color }) => {
  return (
    <div className="bg-[#0A1118]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0A1118]/80 group">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-white/5 ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} />
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full bg-white/5 ${change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">{title}</h3>
      <p className="text-white text-3xl font-bold tracking-tight">{value}</p>
    </div>
  );
};

export default MetricCard;
