
function computerPlay() {
let x=Math.random();
if (x<= 0.33333) {
    return  "paper" ;                             
} else if (x>=.66666) {
    return "rock"   ;                        
} else {
    return "scissors"  ;                              
}

}

function userPlay() {
    let x=prompt("Rock ? Paper ? or scissors ?");
    
    let y=x.toLowerCase();
    if (y=="rock") {
        return "rock";
    } else if (y=="paper") {
        return "paper";
    } else if (y=="scissors") {
        return "scissors";
    } else {
        console.log("please give a valid anwser");
    }

}
function playRound() {
    x=computerPlay()
    y=userPlay()
    if (x==y) {
        console.log("tie you both decided on "+ x);
        return 5;
    } else if (x=="rock" && y=="paper") {
        console.log("you won! user:"+y + " computer:"+x);
        return 1;
    } else if (x=="rock" && y=="scissors") {
        console.log("you lost user:"+y + " computer:"+x);
        return 0;
    } else if (x=="paper" && y=="scissors") {
        console.log("you won! user:"+y + " computer:"+x);
        return 1;
    } else if (x=="paper" && y=="rock") {
        console.log("you lost user:"+y + " computer:" +x);
        return 0;
    } else if (x=="scissors" && y=="rock") {
        console.log("you won! user:"+ y + " computer:" +x);
        return 1;
    } else {
        console.log("you lost user:"+ y + " computer:" + x);
        return 0;
    }
}
let computer=0;
let user=0;
for (let i = 0; i<5; i++) {
    j=playRound()
    if (j==0) {
        computer=computer + 1;
    } else if (j==1) {
        user= user + 1;
    }
}
if (computer>user) {
    console.log("computer wins! with:"+computer+" points" );
} else {
    console.log("user wins! with:"+user+ " points");
}
console.log("computer:"+ computer);
console.log("user:"+ user);



