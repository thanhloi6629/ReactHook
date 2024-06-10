import React, { useState,  useEffect } from 'react';
import SurveyQuestion from './SurveyQuestion';
import { makeStyles } from '@mui/styles';
// eslint-disable-next-line import/named
import { Theme } from '@mui/system';

const useStyles = makeStyles((theme) => ({

}))
const Survey = () => {
  const surveyData = [
    {
      question: 'Câu hỏi 1',
      answers: ['Đáp án A1', 'Đáp án B1', 'Đáp án C1'],
    },
    {
      question: 'Câu hỏi 2',
      answers: ['Đáp án A2', 'Đáp án B2', 'Đáp án C2'],
    },
    {
      question: 'Câu hỏi 3',
      answers: ['Đáp án A3', 'Đáp án B3', 'Đáp án C3'],
      },
      {
        question: 'Câu hỏi 4',
        answers: ['Đáp án A4', 'Đáp án B3', 'Đáp án C3'],
      },
      {
        question: 'Câu hỏi 5',
        answers: ['Đáp án A5', 'Đáp án B5', 'Đáp án C5'],
    },
    {
      question: 'Câu hỏi 6',
      answers: ['Đáp án A6', 'Đáp án B6', 'Đáp án C6'],
    },
    {
      question: 'Câu hỏi 7',
      answers: ['Đáp án A7', 'Đáp án B7', 'Đáp án C7'],
    },
    {
      question: 'Câu hỏi 8',
      answers: ['Đáp án A8', 'Đáp án B8', 'Đáp án C8'],
    },
    {
      question: 'Câu hỏi 9',
      answers: ['Đáp án A9', 'Đáp án B9', 'Đáp án C9'],
    },
    {
      question: 'Câu hỏi 10',
      answers: ['Đáp án A10', 'Đáp án B10', 'Đáp án C10'],
    },
    // Add more survey questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const allItems = document.querySelectorAll('.active');
        allItems.forEach((item, index) => {

            if (item.classList.contains('active')) {
                item.classList.remove('active')
            }
        })

        const element = document.getElementsByClassName('ref-child');
        if (element.length > 0) {
            element[currentQuestionIndex].classList.add('active');
        }
        
  }, [currentQuestionIndex]);

    const handleAnswerSelectedScrollToSection = (questionIndex, selectedAnswer) => {

        // setAnswers((prevAnswers) => ({ ...prevAnswers, [questionIndex]: selectedAnswer }));
        if (questionIndex <= surveyData.length - 1) {

            setCurrentQuestionIndex(questionIndex);
            const element = document.getElementsByClassName('ref-child');
            if (element.length) {
              element[questionIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'  });
                element[questionIndex].classList.add('active');
            }
        }
  };
  
    return (
      <>
        <div>
          {surveyData.map((questionData, index) => (
              <SurveyQuestion
                  key={`${questionData.question}${index}`}
                  question={questionData.question}
                  answers={questionData.answers}
                  currentQuestionIndex={index}
                  onAnswerSelectedScrollToSection={handleAnswerSelectedScrollToSection}
                  // selected={currentQuestionIndex === index ? answers[currentQuestionIndex] : null}
          />
        ))}
        </div>
    </>
  );
};

export default Survey;