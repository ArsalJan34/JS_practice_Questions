var mcqsQuestions = {
  question: "What is real name of Captain America?",
  Options : [ "Steve Rogers", "Bucky Barnes", "Tony stark", "Bruce banner"],
  answer: "Steve Rogers"
}
var score = 0;
var answerOptions = [];
function ShowQuiz(){
  var countScore = 100 / mcqsQuestions.Options.length;
//   var quizContainer = document.getElementById("quizContainer");
//   var quesitonElement = document.createElement("h3");
//   quesitonElement.innerText = mcqsQuestions.question;
//   quizContainer.appendChild(quesitonElement);
//   for(var i=0; i<mcqsQuestions.Options.length; i++){
//     var option = document.createElement("input");
//     option.type = "radio";
//     option.name = "quizOption";
//     option.value = mcqsQuestions.Options[i];
//     option.id = "option"+i;
//     var label = document.createElement("label");
//     label.htmlFor = "option"+i;
//     label.innerHTML=mcqsQuestions.Options[i];
//     quizContainer.appendChild(option);
//     quizContainer.appendChild(label);
//     quizContainer.appendChild(document.createElement("br"));
//     answerOptions.push(option);
//   }
// }
for(var i=0; i < mcqsQuestions.length; i++){
  var userInput = prompt(
    ` Question: ${mcqsQuestions[i].Options[0]}
     Question: ${mcqsQuestions[i].Options[1]}
     Question: ${mcqsQuestions[i].Options[2]}
     Question: ${mcqsQuestions[i].Options[3]}
    `);
}
ShowQuiz()
