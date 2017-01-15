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
    "key" : "gayMarriage"
  }, {
    "answer" : 1,
    "key" : "obamacare"
  }, {
    "answer" : 1,
    "key" : "gunLaws"
  }, {
    "answer" : -2,
    "key" : "proIsrael"
  }, {
    "answer" : -2,
    "key" : "military"
  }, {
    "answer" : -2,
    "key" : "armyBudget"
  }, {
    "answer" : 1,
    "key" : "drones"
  }, {
    "answer" : 1,
    "key" : "socialSecurity"
  }, {
    "answer" : 1,
    "key" : "banks"
  }, {
    "answer" : 1,
    "key" : "marijuana"
  }, {
    "answer" : 2,
    "key" : "assaultRifles"
  }, {
    "answer" : 1,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : -2,
    "key" : "religion"
  }, {
    "answer" : -2,
    "key" : "pathway"
  } ]

var politicians =[ {
  "name" : "Bernie Sanders",
  "party": "Democratic Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "gayMarriage"
  }, {
    "answer" : 2,
    "key" : "obamacare"
  }, {
    "answer" : 2,
    "key" : "gunLaws"
  }, {
    "answer" : -2,
    "key" : "proIsrael"
  }, {
    "answer" : -2,
    "key" : "military"
  }, {
    "answer" : -2,
    "key" : "armyBudget"
  }, {
    "answer" : -2,
    "key" : "drones"
  }, {
    "answer" : 2,
    "key" : "socialSecurity"
  }, {
    "answer" : -2,
    "key" : "banks"
  }, {
    "answer" : 2,
    "key" : "marijuana"
  }, {
    "answer" : -2,
    "key" : "assaultRifles"
  }, {
    "answer" : 2,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : 2,
    "key" : "religion"
  }, {
    "answer" : 2,
    "key" : "pathway"
  } ]
}, {
  "name" : "Darrell Castle",
  "party": "Constitution Party",
  "questions" : [ {
    "answer" : -2,
    "key" : "gayMarriage"
  }, {
    "answer" : -2,
    "key" : "obamacare"
  }, {
    "answer" : -2,
    "key" : "gunLaws"
  }, {
    "answer" : 2,
    "key" : "proIsrael"
  }, {
    "answer" : -2,
    "key" : "military"
  }, {
    "answer" : 1,
    "key" : "armyBudget"
  }, {
    "answer" : 1,
    "key" : "drones"
  }, {
    "answer" : -2,
    "key" : "socialSecurity"
  }, {
    "answer" : 2,
    "key" : "banks"
  }, {
    "answer" : 1,
    "key" : "marijuana"
  }, {
    "answer" : 2,
    "key" : "assaultRifles"
  }, {
    "answer" : -2,
    "key" : "bigGov"
  }, {
    "answer" : 1,
    "key" : "collectRecords"
  }, {
    "answer" : -2,
    "key" : "religion"
  }, {
    "answer" : -2,
    "key" : "pathway"
  } ]
}, {
  "name" : "Donald Trump",
  "party": "Republican Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "gayMarriage"
  }, {
    "answer" : -2,
    "key" : "obamacare"
  }, {
    "answer" : -2,
    "key" : "gunLaws"
  }, {
    "answer" : 2,
    "key" : "proIsrael"
  }, {
    "answer" : 2,
    "key" : "military"
  }, {
    "answer" : 2,
    "key" : "armyBudget"
  }, {
    "answer" : 2,
    "key" : "drones"
  }, {
    "answer" : -2,
    "key" : "socialSecurity"
  }, {
    "answer" : 2,
    "key" : "banks"
  }, {
    "answer" : 1,
    "key" : "marijuana"
  }, {
    "answer" : 2,
    "key" : "assaultRifles"
  }, {
    "answer" : 2,
    "key" : "bigGov"
  }, {
    "answer" : 2,
    "key" : "collectRecords"
  }, {
    "answer" : -2,
    "key" : "religion"
  }, {
    "answer" : -2,
    "key" : "pathway"
  } ]
}, {
  "name" : "Evan McMullin",
  "party": "Better for America Party",
  "questions" : [ {
    "answer" : 1,
    "key" : "gayMarriage"
  }, {
    "answer" : -2,
    "key" : "obamacare"
  }, {
    "answer" : -2,
    "key" : "gunLaws"
  }, {
    "answer" : 2,
    "key" : "proIsrael"
  }, {
    "answer" : -2,
    "key" : "military"
  }, {
    "answer" : 2,
    "key" : "armyBudget"
  }, {
    "answer" : 2,
    "key" : "drones"
  }, {
    "answer" : 1,
    "key" : "socialSecurity"
  }, {
    "answer" : 2,
    "key" : "banks"
  }, {
    "answer" : -2,
    "key" : "marijuana"
  }, {
    "answer" : 2,
    "key" : "assaultRifles"
  }, {
    "answer" : -2,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : -2,
    "key" : "religion"
  }, {
    "answer" : 1,
    "key" : "pathway"
  } ]
}, {
  "name" : "Gary Johnson",
  "party": "Libertarian Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "gayMarriage"
  }, {
    "answer" : -2,
    "key" : "obamacare"
  }, {
    "answer" : -2,
    "key" : "gunLaws"
  }, {
    "answer" : 1,
    "key" : "proIsrael"
  }, {
    "answer" : -2,
    "key" : "military"
  }, {
    "answer" : -2,
    "key" : "armyBudget"
  }, {
    "answer" : -2,
    "key" : "drones"
  }, {
    "answer" : -2,
    "key" : "socialSecurity"
  }, {
    "answer" : 2,
    "key" : "banks"
  }, {
    "answer" : 2,
    "key" : "marijuana"
  }, {
    "answer" : 2,
    "key" : "assaultRifles"
  }, {
    "answer" : -2,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : 1,
    "key" : "religion"
  }, {
    "answer" : 2,
    "key" : "pathway"
  } ]
}, {
  "name" : "Gloria La Riva",
  "party": "Peace and Freedom Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "gayMarriage"
  }, {
    "answer" : 2,
    "key" : "obamacare"
  }, {
    "answer" : -2,
    "key" : "gunLaws"
  }, {
    "answer" : -2,
    "key" : "proIsrael"
  }, {
    "answer" : -2,
    "key" : "military"
  }, {
    "answer" : -2,
    "key" : "armyBudget"
  }, {
    "answer" : -2,
    "key" : "drones"
  }, {
    "answer" : 2,
    "key" : "socialSecurity"
  }, {
    "answer" : -2,
    "key" : "banks"
  }, {
    "answer" : 2,
    "key" : "marijuana"
  }, {
    "answer" : 2,
    "key" : "assaultRifles"
  }, {
    "answer" : 2,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : 2,
    "key" : "religion"
  }, {
    "answer" : 2,
    "key" : "pathway"
  } ]
}, {
  "name" : "Hillary Clinton",
  "party": "Democratic Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "gayMarriage"
  }, {
    "answer" : 2,
    "key" : "obamacare"
  }, {
    "answer" : 2,
    "key" : "gunLaws"
  }, {
    "answer" : 1,
    "key" : "proIsrael"
  }, {
    "answer" : 2,
    "key" : "military"
  }, {
    "answer" : 1,
    "key" : "armyBudget"
  }, {
    "answer" : 2,
    "key" : "drones"
  }, {
    "answer" : 2,
    "key" : "socialSecurity"
  }, {
    "answer" : 1,
    "key" : "banks"
  }, {
    "answer" : 1,
    "key" : "marijuana"
  }, {
    "answer" : -2,
    "key" : "assaultRifles"
  }, {
    "answer" : 2,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : -2,
    "key" : "religion"
  }, {
    "answer" : 2,
    "key" : "pathway"
  } ]
}, {
  "name" : "Jill Stein",
  "party": "Green Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "gayMarriage"
  }, {
    "answer" : 2,
    "key" : "obamacare"
  }, {
    "answer" : 2,
    "key" : "gunLaws"
  }, {
    "answer" : -2,
    "key" : "proIsrael"
  }, {
    "answer" : -2,
    "key" : "military"
  }, {
    "answer" : -2,
    "key" : "armyBudget"
  }, {
    "answer" : -2,
    "key" : "drones"
  }, {
    "answer" : 2,
    "key" : "socialSecurity"
  }, {
    "answer" : -2,
    "key" : "banks"
  }, {
    "answer" : 2,
    "key" : "marijuana"
  }, {
    "answer" : -2,
    "key" : "assaultRifles"
  }, {
    "answer" : 2,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : 2,
    "key" : "religion"
  }, {
    "answer" : 2,
    "key" : "pathway"
  } ]
}, {
  "name" : "John Kasich",
  "party": "Republican Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "gayMarriage"
  }, {
    "answer" : -2,
    "key" : "obamacare"
  }, {
    "answer" : -2,
    "key" : "gunLaws"
  }, {
    "answer" : 2,
    "key" : "proIsrael"
  }, {
    "answer" : 1,
    "key" : "military"
  }, {
    "answer" : 1,
    "key" : "armyBudget"
  }, {
    "answer" : 2,
    "key" : "drones"
  }, {
    "answer" : -2,
    "key" : "socialSecurity"
  }, {
    "answer" : 2,
    "key" : "banks"
  }, {
    "answer" : -2,
    "key" : "marijuana"
  }, {
    "answer" : 1,
    "key" : "assaultRifles"
  }, {
    "answer" : -2,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : -2,
    "key" : "religion"
  }, {
    "answer" : -2,
    "key" : "pathway"
  } ]
}, {
  "name" : "Marco Rubio",
  "party": "Republican Party",
  "questions" : [ {
    "answer" : -2,
    "key" : "gayMarriage"
  }, {
    "answer" : -2,
    "key" : "obamacare"
  }, {
    "answer" : -2,
    "key" : "gunLaws"
  }, {
    "answer" : 2,
    "key" : "proIsrael"
  }, {
    "answer" : 2,
    "key" : "military"
  }, {
    "answer" : 2,
    "key" : "armyBudget"
  }, {
    "answer" : 2,
    "key" : "drones"
  }, {
    "answer" : 1,
    "key" : "socialSecurity"
  }, {
    "answer" : 2,
    "key" : "banks"
  }, {
    "answer" : -2,
    "key" : "marijuana"
  }, {
    "answer" : 2,
    "key" : "assaultRifles"
  }, {
    "answer" : -2,
    "key" : "bigGov"
  }, {
    "answer" : 2,
    "key" : "collectRecords"
  }, {
    "answer" : -2,
    "key" : "religion"
  }, {
    "answer" : -2,
    "key" : "pathway"
  } ]
}, {
  "name" : "Martin O'Malley",
  "party": "Democratic Party",
  "questions" : [ {
    "answer" : 2,
    "key" : "gayMarriage"
  }, {
    "answer" : 2,
    "key" : "obamacare"
  }, {
    "answer" : 2,
    "key" : "gunLaws"
  }, {
    "answer" : 1,
    "key" : "proIsrael"
  }, {
    "answer" : 2,
    "key" : "military"
  }, {
    "answer" : 2,
    "key" : "armyBudget"
  }, {
    "answer" : -2,
    "key" : "drones"
  }, {
    "answer" : 2,
    "key" : "socialSecurity"
  }, {
    "answer" : -2,
    "key" : "banks"
  }, {
    "answer" : -2,
    "key" : "marijuana"
  }, {
    "answer" : 2,
    "key" : "assaultRifles"
  }, {
    "answer" : 2,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : 1,
    "key" : "religion"
  }, {
    "answer" : 2,
    "key" : "pathway"
  } ]
}, {
  "name" : "Ted Cruz",
  "party": "Republican Party",
  "questions" : [ {
    "answer" : -2,
    "key" : "gayMarriage"
  }, {
    "answer" : -2,
    "key" : "obamacare"
  }, {
    "answer" : -2,
    "key" : "gunLaws"
  }, {
    "answer" : 2,
    "key" : "proIsrael"
  }, {
    "answer" : 2,
    "key" : "military"
  }, {
    "answer" : 2,
    "key" : "armyBudget"
  }, {
    "answer" : 2,
    "key" : "drones"
  }, {
    "answer" : -2,
    "key" : "socialSecurity"
  }, {
    "answer" : 1,
    "key" : "banks"
  }, {
    "answer" : -2,
    "key" : "marijuana"
  }, {
    "answer" : 2,
    "key" : "assaultRifles"
  }, {
    "answer" : -2,
    "key" : "bigGov"
  }, {
    "answer" : -2,
    "key" : "collectRecords"
  }, {
    "answer" : -2,
    "key" : "religion"
  }, {
    "answer" : -2,
    "key" : "pathway"
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

