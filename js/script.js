const products = [
{ id : 1 , name : "book" },
{ id : 2 , name : "pen" },
{ id : 3 , name : "pencil" },
{ id : 4 , name : "roler" },
{ id : 5 , name : "eraser" },
{ id : 6 , name : "paper" },
]

const userBought = [
    { id : 7 , name : "tarash" },
    { id : 8 , name : "notebook" },
    { id : 9 , name : "bag" },
]

let userTold = prompt(`Do you want to delete an item of your cart?(Enter delete !)
Or do you want to buy a something else ?(Enter add !)`)

if(userTold == "delete"){
    let userDelete = prompt("what you want to delete?");
    let itemIndex = userBought.findIndex((item)=>{
        return item.name == userDelete ;
    })
    if(itemIndex == -1){
        alert("This product is not in your cart !!")
    }else{
        userBought.splice(itemIndex,1);
        console.log(userBought)
    }
}else{
    let useradd = prompt("what you want to add?");
    let itemIIndexadded = products.findIndex((item)=>{
        return item.name == useradd ;
    })
    if(itemIIndexadded == -1){
        alert("This product is not in our shop !!")
    }else{
        userBought.push(products[itemIIndexadded]);
        console.log(userBought);
        console.group(userBought);
    }
}