// import { useQuiz } from "../customHooks/UseQuiz";
// import { questions } from "./questions";

type propType = {
  option: string;
  pickedAnswer: string | null;
  index: number;
  handleAnswerSelection: (option: string) => void;
}

const Option = ({index, option, pickedAnswer, handleAnswerSelection}: propType) => {
  // const {handleAnswerSelection} = useQuiz(questions)
  return (
    <div className="button-container">
      <button
        key={index}
        onClick={() => handleAnswerSelection(option)}
        className={pickedAnswer === option ? 'selected' : ''}
      >
        {option}
      </button><br />
    </div>
  )}

export default Option;
