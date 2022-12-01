<?php

$basic_salary = 1500;
$HRA = null;
$DA = null;
if($basic_salary < 1500){
    $HRA = $basic_salary * 0.10;
    $DA = $basic_salary * 0.90;
}
else if($basic_salary >= 1500){
    $HRA = 500;
    $DA = $basic_salary * 0.98;
}

$salary = $basic_salary + $HRA +$DA;
echo $salary;

?>