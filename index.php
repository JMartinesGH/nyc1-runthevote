<?php  
// index.php
?>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="assets/css/vendor/jquery.fullPage.css" />
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.min.css" />
    <title>Run the Vote</title>
</head>
<body>
    <div id="fullpage">
        <!-- quiz/intro -->
        <section class="section">
            <h1>Quiz/intro</h1>
        </section>
        <!-- dashboard -->
        <section class="section">
            <h1>Dashboard</h1>
        </section>
        <!-- ballot -->
        <section class="section">
            <h1>Ballot</h1>
        </section>

        <!-- results -->
        <section class="section">
            <h1>Results</h1>
        </section>
    </div>

    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="assets/js/vendor/jquery.fullPage.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#fullpage').fullpage();
        });
    </script>
</body>
</html>