const list = [1, 6, 10, 18, 2, 4, 20];


function inAscOrder(l1){
    var l2 = [];
    for(var i = 0; i<7; i++){
        l2.push(l1[i]);
    }
    if(l1 == l2){
        return true;
    }
    else{
        return false
    }
}

console.log(inAscOrder(list));