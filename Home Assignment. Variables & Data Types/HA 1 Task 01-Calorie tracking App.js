// You are asked to design a calorie tracking app, which helps users to:
// Keep a record of their activities.
// Monitor the number of calories they lose when performing the activity.
// Sam decides to do cycling 30 minutes everyday for 15 days. Cycling for 30 minutes
// burns 225 calories on average. Use console.log to tell Sam how much calories 
// he would lose:
// “Great work, Sam! After 0.5 hours of running every day for a week, you may lose a total of 3375 calories.
let OneHour = 60;
let cyclingTime = 30;
let cyclingDay = 15;
let caloriesPerHour = 225;

let totalHour = cyclingTime/OneHour;
let totalCaloriesBurned = caloriesPerHour * cyclingDay;
console.log(`Great work, Sam! After ${totalHour} hours of running every day for a week, you may lose a total of ${cyclingDay} calories.`);
