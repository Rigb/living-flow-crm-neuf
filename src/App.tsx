import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="flex min-h-screen bg-[#050D14] text-white overflow-hidden relative">
      {/* Background 3D */}
      <Background3D />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 relative flex flex-col overflow-hidden">
        {/* TopBar */}
        <TopBar />

        {/* Content Area */}
        <div className="flex-1 flex items-center justify-center p-8 relative pointer-events-none">
          <div className="text-center z-10 bg-[#050D14]/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 pointer-events-auto">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Living Flow CRM – Version TROIS</h1>
            <p className="text-gray-400 max-w-md mx-auto">
              L'intégration 3D a commencé. Une sphère distordue est désormais visible en arrière-plan.
              C'est la base stable sur laquelle nous allons construire l'expérience complète.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
