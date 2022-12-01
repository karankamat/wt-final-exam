<?php

    $time = Date('a');
    $hour = Date('H');
    echo Date('H:m a');
    if($time == 'am'){
        echo 'GoodMorning';
    }
    else if($time == 'pm' && $hour <16){
        echo 'GoodAfternoon';
    }
    else if($hour > 16 && $hour < 21){
        echo 'GoodEvening';
    }
    else{
        echo 'GoodNoight';
    }

?>