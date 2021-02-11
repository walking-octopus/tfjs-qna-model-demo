var awn_1 = document.getElementById("awn_1");
var awn_2 = document.getElementById("awn_2");
var awn_3 = document.getElementById("awn_3");
var isloading = document.getElementById("isloading");
let model;
var answersvariable;

// Notice there is no 'import' statement. 'qna' and 'tf' is
// available on the index-page because of the script tag above.
const Analize = async () => {
  isloading.style.visibility = "visible";
  if (typeof model == "undefined") {
    model = await qna.load();
  }
  var question = document.getElementById("questionbox").value;
  var passage = document.getElementById("passagebox").value;

  // qna.load().then(model => {
  model.findAnswers(question, passage).then(answers => {
    answersvariable = answers;
    console.log("Answers: ", answersvariable);
    if (answersvariable[0]) {
      awn_1.innerHTML =
        answersvariable[0].text +
        "<i> score: " +
        Math.trunc(answersvariable[0].score * 10) +
        "</i>";
    } else {
      awn_1.innerHTML = "none";
    }
    if (answersvariable[1]) {
      awn_2.innerHTML =
        answersvariable[1].text +
        "<i> score: " +
        Math.trunc(answersvariable[1].score * 10) +
        "</i>";
    } else {
      awn_2.innerHTML = "none";
    }
    if (answersvariable[3]) {
      awn_3.innerHTML =
        answersvariable[3].text +
        "<i> score: " +
        Math.trunc(answersvariable[3].score * 10) +
        "</i>";
    } else {
      awn_3.innerHTML = "none";
    }
    isloading.style.visibility = "hidden";
  });

  // });
};
