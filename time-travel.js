/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = `"Ancient Egypt"`;
/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = `"Medieval Europe"`;
/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = `"2024-03-15"`;
// travelDate = `"2024-09-31"`;
/*
 * Observations:
 * TODO: In the console it gave me a this message: TypeError: Assignment to constant variable.
 * This means that the assignment given to a new date to travelDate won't work because it 
 * is in a constant variable, the variable stays constant can't be changed. 
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.

console.log(timeMachineModel);
var timeMachineModel = `"T-800"`;
/*
 * Observations:
 When printing a variable named `timeMachineModel` to the console, it gives me a reference error that 
 timeMachineModel is not defined. When declaring the variable, the console prints undefined even though
 the variable has been declared. This is because the declaration of the variable is hoisted to the top of the scope
 but it being intialzied will not. That is why it is printing undefined not the value it was assigned.
 */
