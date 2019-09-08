// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
function Person(idNumber, emailAddress, firstName, gender){
  this.idNumber = idNumber;
  this.emailAddress = emailAddress;
  this.firstName = firstName;
  this.gender = gender;
  this.introduction = function(){
    return 'My name is ' + this.firstName + '. I am ' + this.gender + ', my identification number is ' + this.idNumber + ' and my email address is ' + this.emailAddress;
  }
}
//I feel like instead of writing this out, something that I stumbled upon way back in the pre-course work was the object constructor, now, I know that's an object literal up there but since we need five different folks we can make a blueprint so to speak for those five folks and create them this way instead.
let mitzi = new Person(1,'mmelloy0@psu.edu','Mitzi','F');
let kennan = new Person(2,'kdiben1@tinypic.com','Kennan','M');
let keven = new Person(3,'kmummery2@wikimedia.org','Keven','M');
let gannie = new Person(4,'gmartinson3@illinois.edu','Gannie','M');
let antonietta = new Person(5,'adaine5@samsung.com','Antonietta','F');

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.firstName);
console.log(mitzi.introduction());

// Kennan's ID
console.log(kennan.idNumber);

// Keven's email
console.log(keven.emailAddress);

// Gannie's name
console.log(gannie.firstName);
console.log(gannie.introduction());

// Antonietta's Gender
console.log(antonietta.gender);
console.log(antonietta.introduction());

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
console.log()kennan.introduction();

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

antonietta.multiplyNums = function(num1, num2){
  return num1 * num2;
};
console.log(antonietta.multiplyNums(8,67));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

let parent = new Object(){
  parent.name = "Susan";
  parent.age = 70;
  parent.speak = function(){
    return 'Hello, my name is ' + this.name + 'and I am ' + this.age + 'years old.'
  };
  let child = new Object(){
    child.name = "George";
    child.age = 50;
    child.speak = function(){
      return 'Hello, my name is ' + this.name + 'and I am ' + this.age + 'years old.'
    };
    let grandchild = new Object(){
      grandchild.name = "Sam";
      grandchild.age = 30;
      grandchild.speak = function(){
        return 'Hello, my name is ' + this.name + 'and I am ' + this.age + 'years old.'
      };
    }
  }
}//why did we make these nested objects? I mean, they look pretty but what was the objective.

// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(child.age);

// Log the name and age of the grandchild
console.log(grandchild.name + grandchild.age);

// Have the parent speak
console.log(parent.speak());

// Have the child speak
console.log(child.speak());

// Have the grandchild speak
console.log(grandchild.speak());