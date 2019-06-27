// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = function () {
console.log("Function was invoked!");
};
myFunction();

myFunction = () => console.log('Function was invoked!');  //so, i'm just resetting the variable that stores this function, i don't use 'let' a second time when i do that, i just plop the function name and reset the value to what I want it to be.

let anotherFunction = function (param) {
  return param;
};
anotherFunction("Example");

//so when you have one parameter and a fat arrow you don't need parentheses and the return is implied because there's no curly braces.
anotherFunction = param => param;


let add = function (param1, param2) {
  return param1 + param2;
};
add(1,2);

//
add = (param1, param2) => param1 + param2;

add( 97, 428);


let subtract = function (param1, param2) {
  return param1 - param2;
};
subtract(1,2);

//
subtract = (param1, param2) => param1 - param2;

subtract(1100,500);

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
  // return num * 3;
// });
// console.log(triple);

