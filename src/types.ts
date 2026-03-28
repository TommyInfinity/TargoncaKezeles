export type QuestionType = 'multiple-choice' | 'matching';

export interface Choice {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface Question {
  id: string;
  title: string;
  type: QuestionType;
  choices?: Choice[];
  pairs?: MatchingPair[];
  explanation?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  summary: string[];
  questions: Question[];
}

export interface QuestionResult {
  questionId: string;
  isCorrect: boolean;
  timeSpent: number; // in milliseconds
}

export interface ModuleProgress {
  results: QuestionResult[];
}
