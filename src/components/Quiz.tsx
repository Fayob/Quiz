import React from 'react';
import { useQuiz } from '../customHooks/UseQuiz';
import { questions } from "./questions";
import Question from './Question';

const Quiz: React.FC = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    pickedAnswer,
    score,
    isCompleted,
    handleAnswerSelection,
    handleNextQuestion,
    handleRestart,
  } = useQuiz(questions);

  return (
    <div className="quiz-container">
      {isCompleted ? (
        <div className="quiz-completed">
          <h2>Quiz Completed!</h2>
          <p>You score: {score} / {questions.length}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <Question 
          currentQuestionIndex={currentQuestionIndex}
          currentQuestion={currentQuestion} 
          pickedAnswer={pickedAnswer} 
          handleNextQuestion={handleNextQuestion}
          handleAnswerSelection={handleAnswerSelection}
        />
      )}
      <div className="score">
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default Quiz;
