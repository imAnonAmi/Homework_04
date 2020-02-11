//Heavy lifter page for Homework 04: Coding Quiz. Pseudo code in comments below

//Probably wrap the whole thing in an IF/ELSE statement tied to the timer. IF timer is active, quiz continues, ELSE stop quiz and move onto scoring funcitons etc. This way decrementation of timer or completion of quiz can essentially end the function and move on.

//So start by building the below
//WHEN I click the start button (calls the timer function, begins quiz)
//THEN a timer starts and I am presented with a question (timer needs to be value in a for statement, allowing for outside modification due to bad question answering)

//The below can ALL be a function running through a series of arrays representing answers, I believe.
//WHEN I answer a question (var answer = specific array index id)
//THEN I am presented with another question (moves on to next answer array index)
//WHEN I answer a question incorrectly (var answer != specific array index id)
//THEN time is subtracted from the clock (timer value decremented by specified amount. IF this reduces timer to 0 or below, quiz over, move on to question scoring and high scores)

//This is the quiz over code, whether due to time running out or answering all questions
// WHEN all questions are answered or the timer reaches 0 (OR statement)
// THEN the game is over (End function Take Quiz, move on to Score Quiz, and Enter Initials)

//Scoring and initials.
//WHEN the game is over
//THEN I can save my initials and score (Might see if I can confirm that score deserves to be in high scores before saving, BUT, that's polish once core functionality is done.)
//IMPORTANT! Demo .GIF shows choosing the option to Go Back (i.e. to Start screen) and to Clear High Scores (wipe local storage). This is not in README, so make sure and include it.