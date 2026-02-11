import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import RightPanel from './components/RightPanel';
import MetricCard from './components/MetricCard';
import ModuleCard from './components/ModuleCard';
import { DollarSign, Users, Activity, TrendingUp, Cpu, Globe, Video, PenTool } from 'lucide-react';

function App() {
  const metrics = [
    { title: 'Revenue Today', value: '€ 6,552', change: '+12.5%', icon: DollarSign, color: 'text-emerald-400' },
    { title: 'Total Contacts', value: '8,320', change: '+2.4%', icon: Users, color: 'text-blue-400' },
    { title: 'System Load', value: '24%', change: '-5.0%', icon: Activity, color: 'text-purple-400' },
    { title: 'Growth Rate', value: '64%', change: '+8.1%', icon: TrendingUp, color: 'text-orange-400' },
  ];

  const modules = [
    { title: 'AI Studios', description: 'Opening AI Studios module for content generation...', icon: Cpu, status: 'RUNNING' as const, progress: 65 },
    { title: 'Web Creation', description: 'Analyzing current web data and trends...', icon: Globe, status: 'COMPLETED' as const, progress: 100 },
    { title: 'Viral Video', description: 'Generating new content draft based on viral patterns...', icon: Video, status: 'PROCESSING' as const, progress: 42 },
    { title: 'AI Writing', description: 'Drafting 12 blog posts for the next campaign...', icon: PenTool, status: 'RUNNING' as const, progress: 18 },
  ];

  return (
    <div className="flex min-h-screen bg-[#050D14] text-white overflow-hidden font-sans selection:bg-blue-500/30">
      {/* Sidebar (260px) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* TopBar (80px) */}
        <TopBar />

        {/* Content Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">
          {/* Background Gradient Orbs (Simulated until 3D phase) */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Page Header */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold tracking-tight mb-2 flex items-center gap-4">
                Dashboard <span className="text-sm font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">v1.0.0</span>
              </h1>
              <p className="text-gray-500 font-medium">Welcome back, Pauline. Everything is running smoothly.</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {metrics.map((metric, i) => (
                <MetricCard key={i} {...metric} />
              ))}
            </div>

            {/* Modules Grid */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold tracking-tight">Active Core Modules</h2>
                <button className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest">View all</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map((module, i) => (
                  <ModuleCard key={i} {...module} />
                ))}
              </div>
            </div>

            {/* Placeholder for future sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#0A1118]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 min-h-[300px] flex items-center justify-center border-dashed">
                <p className="text-gray-600 font-bold uppercase tracking-widest">Activity Timeline - Phase 2</p>
              </div>
              <div className="bg-[#0A1118]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 min-h-[300px] flex items-center justify-center border-dashed">
                <p className="text-gray-600 font-bold uppercase tracking-widest">Quick Tips - Phase 2</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Right Panel (320px) */}
      <RightPanel />
    </div>
  );
}

export default App;
