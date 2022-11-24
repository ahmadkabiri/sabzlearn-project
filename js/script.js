let mark = 15 ;

switch(mark){
    case 18 :
    case 19 :
    case 20 :
        alert("Level A");
        break ;
    case 15 :
    case 16 :
    case 17 :
        alert("Level B");
        break ;
    case 12 :
    case 13 :
    case 14 :
        alert("Level C");
        break ;
    default :
        alert("You are fierd");
        break ;
}

if(mark>=18 && mark<=20){
    alert("level A")
}else if(mark>=15 && mark<=17){
    alert("level B") ;
}else if(mark>=12 && mark<=14){
    alert("level C") ;
}else{
    alert(" you are fired")
}