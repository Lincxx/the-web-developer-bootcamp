function doMath() {
	var x = 40;
	console.log(x);
}

doMath();//this is a local scope


var y = 99;

function doMoreMath() {
	console.log(y);
}

doMoreMath();//this is a global scope


//we can change the global scope
function doMoreMath() {
    y = 100
	console.log(y);
}

//now the golbal y is equal to 100
doMoreMath();

var pharse = "hi there"

function doSomething(){
    var pharse = "hi there, has been changed?";
    console.log(pharse)
}

doSomething();

//--------------------------------------------
//Quiz

var num = 8;

function doModMath() {
    num += 1;
    if (num % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

num +=1;
doModMath();

function hi() {
    var name = "Rusty";
    console.log(name);
}

function bye() {
    console.log(name);
}
