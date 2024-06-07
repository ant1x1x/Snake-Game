//es5 variable declaration
var firstName =   'Antonio';





//es6 variable declaration
const fullName = 'Antonio Koussa';
let lastName =  'Koussa';
lastName = 'ant';
console.log(firstName,fullName,lastName);
const info = 'I bought two oranges';
const age = 15;
const hasDriversLicense = true;

console.log(`I went to the market and ${info}`);
// mathematical operators
const currentYear = 2024;
const birthYear = 2009;
const myAge = (currentYear - birthYear);
const lapalAge = (currentYear - 1842);
console.log(myAge, lapalAge);
const myAge1 = currentYear - birthYear / 2 
console.log(myAge1);

const lapalAge1 = currentYear - myAge * 2 ;
console.log(lapalAge1);


const sumTotal = 123456789;
const average = 987654321;
const totalSum = (sumTotal + average);
console.log(totalSum);



const x = 20
const y = 40 
const z = 90
const j = 100
const totalSum1 = (x + y + z + j);
console.log(totalSum1);
const totalsum2 = (totalSum1 / 4);
console.log(totalsum2);


// comparison operators
console.log( myAge < lapalAge);
console.log(myAge <= 18)
const occupation = 'roblox'
const bestFood = 'chicken'
console.log(`My name is ${fullName} and i am ${age} and my fav food is ${bestFood} and i love to ${occupation}`)


true + false
const countriesArray = [
    'Argentina',
    'Liberia',
    'Lebanon',
    'Nigeria',
    'Zimbabwe',
    'Madagascar',
    'Niger',
    'IceLand',
    'FinLand',
    'Norway',
];
console.log(countriesArray);
console.log(countriesArray.length);
console.log(countriesArray[0]);
console.log(countriesArray[3]);
console.log(countriesArray[8]);
countriesArray.push('Chad');
console.log(countriesArray[10]);

// declare a variable of your girlfriend name 
// and print to the console saying
// i love my dog --- then you put her name in an encoded way from the variable


// Assignment on Array
// create an array that contains list of 12 arsenal footballers
// Add 5 new footballers into the array using the push method
//  retrieve 10 and 4


const pet = 'dog'
console.log(`i love my ${pet}`)


true + false
const footballers = [
    'Ben White',
    'Gabriel',
    'Jakub Kiwior',
    'Martin Ødegaard',
    'Cédric',
    'Jurrien Timber',
    'Thomas Partey',
    'Aaron Ramsdale',
    'Gabriel Jesus',
    'Kai Havertz',
    'Jorginho',
    'Takehiro Tomiyasu',
    
];
console.log(footballers);
console.log(footballers.length);
console.log(footballers [4])
console.log(footballers [9]) 
footballers.push('Emile Smith Rowe','James Sweet','Reuell Walters','Mohamed Elneny','Leandro Trossard');


// alert('hello world');



// const lockOn = 'Head';
// if (lockOn) {
//     alert('Q');
    
// } else if (lockedOn == 'Head') {
//     alert('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z');
// }else{ 
//     alert('Do not move');
// }


// OBJECTS
 
let ojeb = {
    firstName: 'Antonio',
    lastName:  'koussa',
    car: 'McLaren',
    age: currentYear - myAge1,
    occupation: 'student',
    hobbies: ['football', 'basketball', 'GAMES'],
    favoriteFood:  'CHICKEN',
}
console.log(ojeb);
console.log(ojeb.car);
console.log(ojeb.hobbies[2]);

//retrieve first name an dlast name 


console.log(ojeb.firstName);
console.log(ojeb.lastName);


// Assignment
const massMark = 95;
const heightMark = 1.89
const massJohn = 85;
const heightJohn = 1.77;
// calculate the total BMI of Mark AND divide by 2 also calculate the total BMI of John and divide by 2
// use the comparison operator to compare who has a higher BMI

const bmiMark = (massMark / heightMark) * 2;
const bmiJohn = (massJohn / heightJohn) * 2;
console.log(bmiMark);
console.log(bmiJohn);
if (bmiMark > bmiJohn) {

    console.log(`Marks bmi ${bmiMark} is greater than johns ${bmiJohn} `);

}else {
    console.log(`johns bmi ${bmiJohn} is greater than marks ${bmiMark} `);
}
