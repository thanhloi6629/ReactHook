import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const SurveyQuestion = ({
  question,
  answers,
  currentQuestionIndex,
  onAnswerSelectedScrollToSection,
  selected 
}) => {

  const handleAnswerChangeScroll = (event) => {
    const selectedValue = event.target.value;
    onAnswerSelectedScrollToSection(currentQuestionIndex + 1, selectedValue);
  };

  return (
    <>
      <div className="ref-child">
        <p>{question}</p>
        <RadioGroup value={selected} onChange={(event) => handleAnswerChangeScroll(event)}>
          {answers.map((answer, index) => (
            <FormControlLabel
              key={index}
              value={answer ?? ''}
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
