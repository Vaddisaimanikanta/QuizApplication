function shuffleArray(arr){
    for (var i = arr.length - 1 ;  i >0 ; i--){
        var randomIndex = Math.floor(Math.random() * (i+1));
        var temp = arr[i];
        arr[i]  =   arr[randomIndex];
        arr[randomIndex] = temp;

    }
}

function genRandomInt(min , max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min
    
}

function getcorrectindex(arr , crt_ans){
    for(let i = 0 ; i <arr.length ; i++){
        if(arr[i] == crt_ans){
            return i;
        }
    }
}




function main(){
var number1  = genRandomInt(1,100);
var number2 = genRandomInt(1,100);
var symbols  = [ '+' ,'-','*' , "/"];
var selnum = genRandomInt(0,symbols.length);

var select_symbol =  symbols[selnum];

var answer = 0;

switch (select_symbol){
    case '+':
        answer = number1 + number2;
        break;
    case '-':
        answer = number1 - number2 ;
        break;
    case '*':
        answer = number1 * number2 ;
        break;
    case '/':
        answer = number1 % number2;
        break;           
}




var options  = [];

options.push(answer + (genRandomInt(1,11)));
options.push(answer  - (genRandomInt(2,14)));
options.push(answer - genRandomInt(2,15) + genRandomInt(30,40));
options.push(answer);


shuffleArray(options);

let crt_index = getcorrectindex(options , answer);







document.getElementById('num1').textContent= number1;
document.getElementById('num2').textContent= number2;
document.getElementById('sym').innerHTML= select_symbol;
document.getElementById('opt1').textContent= options[0];
document.getElementById('opt2').textContent= options[1];
document.getElementById('opt3').textContent= options[2];
document.getElementById('opt4').textContent= options[3];


for(let i = 0 ; i <opti.length ; i++){
    opti[i].addEventListener("click" ,() => {
        if(crt_index == i){
            dis_res.innerHTML ="Correct";
            dis_res.style.color = "green"
            opti[i].style.backgroundColor="green";
        }
        else{
            dis_res.innerHTML = "Wrong";
            dis_res.style.color = "red"
            opti[i].style.backgroundColor= "red";

        }
    })   
}
btn_res.addEventListener("click" , () => {


        for(let  i = 0 ; i < opti.length ; i ++){
            if( i == crt_index){
                opti[i].style.backgroundColor = 'green';
            }
            else{
                opti[i].style.backgroundColor = 'red';
            }
        }

})

}



let opti = document.querySelectorAll(".option");
let btn_res = document.querySelector("#res");
let btn_play = document.querySelector("#play");
let dis_res = document.querySelector("#result");


btn_play.addEventListener("click" ,() => {
    dis_res.innerHTML="";
    for(let  i = 0 ; i <opti.length ; i++){
        opti[i].style.backgroundColor = "black";
        opti[i].style.color = "white";
    }
    main();
});





