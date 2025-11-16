// mcqsQuestions[0].question
var mcqsQuestions = [
  {
    question: "JS IS EASY OR NOT",
    options: ["yes", "no", "may be", "very easy"],
    answers: "a",
  },
  {
    question: "Html is EASY",
    options: ["yes", "no", "may be", "very easy"],
    answers: "a",
  },
  {
    question: "CSS is EASY",
    options: ["yes", "no", "may be", "very easy"],
    answers: "a",
  },
];

var score = 0; //start
var answerOptions = []; //declare answer store

function showQuiz() {
  var countScore = 100 / mcqsQuestions.length; // count dynmaically none question score
  for (var i = 0; i < mcqsQuestions.length; i++) {
    var userInput = prompt(`
            Question ${i + 1} : ${mcqsQuestions[i].question}  ?
            a) ${mcqsQuestions[i].options[0]}
            b) ${mcqsQuestions[i].options[1]}
            c) ${mcqsQuestions[i].options[2]}
            d) ${mcqsQuestions[i].options[3]}
            `);

    answerOptions.push(userInput);

    if (userInput.toLowerCase() == mcqsQuestions[i].answers) {
      score = score + countScore;
    }
  }
  alert("Your total score is " + score.toFixed(0));
  showOutput();
}

function showOutput() {
  for (var i = 0; i < mcqsQuestions.length; i++) {
    document.writeln(`

<div class="card" style="width:50%;margin:auto;margin-top:20px">

  <div class="card-body">
    <h5 class="card-title">Question No : ${i + 1}) ${
      mcqsQuestions[i].question
    }</h5>
    <p class="card-text">
     <ul>
      <li>${mcqsQuestions[i].options[0]}</li>
      <li>${mcqsQuestions[i].options[1]}</li>
      <li>${mcqsQuestions[i].options[2]}</li>
      <li>${mcqsQuestions[i].options[3]}</li>
    </ul>
     <h3>Correct Option : ${mcqsQuestions[i].answers}</h3>
    <h3>your Option : ${answerOptions[i]}</h3>
    </p>

  </div>
</div>
     `);
  }
}

showQuiz();
