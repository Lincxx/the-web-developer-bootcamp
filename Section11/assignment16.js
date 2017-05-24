var numbers = [1,2,3,4,5,6,7,8,9];
var alpha = ["a","b","c"]

function printReverseLoop(arr) {
    for (var i = (arr.length - 1); i >= 0 ; i--) {
        console.log(arr[i]);
    }
}

function printReverse(arr){
    console.log(arr.reverse());
}

printReverseLoop(alpha);
printReverse(numbers);



function isUniform(arr) {
    var temp = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (temp == arr[i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

//cleaner verison of isUnoform
// function isUniform(arr) {
//     var temp = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (temp !== arr[i]) {
//             return false;
//         }
//     }
//     return true;
// }

console.log(isUniform([1,1,1,1]));//
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a", "b", "b"]));
console.log(isUniform(["b", "b", "b"]));

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(ar){
        sum += ar;
    })
    return sum;
}


console.log(sumArray([1,2,3]));
console.log(sumArray([10,3,10, 4]));
console.log(sumArray([-5,100]));


function max(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (temp < arr[i]) {
            temp = arr[i];
        }
    }
    return temp;
}

function maxForEach(arr) {
    var temp = 0;
    arr.forEach(function(ar) {
        if (temp < ar) {
            temp = ar;
        }
    });
    return temp;
}

//another way
function maxForEach(arr) {
    var temp = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] > temp){
            temp = arr[i]
        }
    }
    return temp;
}

console.log(max([1,2,3]));
console.log(max([10,3,10, 4]));
console.log(max([-2, 100, 230, 5]));

console.log(maxForEach([1,2,3]));
console.log(maxForEach([10,3,10, 4]));
console.log(maxForEach([-2, 100, 230, 5]));
