(function(){
    var format = d3.format(".0%"),
        politicians;
        userAnswers = [
            {
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
            }, 
            {
                "answer" : 2,
                "key" : "bigGov"
            },
            {
                "answer": -2,
                "key": "collectRecords"
            },
            {
                "answer": -2,
                "key": "religion"
            },
            {
                "answer": 2,
                "key": "pathway"
            } 
        ];

    function submitQuiz(){
        userAnswers[0].answer = $('select[data-key="gayMarriage"] option:selected').val();
        userAnswers[1].answer = $('select[data-key="obamacare"] option:selected').val();
        userAnswers[2].answer = $('select[data-key="gunLaws"] option:selected').val();
        userAnswers[3].answer = $('select[data-key="proIsrael"] option:selected').val();
        userAnswers[4].answer = $('select[data-key="military"] option:selected').val();
        userAnswers[5].answer = $('select[data-key="armyBudget"] option:selected').val();
        userAnswers[6].answer = $('select[data-key="drones"] option:selected').val();
        userAnswers[7].answer = $('select[data-key="socialSecurity"] option:selected').val();
        userAnswers[8].answer = $('select[data-key="banks"] option:selected').val();
        userAnswers[9].answer = $('select[data-key="marijuana"] option:selected').val();
        userAnswers[10].answer = $('select[data-key="assaultRifles"] option:selected').val();
        userAnswers[11].answer = $('select[data-key="bigGov"] option:selected').val();
        userAnswers[12].answer = $('select[data-key="collectRecords"] option:selected').val();
        userAnswers[13].answer = $('select[data-key="religion"] option:selected').val();
        userAnswers[14].answer = $('select[data-key="pathway"] option:selected').val();

        return getPoliticians('./politicians.json');
    }

    // window.standard = calculateScore(user, politicians);

    function buildExperience() {
      var data = window.standard;
      //sortdata by std

      data.forEach(function(d,i){
        appendCandidate(d.name, d.std, d.party);
      })
      $(".candidate").first().addClass("active")
      addtoCandidate(data[0].questions);


      $(".candidate").click(function(){
        console.log($(this).hasClass("active"));
        if (!$(this).hasClass("active")) {
          $(".candidate.active .card").remove();
          // $(".overlay").show();
          $(".candidate").removeClass("active");
          $(this).addClass("active");
          addtoCandidate(d.questions);
        };
      })
    }


    function appendCandidate(name, percentage, party){
      var shortname = name.toLowerCase().split(" ").join("_");
      if(name == "Martin O'Malley"){
        shortname = "martin_o";
      }
      // console.log(shortname);
      var candidate = "<div class='candidate " + shortname + "'>"
          +  "<img src='assets/img/"+shortname+".png'/>"
          +  "<div class='name'>"
          +  "<div class='id_'>"
          +  "<h4>" + name + "</h4>"
          +  "<h4 class='party'>, " + party + "</h4>"
          +  "</div>"
          +  "<div class='percentage'>" + format(percentage) + "</div>"
          +  "<h3>Match</h3>"
          +  "</div>"
          +  "</div>";
      $block = $("#dash");
      $block.append(candidate);
    }

    function addtoCandidate(obj){
      $(".candidate.active").append("<div class='card'></div>");
      $active_candidate = $(".candidate.active .card");
      var data = obj;
      var col = 0;
      data.forEach(function(d,i){
        //console.log(d);
        var key = d.key;
        var val = d.answer;
        var img;
        if (val > 1) {
          img = "supports.png";
        } else if (val < 1) {
          img = "opposes.png";
        } else {
          img = "neutral.png";
        }
        // console.log(i);
        if (i%5==0) {
          col++;
          $active_candidate.append("<ul class='list-"+ col +"'></ul>");
        }

        $list_act = $active_candidate.find(".list-"+col);
        $list_act.append("<li>"
          + "<div class='topic'>"
          + "<img src='assets/img/"+img+"'/>"
          + "<p>"+ key + "</p>"
          + "</div>"
          + "</li>"
        )
      })
    }

    $("#quiz-submit").click(function() {
        if( ($('select option:selected[value]').length - 1) === userAnswers.length ){

            submitQuiz().then(function(data){
                
                politicians = data;
                window.standard = calculateScore(userAnswers, politicians);

                buildExperience();

            }).error(function(err){
                console.log('err: ', error);
            });

        } else{
            alert("Please fill in all blanks");
            $('select option:selected:not([value])').each(function(){
                $(this).parent().css('background','rgba(255,0,0,0.2)');
            });
        }
    });

    // $('select').on('click', function(){
    //     $(this).css('background','none');
    // });

    function getPoliticians(url){
        return $.get(url);
    }
})();