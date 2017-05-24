var nums = [12, 34, 56, 23];
nums.forEach(function(num){
    console.log(num);
});

//structure
//myForEach(nums, function(num){})


function myForEach(array, func){
    //loop through array
    for (var i = 0; i < array.length; i++) {
        //call func for each item in array
        func(array[i]);
    }
}

function func(x){
    console.log(x)
}

myForEach([1,2,3,4], func);

myForEach(['jer', 'jim'], function(person){
    console.log(person);
});
