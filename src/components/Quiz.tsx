import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { useState } from 'react';
import { Question } from '../types';

interface QuizProps {
  key?: string;
  question: Question;
  onComplete: (isCorrect: boolean) => void;
}

export default function Quiz({ question, onComplete }: QuizProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (id: string) => {
    if (isSubmitted) return;
    setSelectedId(id);
    setIsSubmitted(true);
    const choice = question.choices?.find(c => c.id === id);
    onComplete(!!choice?.isCorrect);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-slate-800">{question.title}</h3>
      <div className="grid gap-3">
        {question.choices?.map((choice) => (
          <motion.button
            key={choice.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => handleSubmit(choice.id)}
            disabled={isSubmitted}
            className={`
              w-full p-4 text-left rounded-xl border-2 transition-all flex items-center justify-between
              ${isSubmitted 
                ? choice.isCorrect 
                  ? 'border-green-500 bg-green-50 text-green-700' 
                  : selectedId === choice.id 
                    ? 'border-red-500 bg-red-50 text-red-700' 
                    : 'border-slate-100 text-slate-400'
                : 'border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700'
              }
            `}
          >
            <span>{choice.text}</span>
            {isSubmitted && choice.isCorrect && <Check className="w-5 h-5 text-green-600" />}
            {isSubmitted && selectedId === choice.id && !choice.isCorrect && <X className="w-5 h-5 text-red-600" />}
          </motion.button>
        ))}
      </div>
      {isSubmitted && question.explanation && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm border border-blue-100"
        >
          <strong>Magyarázat:</strong> {question.explanation}
        </motion.div>
      )}
    </div>
  );
}
