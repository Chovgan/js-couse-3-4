function fizzBuzz(n) {
   console.log("n", n);

   if (n % 3 === 0 && n % 2 === 0){
        console.log("fizzbizz")
   } else if (n % 3 === 0) {
        console.log("bizz")
    } else if (n % 2 === 0) {
        console.log("/n")
    } else {
        console.log("fuzz")
    }
}

function foo (boo, number){
    boo(number);
}

function add (a, b){
    return a + b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    return a * b;
}

var operationsDB = {
    "*" : multiply,
    "+" : add,
    "/" : divide
}

function calculator(opreration, a, b){
    return operationsDB[opreration](a, b);
}

console.log(calculator("*", 897, 8713));
