import { QuestionType } from "../customHooks/UseQuiz";
import Option from "./Option";

type propType = {
  currentQuestion: QuestionType;
  currentQuestionIndex: number;
  pickedAnswer: string | null;
  handleNextQuestion: () => void;
  handleAnswerSelection: (option: string) => void;
}

const Question = ({
    currentQuestion,
    currentQuestionIndex, 
    pickedAnswer, 
    handleNextQuestion, 
    handleAnswerSelection}: propType) => {
  return (
    <div className="question-container">
      <h2>{currentQuestionIndex + 1}. {currentQuestion.question}</h2>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <Option 
            option = {option} 
            index={index} 
            pickedAnswer={pickedAnswer} 
            handleAnswerSelection={handleAnswerSelection}
          />
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        disabled={!pickedAnswer}
      >
        Next Question
      </button>
    </div>
  )

}

export default Question;