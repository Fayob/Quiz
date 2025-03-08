import { useState, useEffect } from 'react';

export type QuestionType = {
  question: string;
  options: string[];
  answer: string;
};

export const useQuiz = (questions: QuestionType[]) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [pickedAnswer, setPickedAnswer] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setPickedAnswer(null);
  }, [currentQuestionIndex]);

  const handleAnswerSelection = (answer: string) => {
    setPickedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (pickedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsCompleted(false);
  };

  return {
    currentQuestionIndex,
    currentQuestion,
    pickedAnswer,
    score,
    isCompleted,
    handleAnswerSelection,
    handleNextQuestion,
    handleRestart,
  };
};