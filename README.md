Quiz-app in React

Goal

The goal is to create quiz-app with four different questions and the offered answers for those questions and finally the score for that quiz app.

npm start

I created react app with name quiz-app and started my project with npm start.

I created App file where I created variable questions with four different questions, offered answers for those questions and with correct answer. After that I created state for current with default value of zero, state for score with default value of zero and state for show results with default value of false. I created container with div tag and on the left side I had the number of questions which is in order. Below that I had question, and on the right side I had offered answers for that question, for that I used map statement to display that offered answers. 

I created function onClickHandle where I had variables next question and had if statement which should checked whether the next question is less than the total number of questions, if so, a new question should be displayed and the score recorded depending on whether the answer is correct or not. That function I added on button tag, so in the end of this quiz we had score whcih shows how many correct answers we had and shows the precentage of the score.
I created index.css for styling this application.