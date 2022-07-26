// 1.2 JS_Variables_OperatorsNew

// Display the 8th character of this sentence in upper case on the console.
// 
// --> All Around the World

// Activity 1:
// Create a program that stores someone’s name, age and favourite colour and log it to the console in a complete sentence using Template Literals.
// Stretch
// Update all of your variables and write out a new sentence underneath your original.


// Activity 2:
// Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.
// Stretch
// Update each of these variables to what you will eat tomorrow. Log these to the console.

// Activity 3:
// Create a program that calculates the number of days from today to your birth date.
// 

// --------------------------------------------------------------------------------------------------------------------------------

// 1.3 JS_if_else_switch

// Activity 1:
// Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.
// Stretch
// Take your if statement and add a variable called country in. Eg. if age > 17 and country == “UK”.

// Activity 2:
// Create a variable for any pizza topping.
// Create a switch statement; if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console “I don’t mind having ${topping} on my pizza.
// Finally, for any topping you don’t like log “${topping} should not be on a pizza.”

// Activity 3:
// Create a variable called password. Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.

// Activity 4:
// Create a variable called num. Check if the variable is divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”.
// Otherwise log something else.

// Activity 5:

// Create a variable called num. If num is divisible by 3 log “ zz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “ zz buzz” to the console. Otherwise log num to the console.

// Activity 6:

// Create a variable called num. Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).

// JSActivity 7:
// Create a variable called time, a variable called placeOfWorkand a variable called townOfHome. Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// Activity 8:

// Take the string: “jrfndklhgfndjkjlkgper jfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the
// index of a last vowel in the string.

// JSActivity 9:

// Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the rst. If it is return true, otherwise return false.

// Activity 10:

// Create two variables called num1 and num2. Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.

// --------------------------------------------------------------------------------------------------------------------------------

// 1.4 JS_Arrays_Loops

// Activity 1:
// Make an array of 3 your favourite songs. Log them to the console.
// Stretch
// Can you add another two songs to the list using a method and then remove the last one added?
// 
// Activity 2:
// 
// Using MDN, choose one of the following methods: map(), shift(), unshift(), splice(), unsplice().
// Create a program to demonstrate the use of the method. (Note: Not all methods would permanently update/make changes to the arrays themselves.)

// Activity 1:
// Create an array that lists your favourite films, up to 5 elements. Add 2 more using a method. Use a loop to cycle through the array
// 
// Activity 2:
// Generate 6 random numbers between 1-50 and log them to the console.
// 
// Activity 3:
// If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.
// 
// Activity 4:
// Displays 4 lms stored in an array. Use a for loop to show each lm in the array. Use an if statement to check if the 3rd lm in the array is Ghostbusters. If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!
// 
// Activity 5:
// Generate a random number between 1 and 30 six times. For each random number generated, check if this number of divisible by 7 or not. Log out a message to the console if it is divisible by 7 or not.
// 
// Activity 6:
// Imagine you’re a programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays. > Using a nested loop iterate over both arrays and console.log out the matching follower.
// 
// Activity 7:
// Research on do...while loop, find out about the difference between for loop, while loop and do...while loop. Give an example of each.
// What are the pros and cons?

// --------------------------------------------------------------------------------------------------------------------------------

// 1.5 JS_Functions

// Activity 1:
// Take this code and turn it into arrow function syntax:

// function factorial (n) {
//     if((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

// Activity 2:
// Edit the below snippet to include two parameters and a running order count updated when the function is called:

// let orderCount = 0;
// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
// }

// takeOrder('Pineapple');

// Activity 3:
// Cash machine time! Let’s create one that:
// > Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw!

// --------------------------------------------------------------------------------------------------------------------------------

// 1.6 JS_Objects

// Activity
// …let's create an object called person with a key called name and set the value to your name. Add another key called age.

// Activity:
// Let’s create an alarm. Create a key called weekendAlarm, with a value saying “no alarm needed” and a key called weekdayAlarm, with a value saying “get up at 7am”. Create a variable called day and one called alarm. If day is Saturday or Sunday, set alarm to weekendAlarm. If day is a weekday, set alarm to weekdayAlarm.

// Activity 1:
// Let’s edit our person object to include… A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”

// Activity 2:
// Create an object called pet with the key values of: name, typeOfPet, age, colour And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.

// Activity 3:
// Create an object called co eeShop with key values of: branch, drinks with prices, food with prices, And methods called drinksOrdered and foodOrdered. They should return a string saying [Your order] is … with all items chosen with costs and total costs.