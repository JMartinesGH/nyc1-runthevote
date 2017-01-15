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