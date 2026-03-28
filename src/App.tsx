import { useState } from 'react';
import { Module } from './types';
import Dashboard from './components/Dashboard';
import ModuleView from './components/ModuleView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeModule, setActiveModule] = useState<Module | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-blue-100 selection:text-blue-900">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {!activeModule ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Dashboard onSelectModule={setActiveModule} />
            </motion.div>
          ) : (
            <motion.div
              key="module"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <ModuleView 
                module={activeModule} 
                onBack={() => setActiveModule(null)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 py-8 text-center text-slate-400 text-sm">
        <p>© 2026 Targonca-kezelő Tanulástámogató • KLMN Education alapján</p>
      </footer>
    </div>
  );
}
