import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'RUNNING' | 'COMPLETED' | 'PROCESSING';
  progress?: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description, icon: Icon, status, progress }) => {
  const statusColors = {
    RUNNING: 'text-blue-400',
    COMPLETED: 'text-emerald-400',
    PROCESSING: 'text-orange-400',
  };

  return (
    <div className="bg-[#0A1118]/40 backdrop-blur-sm border border-white/5 rounded-xl p-5 hover:bg-white/5 transition-all duration-300 group cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-white/5 text-gray-400 group-hover:text-white transition-colors">
          <Icon size={20} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-white font-semibold text-sm">{title}</h4>
            <span className={`text-[10px] font-bold tracking-widest ${statusColors[status]}`}>
              {status}
            </span>
          </div>
          <p className="text-gray-500 text-xs mb-3 line-clamp-1">{description}</p>
          {progress !== undefined && (
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${statusColors[status].replace('text-', 'bg-')}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
