let x = 5;

function add5() {
	x = x + 5;
}
// 5 is hardcoded into the function
add5();
x;

function addToX(someNum) {
    x = x + someNum
}
//adding the Param someNum into the function, makes dynamic

addToX(8)
x

//by calling the variable in the function, you can define the variable when calling the function


let y = 1

function multiplyY(anotherNum) {
    y = y * anotherNum
}

multiplyY(5)
y
x