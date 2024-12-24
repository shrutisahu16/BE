let a = 20;
let b = 30;
console.log(a+b);

function greet(){
    console.log("greet");
}
greet();

//First class function
function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
const fn = function(){
    console.log("Function expression1");
}

fn();

//use the function expression on the fly
logGreeting(function(){
    console.log("Function expression 2");
})

