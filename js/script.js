const toDoList =[
    { toDo : "Going to park" , isDO : true},
    { toDo : "working" , isDO : false},
    { toDo : "Going to GYM" , isDO : false},
    { toDo : "Going to mousque" , isDO : false},
    { toDo : "studing" , isDO : true},
    { toDo : "Going to bed" , isDO : false},
    { toDo : " Call to my boss" , isDO : true},
]

let userRequest = Number(prompt(`1. Add todo
2. remove todo
3. Todo is done`));


 if( userRequest===1 ){
    let whatToDo = prompt("Add your toDo !")
    let newToDo = { toDo : whatToDo , isDO : false}
    toDoList.push(newToDo);
    // console.log(toDoList);
 }else if ( userRequest === 2){
    let removeToDo = prompt("کدوم تودو رو حذف کنم؟")
    const newFilteredToDo = toDoList.filter(el => {
        return el.toDo !== removeToDo
    })
    console.log(newFilteredToDo);
 }else if ( userRequest === 3 ) {
     let newStatus = prompt("کدوم تودو رو انجام دادی؟")
    // const didNotToDo = toDoList.filter(el => {
    //     return !el.isDO
    // })
    const toDoIndex = toDoList.findIndex(item => {
        return item.toDo === newStatus ;
    })
    toDoList[toDoIndex].isDO = true ;
    console.log(toDoList);

 }











// toDoList.forEach(el => {
//     console.log(" You did : " , el.toDo)
// })