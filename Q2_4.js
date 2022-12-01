function calSalary(exp, age){
    if(exp.toLowerCase()=='yes' && age>=35){
        return 6000;
    }
    else if(exp.toLowerCase() == 'yes' && age<35 && age>=28){
        return 4800;
    }
    else{
        if(exp.toLowerCase() =='yes'){
            return 3000;
        }
        else if(exp.toLowerCase() == 'no'){
            return 2000;
        }

    }
}
console.log(calSalary('yes', 25));
console.log(calSalary('no', 20));
console.log(calSalary('yes', 38));