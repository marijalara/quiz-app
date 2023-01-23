import React, { useState } from "react";

const App=() => {
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
    return(
        <div className="app">
            <>
        <div className="container">
            <div className="title">
                <span>Question 1/{questions.length}</span>
            </div>
                <div className="question">{questions[0].questionText}</div>
            </div>
          <div className="btn">
            {questions[0].answerOptions.map((answerOption, index) => {
                return(
                    <button key={index}>
                        {answerOption.answerText}
                    </button>
                )
                })}
          </div>
          </>
        </div>
    )
}

export default App