function test(x, y){
    return y - x;
}

test(10,40);


function test2(x){
    return x*2;
    console.log(x);
    return x/2;
}

test(40);

function isEven(x) {
    if(x % 2 == 0){
        return true;
    }
    return false;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));


function factorial(x) {
    var fact = 1;
    if (x <= 0) {
        console.log("if called");
        return 1;
    } else {
        for (var i = 1; i <= x; i++) {
            fact = fact * i;
        }
        return fact;
    }
}

function kabobToSnake(word) {
    return word.replace(/-/g, '_');
}

kabobToSnake("hello-world");
kabobToSnake("Go-to-the-worlds-end");
kabobToSnake("qwerty-the-way-here");
