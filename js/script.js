const products =[
    {name : "pen" , price : 12*1000} ,
    {name : "pencil" , price : 10*1000} ,
    {name : "book" , price : 115*1000} ,
    {name : "watch" , price : 450*1000} ,
    {name : "bag" , price : 80*1000} ,
    {name : "phone" , price : 4000*1000} ,
    {name : "laptop" , price : 20000*1000} ,
]

// const productsUp100 = products.filter((item)=>{
//     return item.price < 100*1000
// })

// let postPrice = productsUp100.length*1000 ;

// let totalPrice = 0 ;
// products.forEach(element => {
//     totalPrice += element.price ;
// });

// console.log(`Your product price is : ${ totalPrice} toman 
// your post price is : ${postPrice} toman
// And your total price is : ${totalPrice+postPrice}`)


const someOfProducts = products.splice(2,3);
console.log(someOfProducts);
console.log(products)