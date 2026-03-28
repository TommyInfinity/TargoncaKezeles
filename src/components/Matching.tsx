import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Question } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface MatchingProps {
  key?: string;
  question: Question;
  onComplete: (isCorrect: boolean) => void;
}

export default function Matching({ question, onComplete }: MatchingProps) {
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (question.pairs) {
      setLeftItems([...question.pairs.map(p => p.left)].sort(() => Math.random() - 0.5));
      setRightItems([...question.pairs.map(p => p.right)].sort(() => Math.random() - 0.5));
    }
  }, [question]);

  const handleLeftClick = (item: string) => {
    if (isFinished || matches[item]) return;
    setSelectedLeft(item === selectedLeft ? null : item);
  };

  const handleRightClick = (item: string) => {
    if (isFinished || Object.values(matches).includes(item)) return;
    setSelectedRight(item === selectedRight ? null : item);
  };

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      const pair = question.pairs?.find(p => p.left === selectedLeft && p.right === selectedRight);
      if (pair) {
        setMatches(prev => ({ ...prev, [selectedLeft]: selectedRight }));
        setSelectedLeft(null);
        setSelectedRight(null);
      } else {
        // Wrong match feedback
        const timer = setTimeout(() => {
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [selectedLeft, selectedRight, question.pairs]);

  useEffect(() => {
    if (!isFinished && question.pairs && Object.keys(matches).length === question.pairs.length) {
      setIsFinished(true);
      onComplete(true);
    }
  }, [matches, question.pairs, onComplete, isFinished]);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-slate-800">{question.title}</h3>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3">
          {leftItems.map((item) => (
            <motion.button
              key={item}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleLeftClick(item)}
              className={`w-full p-3 text-sm rounded-lg border-2 transition-all text-left
                ${matches[item] 
                  ? 'border-green-200 bg-green-50 text-green-700' 
                  : selectedLeft === item 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'}
              `}
            >
              {item}
            </motion.button>
          ))}
        </div>
        <div className="space-y-3">
          {rightItems.map((item) => (
            <motion.button
              key={item}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleRightClick(item)}
              className={`w-full p-3 text-sm rounded-lg border-2 transition-all text-left
                ${Object.values(matches).includes(item)
                  ? 'border-green-200 bg-green-50 text-green-700' 
                  : selectedRight === item 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'}
              `}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isFinished && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 p-4 bg-green-100 text-green-800 rounded-xl font-medium"
          >
            <CheckCircle2 className="w-6 h-6" />
            Sikeres párosítás!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
