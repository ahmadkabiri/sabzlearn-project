for(let i=0 ; i<=100 ; i++){
    if(i%2 !== 0) continue ;
    console.log(i);
}

let i = 0 ;
while (i<101){
    if(i%2 == 0){
        console.log(i);
    }
    i++ ;
}

let j = 0 ;
do{
    if(j%2 == 0){
        console.log(j);
    }
    j++ ; 
}while(j<101);