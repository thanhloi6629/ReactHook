import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
interface ISurvey {
  question: string;
  answers: string[];
  currentQuestionIndex: number;
  onAnswerSelected: any;
}
const SurveyQuestion = ({
  question,
  answers,
  currentQuestionIndex,
  onAnswerSelected,
}: ISurvey) => {
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const selectedValue = event.target.value;
    onAnswerSelected(currentQuestionIndex + 1);
  };

  return (
    <>
      <div className="ref-child">
        <p>{question}</p>
        <RadioGroup onChange={handleAnswerChange}>
          {answers.map((answer: any, index: number) => (
            <FormControlLabel
              key={index}
              value={answer ?? ""}
              control={<Radio />}
              label={answer}
            />
          ))}
        </RadioGroup>
      </div>
    </>
  );
};

export default SurveyQuestion;
