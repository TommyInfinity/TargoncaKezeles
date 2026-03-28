import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { Module, QuestionResult, Question } from '../types';
import Quiz from './Quiz';
import Matching from './Matching';
import { ArrowRight, ArrowLeft, BookOpen, CheckCircle, Clock, AlertCircle, RotateCcw } from 'lucide-react';

interface ModuleViewProps {
  module: Module;
  onBack: () => void;
}

export default function ModuleView({ module, onBack }: ModuleViewProps) {
  const [step, setStep] = useState<'summary' | 'questions' | 'results'>('summary');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const [isRepeating, setIsRepeating] = useState(false);
  const [questions, setQuestions] = useState<Question[]>(module.questions);

  useEffect(() => {
    if (step === 'questions') {
      setQuestionStartTime(Date.now());
    }
  }, [step, currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  if (step === 'questions' && !currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <p className="text-slate-500">Hiba történt a kérdés betöltésekor.</p>
        <button 
          onClick={() => setStep('results')}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold"
        >
          Eredmények megtekintése
        </button>
      </div>
    );
  }

  const handleComplete = (isCorrect: boolean) => {
    if (!currentQuestion) return;
    const timeSpent = Date.now() - questionStartTime;
    const newResult: QuestionResult = {
      questionId: currentQuestion.id,
      isCorrect,
      timeSpent
    };

    setResults(prev => [...prev, newResult]);

    // Mindig továbblépünk
    const delay = isCorrect ? 1500 : 3000;
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setStep('results');
      }
    }, delay);
  };

  const handleRepeat = () => {
    // Okos rangsorolás:
    // 1. Elhibázott kérdések (isCorrect === false)
    // 2. Idő szerint csökkenő sorrend (legtöbb időt igényelt kérdések előre)
    const sortedQuestions = [...module.questions].sort((a, b) => {
      const resA = results.find(r => r.questionId === a.id);
      const resB = results.find(r => r.questionId === b.id);

      if (!resA || !resB) return 0;

      // Hibás válaszok előre
      if (resA.isCorrect !== resB.isCorrect) {
        return resA.isCorrect ? 1 : -1;
      }

      // Idő szerint csökkenő (legtöbb időt töltött előre)
      return resB.timeSpent - resA.timeSpent;
    });

    setQuestions(sortedQuestions);
    setResults([]);
    setCurrentQuestionIndex(0);
    setIsRepeating(true);
    setStep('questions');
  };

  const stats = useMemo(() => {
    if (results.length === 0) return null;
    const correctCount = results.filter(r => r.isCorrect).length;
    const totalTime = results.reduce((acc, r) => acc + r.timeSpent, 0);
    
    const slowestResult = [...results].sort((a, b) => b.timeSpent - a.timeSpent)[0];
    const slowestQuestion = module.questions.find(q => q.id === slowestResult.questionId);
    
    const missedQuestions = results
      .filter(r => !r.isCorrect)
      .map(r => module.questions.find(q => q.id === r.questionId)?.title)
      .filter(Boolean) as string[];

    return {
      correctCount,
      totalTime: Math.round(totalTime / 1000),
      slowestQuestion: slowestQuestion?.title,
      slowestTime: Math.round(slowestResult.timeSpent / 1000),
      missedQuestions
    };
  }, [results, module.questions]);

  if (step === 'results') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto space-y-8 py-12"
      >
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Modul befejezve!</h2>
          <p className="text-slate-500">Itt vannak az eredményeid és a tanulási statisztikáid.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
            <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-1">Eredmény</p>
            <p className="text-3xl font-black text-blue-600">{stats?.correctCount} / {questions.length}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
            <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-1">Összes idő</p>
            <p className="text-3xl font-black text-slate-800">{stats?.totalTime} mp</p>
          </div>
        </div>

        {stats && stats.missedQuestions.length > 0 && (
          <div className="bg-red-50 p-6 rounded-3xl border border-red-100 space-y-3">
            <div className="flex items-center gap-2 text-red-700 font-bold">
              <AlertCircle className="w-5 h-5" />
              Hibás válaszok:
            </div>
            <ul className="space-y-2">
              {stats.missedQuestions.map((q, i) => (
                <li key={i} className="text-sm text-red-600 flex gap-2">
                  <span className="shrink-0">•</span> {q}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 space-y-3">
          <div className="flex items-center gap-2 text-amber-700 font-bold">
            <Clock className="w-5 h-5" />
            Legtöbb időt igényelt kérdés:
          </div>
          <p className="text-sm text-amber-800 italic">"{stats?.slowestQuestion}"</p>
          <p className="text-xs text-amber-600 font-medium">Időtartam: {stats?.slowestTime} másodperc</p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleRepeat}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Ismétlés (Okos sorrendben)
          </button>
          <button
            onClick={onBack}
            className="w-full py-4 bg-white text-slate-600 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 transition-all"
          >
            Vissza a főoldalra
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Vissza a modulokhoz
      </button>

      <AnimatePresence mode="wait">
        {step === 'summary' ? (
          <motion.div
            key="summary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{module.title} - Összefoglaló</h2>
            </div>
            
            <div className="space-y-4 mb-10">
              {module.summary.map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep('questions')}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
            >
              Kezdjük a feladatokat!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="questions"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
                  {isRepeating ? 'Ismétlés' : 'Első nekifutás'}
                </span>
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                  Feladat {currentQuestionIndex + 1} / {questions.length}
                </span>
              </div>
              <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500" 
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {currentQuestion.type === 'multiple-choice' ? (
              <Quiz 
                key={currentQuestion.id}
                question={currentQuestion} 
                onComplete={handleComplete} 
              />
            ) : (
              <Matching 
                key={currentQuestion.id}
                question={currentQuestion} 
                onComplete={() => handleComplete(true)} 
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
