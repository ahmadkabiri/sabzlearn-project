const users = [
    { firstName : "Ahmad" , lastName : "Kabiri" , age : 24 , email : "Ahmadkabiriw@gmail.com" },
    { firstName : "Ali" , lastName : "Kabiri" , age : 14 , email : "Alikabiri1386@gmail.com"},
    { firstName : "Abbas" , lastName : "Kabiri" , age : 30 , email : "Abbaskabiri1371@gmail.com"},
];

let userObject = {};

while(true){

    userObject.firstName = prompt("Enter your first name !");
    if(userObject.firstName.length>=3 && userObject.firstName.length <= 10){
        break;
    }
}

while(true){

    userObject.lastName = prompt("Enter your last name !");
    if(userObject.lastName.length>=3 && userObject.lastName.length <= 15){
        break;
    }
}

userObject.age = prompt("Enter your age !");
userObject.email = prompt("Enter your email !");
users[3] = userObject ;

