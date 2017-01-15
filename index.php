<?php
// index.php
?>
<html>
<head>
   <link rel="stylesheet" type="text/css" href="assets/css/vendor/jquery.fullPage.css" />
   <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
   <title>Run the Vote</title>
</head>
<body id="homepage">
   <div id="fullpage">
       <!-- quiz/intro -->
       <div class="section" data-anchor="madlib" class="active">
           <div>
               <h1>Madlib/intro</h1>
               <a href="#dashboard">Submit</a>
           </div>
       </div>
       <!-- dashboard -->
       <div class="section" data-anchor="dashboard">
           <div>
               <h1>Dashboard</h1>
               <a href="#ballot">Submit</a>
           </div>
       </div>
       <!-- ballot -->
       <div class="section" data-anchor="ballot">
           <div>
               <h1>Ballot</h1>
               <a href="#results">Submit</a>
           </div>
           <?php @include "partials/ballot-flex.php"; ?>
       </div>

       <!-- results -->
       <div class="section" data-anchor="results">
           <div>
               <h1>Results</h1>
               <a href="#">Submit</a>
           </div>
       </div>
   </div>

   <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
   <script type="text/javascript" src="assets/js/vendor/jquery.fullPage.min.js"></script>
   <script type="text/javascript">
       $(document).ready(function() {
           $('#fullpage').fullpage();
           $.fn.fullpage.setAllowScrolling(false, "down");
           $.fn.fullpage.setKeyboardScrolling(false, 'down');
           anchors: ['madlib', 'dashboard', 'ballot', 'results']
       });
   </script>
   <script src="assets/js/app.js"></script>

</body>
</html>