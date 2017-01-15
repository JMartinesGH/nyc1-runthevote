var QUESTION_WEIGHTS = [
  { key: 'question1', weight: 4 },
  { key: 'question2', weight: 4 },
  { key: 'question3', weight: 4 },
  { key: 'question4', weight: 4 },
  { key: 'question5', weight: 2 },
  { key: 'question6', weight: 2 },
  { key: 'question7', weight: 2 },
  { key: 'question8', weight: 2 },
  { key: 'question9', weight: 2 },
  { key: 'question10', weight: 2 },
  { key: 'question11', weight: 2 },
  { key: 'question12', weight: 2 },
];

function calcStandardDev(answer1, answer2) {
  // returns standard deviation between two answers
    return Math.abs(answer1 - answer2) / 2;
}
///// TESTS for ^^^:

//console.log('std -2 & 2: ', calcStandardDev(-2, -2) === 0);
//console.log('std -2 & 2: ', calcStandardDev(0, 2) === 1);
//console.log('std -2 & 2: ', calcStandardDev(-2, 1) === (3/2));
//console.log('std -2 & 2: ', calcStandardDev(-2, 2) === 2);

///////

function getTotalDev(stdArr) {
  return stdArr.reduce((acc, num) => Math.abs(acc - num)) / stdArr.length;
}

function calculateScore(userAns, politiciansArr) {
  var politicianProximity = [];

  politiciansArr.forEach((politician) => {
      var stdArr = [];
      var std;
      politician.questions.forEach((question, idx) => {
        var userAnswer = userAns.find((ans) => ans.key === question.key).answer;
        if(userAnswer != 0){
          stdArr.push(calcStandardDev(question.answer, userAnswer));
        }
      });

      std = Math.abs(1 - getTotalDev(stdArr));

      politicianProximity.push({name: politician.name, party:politician.party, std: std, questions: politician.questions});
  });

  return politicianProximity;
}