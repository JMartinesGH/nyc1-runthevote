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

var user = [ {
    "answer" : 2,
    "key" : "Gay Marriage"
  }, {
    "answer" : 2,
    "key" : "Obamacare"
  }, {
    "answer" : 2,
    "key" : "Gun Laws"
  }, {
    "answer" : -2,
    "key" : "Pro Israel"
  }, {
    "answer" : -2,
    "key" : "Military"
  }, {
    "answer" : -2,
    "key" : "Army Budget"
  }, {
    "answer" : -2,
    "key" : "Drones"
  }, {
    "answer" : 2,
    "key" : "Social Security"
  }, {
    "answer" : -2,
    "key" : "Banks"
  }, {
    "answer" : 2,
    "key" : "Marijuana"
  }, {
    "answer" : -2,
    "key" : "Assault Rifles"
  }, {
    "answer" : 2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : 2,
    "key" : "Religion"
  }, {
    "answer" : 2,
    "key" : "Pathway"
  } ]

var politicians =[ {
  "name" : "Bernie Sanders",
  "party": "Democratic Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "Gay Marriage"
  }, {
    "answer" : 2,
    "key" : "Obamacare"
  }, {
    "answer" : 2,
    "key" : "Gun Laws"
  }, {
    "answer" : -2,
    "key" : "Pro Israel"
  }, {
    "answer" : -2,
    "key" : "Military"
  }, {
    "answer" : -2,
    "key" : "Army Budget"
  }, {
    "answer" : -2,
    "key" : "Drones"
  }, {
    "answer" : 2,
    "key" : "Social Security"
  }, {
    "answer" : -2,
    "key" : "Banks"
  }, {
    "answer" : 2,
    "key" : "Marijuana"
  }, {
    "answer" : -2,
    "key" : "Assault Rifles"
  }, {
    "answer" : 2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : 2,
    "key" : "Religion"
  }, {
    "answer" : 2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Darrell Castle",
  "party": "Constitution Party",
  "questions" : [ {
    "answer" : -2,
    "key" : "Gay Marriage"
  }, {
    "answer" : -2,
    "key" : "Obamacare"
  }, {
    "answer" : -2,
    "key" : "Gun Laws"
  }, {
    "answer" : 2,
    "key" : "Pro Israel"
  }, {
    "answer" : -2,
    "key" : "Military"
  }, {
    "answer" : 1,
    "key" : "Army Budget"
  }, {
    "answer" : 1,
    "key" : "Drones"
  }, {
    "answer" : -2,
    "key" : "Social Security"
  }, {
    "answer" : 2,
    "key" : "Banks"
  }, {
    "answer" : 1,
    "key" : "Marijuana"
  }, {
    "answer" : 2,
    "key" : "Assault Rifles"
  }, {
    "answer" : -2,
    "key" : "Big Gov"
  }, {
    "answer" : 1,
    "key" : "Collect Records"
  }, {
    "answer" : -2,
    "key" : "Religion"
  }, {
    "answer" : -2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Donald Trump",
  "party": "Republican Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "Gay Marriage"
  }, {
    "answer" : -2,
    "key" : "Obamacare"
  }, {
    "answer" : -2,
    "key" : "Gun Laws"
  }, {
    "answer" : 2,
    "key" : "Pro Israel"
  }, {
    "answer" : 2,
    "key" : "Military"
  }, {
    "answer" : 2,
    "key" : "Army Budget"
  }, {
    "answer" : 2,
    "key" : "Drones"
  }, {
    "answer" : -2,
    "key" : "Social Security"
  }, {
    "answer" : 2,
    "key" : "Banks"
  }, {
    "answer" : 1,
    "key" : "Marijuana"
  }, {
    "answer" : 2,
    "key" : "Assault Rifles"
  }, {
    "answer" : 2,
    "key" : "Big Gov"
  }, {
    "answer" : 2,
    "key" : "Collect Records"
  }, {
    "answer" : -2,
    "key" : "Religion"
  }, {
    "answer" : -2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Evan McMullin",
  "party": "Better for America Party",
  "questions" : [ {
    "answer" : 1,
    "key" : "Gay Marriage"
  }, {
    "answer" : -2,
    "key" : "Obamacare"
  }, {
    "answer" : -2,
    "key" : "Gun Laws"
  }, {
    "answer" : 2,
    "key" : "Pro Israel"
  }, {
    "answer" : -2,
    "key" : "Military"
  }, {
    "answer" : 2,
    "key" : "Army Budget"
  }, {
    "answer" : 2,
    "key" : "Drones"
  }, {
    "answer" : 1,
    "key" : "Social Security"
  }, {
    "answer" : 2,
    "key" : "Banks"
  }, {
    "answer" : -2,
    "key" : "Marijuana"
  }, {
    "answer" : 2,
    "key" : "Assault Rifles"
  }, {
    "answer" : -2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : -2,
    "key" : "Religion"
  }, {
    "answer" : 1,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Gary Johnson",
  "party": "Libertarian Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "Gay Marriage"
  }, {
    "answer" : -2,
    "key" : "Obamacare"
  }, {
    "answer" : -2,
    "key" : "Gun Laws"
  }, {
    "answer" : 1,
    "key" : "Pro Israel"
  }, {
    "answer" : -2,
    "key" : "Military"
  }, {
    "answer" : -2,
    "key" : "Army Budget"
  }, {
    "answer" : -2,
    "key" : "Drones"
  }, {
    "answer" : -2,
    "key" : "Social Security"
  }, {
    "answer" : 2,
    "key" : "Banks"
  }, {
    "answer" : 2,
    "key" : "Marijuana"
  }, {
    "answer" : 2,
    "key" : "Assault Rifles"
  }, {
    "answer" : -2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : 1,
    "key" : "Religion"
  }, {
    "answer" : 2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Gloria La Riva",
  "party": "Peace and Freedom Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "Gay Marriage"
  }, {
    "answer" : 2,
    "key" : "Obamacare"
  }, {
    "answer" : -2,
    "key" : "Gun Laws"
  }, {
    "answer" : -2,
    "key" : "Pro Israel"
  }, {
    "answer" : -2,
    "key" : "Military"
  }, {
    "answer" : -2,
    "key" : "Army Budget"
  }, {
    "answer" : -2,
    "key" : "Drones"
  }, {
    "answer" : 2,
    "key" : "Social Security"
  }, {
    "answer" : -2,
    "key" : "Banks"
  }, {
    "answer" : 2,
    "key" : "Marijuana"
  }, {
    "answer" : 2,
    "key" : "Assault Rifles"
  }, {
    "answer" : 2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : 2,
    "key" : "Religion"
  }, {
    "answer" : 2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Hillary Clinton",
  "party": "Democratic Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "Gay Marriage"
  }, {
    "answer" : 2,
    "key" : "Obamacare"
  }, {
    "answer" : 2,
    "key" : "Gun Laws"
  }, {
    "answer" : 1,
    "key" : "Pro Israel"
  }, {
    "answer" : 2,
    "key" : "Military"
  }, {
    "answer" : 1,
    "key" : "Army Budget"
  }, {
    "answer" : 2,
    "key" : "Drones"
  }, {
    "answer" : 2,
    "key" : "Social Security"
  }, {
    "answer" : 1,
    "key" : "Banks"
  }, {
    "answer" : 1,
    "key" : "Marijuana"
  }, {
    "answer" : -2,
    "key" : "Assault Rifles"
  }, {
    "answer" : 2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : -2,
    "key" : "Religion"
  }, {
    "answer" : 2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Jill Stein",
  "party": "Green Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "Gay Marriage"
  }, {
    "answer" : 2,
    "key" : "Obamacare"
  }, {
    "answer" : 2,
    "key" : "Gun Laws"
  }, {
    "answer" : -2,
    "key" : "Pro Israel"
  }, {
    "answer" : -2,
    "key" : "Military"
  }, {
    "answer" : -2,
    "key" : "Army Budget"
  }, {
    "answer" : -2,
    "key" : "Drones"
  }, {
    "answer" : 2,
    "key" : "Social Security"
  }, {
    "answer" : -2,
    "key" : "Banks"
  }, {
    "answer" : 2,
    "key" : "Marijuana"
  }, {
    "answer" : -2,
    "key" : "Assault Rifles"
  }, {
    "answer" : 2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : 2,
    "key" : "Religion"
  }, {
    "answer" : 2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "John Kasich",
  "party": "Republican Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "Gay Marriage"
  }, {
    "answer" : -2,
    "key" : "Obamacare"
  }, {
    "answer" : -2,
    "key" : "Gun Laws"
  }, {
    "answer" : 2,
    "key" : "Pro Israel"
  }, {
    "answer" : 1,
    "key" : "Military"
  }, {
    "answer" : 1,
    "key" : "Army Budget"
  }, {
    "answer" : 2,
    "key" : "Drones"
  }, {
    "answer" : -2,
    "key" : "Social Security"
  }, {
    "answer" : 2,
    "key" : "Banks"
  }, {
    "answer" : -2,
    "key" : "Marijuana"
  }, {
    "answer" : 1,
    "key" : "Assault Rifles"
  }, {
    "answer" : -2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : -2,
    "key" : "Religion"
  }, {
    "answer" : -2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Marco Rubio",
  "party": "Republican Party",
  "questions" : [ {
    "answer" : -2,
    "key" : "Gay Marriage"
  }, {
    "answer" : -2,
    "key" : "Obamacare"
  }, {
    "answer" : -2,
    "key" : "Gun Laws"
  }, {
    "answer" : 2,
    "key" : "Pro Israel"
  }, {
    "answer" : 2,
    "key" : "Military"
  }, {
    "answer" : 2,
    "key" : "Army Budget"
  }, {
    "answer" : 2,
    "key" : "Drones"
  }, {
    "answer" : 1,
    "key" : "Social Security"
  }, {
    "answer" : 2,
    "key" : "Banks"
  }, {
    "answer" : -2,
    "key" : "Marijuana"
  }, {
    "answer" : 2,
    "key" : "Assault Rifles"
  }, {
    "answer" : -2,
    "key" : "Big Gov"
  }, {
    "answer" : 2,
    "key" : "Collect Records"
  }, {
    "answer" : -2,
    "key" : "Religion"
  }, {
    "answer" : -2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Martin O'Malley",
  "party": "Democratic Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "Gay Marriage"
  }, {
    "answer" : 2,
    "key" : "Obamacare"
  }, {
    "answer" : 2,
    "key" : "Gun Laws"
  }, {
    "answer" : 1,
    "key" : "Pro Israel"
  }, {
    "answer" : 2,
    "key" : "Military"
  }, {
    "answer" : 2,
    "key" : "Army Budget"
  }, {
    "answer" : -2,
    "key" : "Drones"
  }, {
    "answer" : 2,
    "key" : "Social Security"
  }, {
    "answer" : -2,
    "key" : "Banks"
  }, {
    "answer" : -2,
    "key" : "Marijuana"
  }, {
    "answer" : 2,
    "key" : "Assault Rifles"
  }, {
    "answer" : 2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : 1,
    "key" : "Religion"
  }, {
    "answer" : 2,
    "key" : "Pathway"
  } ]
}, {
  "name" : "Ted Cruz",
  "party": "Republican Party",
  "questions" : [ {
    "answer" : -2,
    "key" : "Gay Marriage"
  }, {
    "answer" : -2,
    "key" : "Obamacare"
  }, {
    "answer" : -2,
    "key" : "Gun Laws"
  }, {
    "answer" : 2,
    "key" : "Pro Israel"
  }, {
    "answer" : 2,
    "key" : "Military"
  }, {
    "answer" : 2,
    "key" : "Army Budget"
  }, {
    "answer" : 2,
    "key" : "Drones"
  }, {
    "answer" : -2,
    "key" : "Social Security"
  }, {
    "answer" : 1,
    "key" : "Banks"
  }, {
    "answer" : -2,
    "key" : "Marijuana"
  }, {
    "answer" : 2,
    "key" : "Assault Rifles"
  }, {
    "answer" : -2,
    "key" : "Big Gov"
  }, {
    "answer" : -2,
    "key" : "Collect Records"
  }, {
    "answer" : -2,
    "key" : "Religion"
  }, {
    "answer" : -2,
    "key" : "Pathway"
  } ]
} ]




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

      //window.standard = std;

      //console.log(politician.name, 'std: ' + std);
      politicianProximity.push({name: politician.name, party:politician.party, std: std, questions: politician.questions});
  });

  //console.log('all results: ', politicianProximity);

  return politicianProximity;
}

