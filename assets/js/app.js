(function(){
    var format = d3.format(".0%"),
        politicians;
        userAnswers = [
            {
                "answer" : 0,
                "key" : "Gay Marriage"
            }, {
                "answer" : 0,
                "key" : "Obamacare"
            }, {
                "answer" : 0,
                "key" : "Gun Laws"
            }, {
                "answer" : 0,
                "key" : "Pro Israel"
            }, {
                "answer" : 0,
                "key" : "Military"
            }, {
                "answer" : 0,
                "key" : "Army Budget"
            }, {
                "answer" : 0,
                "key" : "Drones"
            }, {
                "answer" : 0,
                "key" : "Social Security"
            }, {
                "answer" : 0,
                "key" : "Banks"
            }, {
                "answer" : 0,
                "key" : "Marijuana"
            }, {
                "answer" : 0,
                "key" : "Assault Rifles"
            },
            {
                "answer" : 0,
                "key" : "Big Gov"
            },
            {
                "answer": 0,
                "key": "Collect Records"
            },
            {
                "answer": 0,
                "key": "Religion"
            },
            {
                "answer": 0,
                "key": "Pathway"
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

      var format = d3.format(".0%");

      function buildExperience(expdata) {
        var data = expdata;

        data.forEach(function(d,i){
          appendCandidate(d.name, d.shortname, d.std, d.party, d.questions);
          //addtoCandidate(d.questions);
        })
        $(".candidate").first().addClass("active");
        addtoCandidate(expdata[0].shortname);
        $(".candidate").click(function(){
          //console.log($(this).hasClass("active"));
          if (!$(this).hasClass("active")) {
            $(".candidate.active .card").remove();
            $(".candidate").removeClass("active");
            $(this).addClass("active");
            console.log($(this).attr('id'));
            addtoCandidate($(this).attr('id'));
          };
        })
      }

      function addtoCandidate(shortname){
        $(".candidate.active").append("<div class='card'></div>");
        $active_candidate = $(".candidate.active").find(".card");
        //console.log($active_candidate);

        var data = _.findWhere(expdata, {shortname: shortname});
        data = data.questions;
        //console.log(data);
        var col = 0;
        //console.log(data);
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
          //console.log(i);
          if (i%5==0) {
            col++;
            $active_candidate.append("<ul class='list-"+ col +"'></ul>");
          }

          $list_act = $active_candidate.find(".list-"+col);
          $list_act.append("<li>"
            + "<div class='topic'>"
            + "<div class='sup' style='background:url(assets/img/"+img+") center center no-repeat'></div>"
            // + "<img src='assets/img/"+img+"'/>"
            + "<p>"+ key + "</p>"
            + "</div>"
            + "</li>"
          );
        });
      }

      function appendCandidate(name, shortname, percentage, party){
        // var shortname = name.toLowerCase().split(" ").join("_");
        // if(name == "Martin O'Malley"){
        //   shortname = "martin_o";
        // }
        //console.log(shortname);
        var candidate = "<div class='candidate' id='"+shortname+"'>"
            +  "<img src='assets/img/"+shortname+".png'/>"
            +  "<div class='name'>"
            +  "<div class='id_'>"
            +  "<h4>" + name + "<span class='party'> " + party + "</span></h4>"
            +  "</div>"
            +  "<div class='percentage'>" + format(percentage) + "</div>"
            +  "<h3>Match</h3>"
            +  "</div>"
            +  "</div>";
        $block = $("#dash");
        $block.append(candidate);
      }

    // $("#quiz-submit").click(function() {
    //     if( ($('select option:selected[value]').length - 1) === userAnswers.length ){

    //         submitQuiz().then(function(data){

    //             politicians = data;
    //             window.standard = calculateScore(userAnswers, politicians);
    //             //console.log(window.standard);_.findWhere(list, properties)
    //             var expdata = _.sortBy(window.standard, 'std');
    //             expdata = expdata.reverse();
    //             expdata.forEach(function(d){
    //               var shortname = d.name.toLowerCase().split(" ").join("_");
    //               if(d.name == "Martin O'Malley"){
    //                 d.shortname = "martin_o";
    //               } else {
    //                 d.shortname = shortname;
    //               }
    //             })
    //             buildExperience(expdata);

    //         }).error(function(err){
    //             console.log('err: ', error);
    //         });

    //     } else{
    //         alert("Please fill in all blanks");
    //         $('select option:selected:not([value])').each(function(){
    //             $(this).parent().css('background','rgba(255,0,0,0.2)');
    //         });
    //     }
    // });

    // $('select').on('click', function(){
    //     $(this).css('background','none');
    // });

    function getPoliticians(url){
        return $.get(url);
    }
})();