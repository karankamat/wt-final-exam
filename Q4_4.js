const UserCart = [{productId: 1, productName:"Mobile", price: 70000},
{productId: 2, productName:"Mobile", price: 100000},
{productId: 3, productName:"Mobile", price: 26900},
{productId: 4, productName:"Mobile", price: 30000},
{productId: 5, productName:"Mobile", price: 35000},
{productId: 6, productName:"Mobile", price: 10000},
];
var list_price = [];
for(var i = 0; i<6; i++){
    list_price.push(UserCart[i]['price']);
}

console.log(list_price.reduce((a, b)=>{
    return a+b;
}));