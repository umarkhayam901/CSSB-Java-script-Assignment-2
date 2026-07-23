/*Task 1: Basic Math & Type Adjustments (Variables & Conversion)
Create a variable with a string number using let (for example: "50" ).
Convert this string into a real number using type conversion.
Add 10 to it using the += operator, and then apply a unary increment ( ++ ) to add 1 more.
Print the final result to the console.*/

let num = "50";
num = Number(num);
num += 10;
num++;

console.log(num);

/*Task 2: Variable Declarations & Truthy Check (const & Truthy/Falsy)
Create a fixed variable for a username using const (e.g., "Farhan" ).
Use an if else statement to check if the username exists (evaluating if it is a truthy value).
If it is truthy, print "Welcome, [username]!". If it is empty (falsy), print "Please provide a username."*/

const username = "Farhan";

if (username) {
  console.log(`Welcome, ${username}!`);
} else {
  console.log("Please provide a username.");
}

/*Task 3: Simple Grading System (Control Flow)
Create a variable for a student score (e.g., 85).
Use an if / else if / else structure to check the score:
If the score is 90 or above, print "Grade: A".
If the score is 75 or above, print "Grade: B".
Otherwise, print "Grade: C". */

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

/*Task 4: Simple Number Multiplier (Loops)
Create a starting base variable using let (e.g., 5).
Use a simple for loop or while loop to print the results of multiplying that base number by 1, 2, 3, 4,
and 5.
Print each result to the console (e.g., "5 multiplied by 2 is 10"). */

let value = 5;

for (let i = 1; i <= 5; i++) {
  console.log(value + " multiplied by " + i + " is " + (value * i));
}