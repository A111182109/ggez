import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { User, Map } from 'lucide-react';
import PersonalProfile from './components/PersonalProfile';
import TravelPlan from './components/TravelPlan';

export default function App() {
  const [activeTab, setActiveTab] = useState<'profile' | 'travel'>('profile');

  return (
    <div className="min-h-screen bg-[var(--color-natural-bg)] text-[var(--color-natural-text)] font-sans p-4 md:p-8">
      
      {/* Navigation */}
      <nav className="max-w-md mx-auto mb-12 flex gap-4 justify-center sticky top-4 z-50">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex-1 flex items-center justify-center py-2.5 px-6 rounded-full text-sm transition-colors border ${
            activeTab === 'profile' 
              ? 'bg-[var(--color-natural-blue)] text-white border-[var(--color-natural-blue)]' 
              : 'bg-transparent text-[var(--color-natural-text)] border-[var(--color-natural-sand)] hover:bg-[var(--color-natural-sand)]/50'
          }`}
        >
          <User size={16} className="mr-2" />
          個人履歷
        </button>
        <button
          onClick={() => setActiveTab('travel')}
          className={`flex-1 flex items-center justify-center py-2.5 px-6 rounded-full text-sm transition-colors border ${
            activeTab === 'travel' 
              ? 'bg-[var(--color-natural-blue)] text-white border-[var(--color-natural-blue)]' 
              : 'bg-transparent text-[var(--color-natural-text)] border-[var(--color-natural-sand)] hover:bg-[var(--color-natural-sand)]/50'
          }`}
        >
          <Map size={16} className="mr-2" />
          旅遊規劃
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="pb-12 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'profile' && <PersonalProfile key="profile" />}
          {activeTab === 'travel' && <TravelPlan key="travel" />}
        </AnimatePresence>
      </main>

    </div>
  );
}
