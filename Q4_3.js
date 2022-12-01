function reverseNumber(n){
    var num = n;
    num = num + "";
    return num.split("").reverse().join("");
}

console.log(reverseNumber(-132));
