<?php
// index.php
?>
<html>
<head>
   <link rel="stylesheet" type="text/css" href="assets/css/vendor/jquery.fullPage.css" />
   <!-- Bootstrap core CSS -->
   <link href="https://fonts.googleapis.com/css?family=Merriweather:400,700,900|Oswald:400,700" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap-theme.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/c3.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/custom.css">
  
   <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
   <title>Run the Vote</title>
</head>
<body id="homepage">
   <div id="fullpage">
       <!-- quiz/intro -->
       <div class="section" data-anchor="intro" class="active">
            <?php @include "partials/intro.php"; ?>
       </div>
       <div class="section" data-anchor="madlib" >
           <?php @include "partials/quiz.php"; ?>
       </div>
       <!-- dashboard -->
       <div class="section" data-anchor="dashboard">
           <!-- <div>
               <h1>Dashboard</h1>
               <a href="#ballot">Submit</a>
           </div> -->
           <?php @include "partials/dashboard.php"; ?>
       </div>
       <!-- ballot -->
       <div class="section" data-anchor="ballot">
           <!-- <div>
               <h1>Ballot</h1>
               <a href="#results">Submit</a>
           </div> -->
           <?php @include "partials/ballot.php"; ?>
       </div>

       <!-- results -->
       <div class="section" data-anchor="results">
           <!-- <div>
               <h1>Results</h1>
               <a href="#">Submit</a>
           </div> -->
           <?php @include "partials/results.php"; ?>
           <?php @include "partials/footer.php"; ?>
       </div>
   </div>

   <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
   <script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
   <script src="server/questions.js"></script>
   <script src="assets/js/c3.min.js"></script>
   <script src="assets/js/ballot.js"></script>
   <script type="text/javascript">

    var format = d3.format(".0%");
    window.standard = calculateScore(user, politicians);
    //console.log(window.standard);_.findWhere(list, properties)
    var expdata = _.sortBy(window.standard, 'std');
    expdata = expdata.reverse();
    expdata.forEach(function(d){
      var shortname = d.name.toLowerCase().split(" ").join("_");
      if(d.name == "Martin O'Malley"){
        d.shortname = "martin_o";
      } else {
        d.shortname = shortname;
      }
    })
    buildExperience(expdata);

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

  </script>
   <script type="text/javascript" src="assets/js/vendor/scrolloverflow.min.js"></script>
   <script type="text/javascript" src="assets/js/vendor/jquery.fullPage.min.js"></script>
   <script type="text/javascript">
       $(document).ready(function() {
           $('#fullpage').fullpage({
                scrollOverflow: true,
                anchors: ['intro','madlib', 'dashboard', 'ballot', 'results']
           });
           $.fn.fullpage.setAllowScrolling(false, "down");
           $.fn.fullpage.setKeyboardScrolling(false, 'down');
       });
   </script>
   <script src="assets/js/app.js"></script>

</body>
</html>