/* You are now working on a finance app that helps users save money. To encourage
users to continue saving, you are adding a feature to show how much money they
have already saved.
Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500. Use
console.log and variables to output the following in JavaScript:
“Thank you for your discipline and hardwork, Sam! You are now 25% away from
your goal of saving ₱10,000.*/

let targetSavings = 10000;
let currentSavings = 7500;
let totalBalance = targetSavings - currentSavings;
let TotalSavings =  (totalBalance/targetSavings)*100;
console.log(`Thank you for your discipline and hardwork, Sam! You are now ${TotalSavings}% away from your goal of saving ₱10,000.`);
