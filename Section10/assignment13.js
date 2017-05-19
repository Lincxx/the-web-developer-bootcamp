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
    var fact = 0;
    if (x === 0) {
        return 1;
    } else {
        for (var i = 1; i > x; i++) {
            if (x <= 0) {
                return;
            }
            fact += x * (x-i)
            console.log(i);
            x--;
        }
        return fact;
    }
}
