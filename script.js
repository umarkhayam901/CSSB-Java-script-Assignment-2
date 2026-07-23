/*Task 1: The Modern Arrow Calculator (Functions & Operators)
Write a modern JavaScript arrow function named calculateTotal .
The function must accept three numerical arguments: price , taxPercentage , and
discountAmount .
Calculate the final absolute price value by adding the calculated tax price value and subtracting the
static discount value.
Return the absolute numeric result and print it using an informative console.log() template
message. */
const calculateTotal = (price, taxPercentage, discountAmount) => {
  let tax = (price * taxPercentage) / 100;
  let total = price + tax - discountAmount;
  return total;
};

let finalPrice = calculateTotal(1000, 10, 50);

console.log("Final Price is: " + finalPrice);



/*Task 2: Strict Access Guards (Logical Operators & Truthy Checks)
 Create three access flag variables: isLoggedIn (boolean),
  hasActiveSubscription (boolean), 
  and guestToken (string containing a value or empty "" ).
   Build an if/else statement using short-circuit logical operators ( && and || ) to approve access 
   if: The user is both logged in AND has an active subscription,
    OR They possess a valid truthy guestToken .Print "Access Granted!" 
if the checks pass; otherwise, print "Access Denied!" . */

let isLoggedIn = true;
let hasActiveSubscription = true;
let guestToken = "";

if ((isLoggedIn && hasActiveSubscription) || guestToken) {
  console.log("Access Granted!");
} else {
  console.log("Access Denied!");
}


/*Task 3: Day Planner Switchboard (Control Flow Switch Case)
Declare a tracking variable called dayOfWeek containing a day name string (e.g., "Monday" ).
Construct a standard switch/case control structure to evaluate the value:
For "Monday" or "Tuesday" , print "Focus: Core JavaScript Study" .
For "Wednesday" or "Thursday" , print "Focus: Practical Code Labs" .
For "Friday" , print "Focus: Assignment Submission Review" .
For weekend days or unknown values, include a default path that prints "Rest & Recovery
Day" . */

let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
    console.log("Focus: Core JavaScript Study");
    break;

  case "Wednesday":
  case "Thursday":
    console.log("Focus: Practical Code Labs");
    break;

  case "Friday":
    console.log("Focus: Assignment Submission Review");
    break;

  default:
    console.log("Rest & Recovery Day");
}



/*Task 4: Selective Array Scanner (Loops & Modulo Operator)
Create an array containing ten numerical integers (e.g.,
[12, 45, 7, 22, 19, 88, 3, 50, 41, 10] ).
Use a standard for loop to iterate completely through every number in the array.
Inside the loop body, use an if statement combined with the modulo operator ( % ) to check if the
current number is even.
Print only the even values directly to the console (e.g., "Discovered even number: 12" ). */



let numbers = [12, 45, 7, 22, 19, 88, 3, 50, 41, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log("Discovered even number: " + numbers[i]);
  }
}