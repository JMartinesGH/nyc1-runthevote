(function(){
    window.rtvQuiz = {};
    function submittedQuiz(){
        rtvQuiz.geo = $('select[data-key="geo"] option:selected').val();
        rtvQuiz.id1 = $('select[data-key="1"] option:selected').val();
        rtvQuiz.id2 = $('select[data-key="2"] option:selected').val();
        rtvQuiz.id3 = $('select[data-key="3"] option:selected').val();
        rtvQuiz.id4 = $('select[data-key="4"] option:selected').val();
        rtvQuiz.id5 = $('select[data-key="5"] option:selected').val();
        rtvQuiz.id6 = $('select[data-key="6"] option:selected').val();
        rtvQuiz.id7 = $('select[data-key="7"] option:selected').val();
        rtvQuiz.id8 = $('select[data-key="8"] option:selected').val();
        rtvQuiz.id9 = $('select[data-key="9"] option:selected').val();
        rtvQuiz.id10 = $('select[data-key="10"] option:selected').val();
        rtvQuiz.id11 = $('select[data-key="11"] option:selected').val();
        rtvQuiz.id12 = $('select[data-key="12"] option:selected').val();
        rtvQuiz.id13 = $('select[data-key="13"] option:selected').val();
        rtvQuiz.id14 = $('select[data-key="14"] option:selected').val();
        rtvQuiz.id15 = $('select[data-key="15"] option:selected').val();
        rtvQuiz.id16 = $('select[data-key="16"] option:selected').val();
    }

    $('select').on('click', function(){
        $(this).css('background','none');
    });

    $("#quiz-submit").on('click',function(){
        if( $('select option:selected[value]').length == 17 ){
            submittedQuiz();
        }else{
            alert("Please fill in all blanks");
            $('select option:selected:not([value])').each(function(){
                $(this).parent().css('background','rgba(255,0,0,0.2)');
            });
        }
    });

    
})();