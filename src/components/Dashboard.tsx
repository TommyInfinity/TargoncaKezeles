import { motion } from 'motion/react';
import { modules } from '../data';
import { Module } from '../types';
import { Play, GraduationCap } from 'lucide-react';

interface DashboardProps {
  onSelectModule: (module: Module) => void;
}

export default function Dashboard({ onSelectModule }: DashboardProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-blue-600 text-white rounded-2xl mb-2">
          <GraduationCap className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Targonca-kezelő Tanulástámogató
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Válassz egy modult, olvasd el az összefoglalót, majd teszteld a tudásod interaktív feladatokkal!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {modules.map((module, i) => (
          <motion.button
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => onSelectModule(module)}
            className="group relative bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 text-left flex flex-col h-full transition-all hover:shadow-xl hover:border-blue-200"
          >
            <div className="mb-6 w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <span className="text-xl font-bold">{i + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              {module.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              {module.description}
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
              <Play className="w-4 h-4 fill-current" />
              Modul indítása
            </div>
          </motion.button>
        ))}
      </div>

      <div className="p-8 bg-slate-900 rounded-3xl text-white overflow-hidden relative">
        <div className="relative z-10 space-y-2">
          <h4 className="text-xl font-bold">Tipp a sikeres vizsgához</h4>
          <p className="text-slate-400 text-sm max-w-xl">
            A gépnapló vezetése és a napi ellenőrzések nem csak a vizsgán fontosak, hanem a mindennapi biztonságod alapkövei is. Mindig ellenőrizd a fékeket és a kormány holtjátékát!
          </p>
        </div>
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
