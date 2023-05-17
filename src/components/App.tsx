import React, { useState } from 'react';

const App: React.FC = () => {
  const questions=[
    {
      questionText: 'What is the captal of France?',
      answerOptions: [
          {answerText: 'New York', isCorrect: false},
          {answerText: 'London', isCorrect: false},
          {answerText: 'Paris', isCorrect: true},
          {answerText: 'Dablin', isCorrect: false},
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
          {answerText: 'Jeff Bezos', isCorrect: false},
          {answerText: 'Elon Musk', isCorrect: true},
          {answerText: 'Bill Gates', isCorrect: false},
          {answerText: 'Tony Stark', isCorrect: false},
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
          {answerText: 'Apple', isCorrect: true},
          {answerText: 'Intel', isCorrect: false},
          {answerText: 'Amazon', isCorrect: false},
          {answerText: 'Microsoft', isCorrect: false},
      ],
    },
    {
      questionText: 'How many Harry Poter books are there?',
      answerOptions: [
          {answerText: '1', isCorrect: false},
          {answerText: '4', isCorrect: false},
          {answerText: '6', isCorrect: false},
          {answerText: '7', isCorrect: true},
      ]
    }
  ]
  
  const [current, setCurrent]=useState<number>(0)
  const [score, setScore]=useState<number>(0)
  const [showResults, setShowResults]=useState<boolean>(false)
  
  const onClickHandle=(isCorrect : boolean) : void=> {
    const nextQuestion=current + 1
    setCurrent(nextQuestion)
    if(nextQuestion<questions.length) {
      setCurrent(nextQuestion)
    } else {
      setShowResults(true)
    }
    if(isCorrect) {
      setScore(score + 1)
    }
  }
  return (
    <div className='app'>
      {showResults ? (
        <div className='score'>
        <h2>{score} out of {questions.length} correct - ({(score / questions.length) *100}%)</h2>
      </div>
      ): (
      <>
      <div className='container'>
        <div className='title'>
          <span>Question {current + 1}/{questions.length}</span>
        </div>
        <div className='question'>{questions[current].questionText}</div>
      </div>
      <div className='btn'>
        {questions[current].answerOptions.map((answerOption, index) => {
          return(
            <button onClick={() => onClickHandle(answerOption.isCorrect)} key={index}>
                {answerOption.answerText}
            </button>
          )
        })}
      </div>
      </>
      )}
    </div>
  )
}
export default App