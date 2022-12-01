const UserCart = [{productId: 1, productName:"Mobile", price: 70000},
{productId: 2, productName:"Laptop", price: 100000},
{productId: 3, productName:"Airpods", price: 26900},
{productId: 4, productName:"Watch", price: 30000},
{productId: 5, productName:"Shoes", price: 35000},
{productId: 6, productName:"Bag", price: 10000},
];
console.log(UserCart.sort());
//sorted using productId
console.log(UserCart.sort((a) => a['productId']));