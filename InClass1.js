var weight = prompt('Enter your weight in kilograms: ');
if(weight < 0) {
    console.log("Invalid input. Please enter a positive number.");
    weight();
}
var height = prompt('Enter your height in meters: ');
if(height < 0) {
    console.log("Invalid input. Please enter a positive number.");
    height();
}

var bmi = weight / (height * height);
var rounded = bmi.toFixed(2);
if(bmi < 18.5) {
    console.log("Your BMI is " + rounded + " - Underweight");
}
if(bmi >= 18.5 && bmi < 25) {
    console.log("Your BMI is " + rounded + " - Normal weight");
}
if(bmi >= 25 && bmi < 30) {
    console.log("Your BMI is " + rounded + " - Overweight");
}
if(bmi >= 30) {
    console.log("Your BMI is " + rounded + " - Obese");
}