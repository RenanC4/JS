// Lecture: Variables
/*
var name = 'Renan';
console.log(name);

var lastName = 'Ribeiro';
console.log(lastName);

var age = 21;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lecture: variables 2
/*
var name = 'Renan';
var age = 21;

//console.log (name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'Web Developer';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he Married? ' + isMarried + '.');

age = 'Twenty one';
job = 'Sys Admin';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he Married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he Married? ' + isMarried + '.');

*/

/*
// Lecture: Operators
var now = 2018 - 22;
birthYear = now - 22 * 2;
// 2018 - 44
//1952
console.log(birthYear);

var ageRenan = 21;
var ageSirlene = 38;

ageRenan = 3 + 5 * 4 - 2;

console.log(ageRenan);

var name = 'Renan';
var age = '21';
var isMarried = 'yes';

if (isMarried === 'yes'){

console.log(name + ' is maried');

} else {
    console.log(name + ' Will hopefully marry soon :)');

}

isMarried = false;

if (isMarried){
    console.log('YES');
} else {
    console.log('NO');
}

//////////////////////////////////////////////////
//Lecture: boolean logic and switch

var age = 21;

if(age < 20){
    console.log('Renan is an teenager');
} else if (age <= 30 && age >= 20){
    console.log('Renan is a Young Man');
} else{
    console.log('Renan Is a Man');
}

var job = 'Web Developer';

job = prompt('O que o Renan Faz da vida?');

switch (job){
    case 'Teacher':
        console.log('Renan Teaches kids.');
        break;
    case 'driver':
        console.log('Renan is a fucking driver');
        break;
    default:
        console.log('Renan eh um vagabundo');        

}

var playerOneHeight = prompt('Player 1 - Entre com sua altura (em cm)');
var playerTwoHeight = prompt('Player 2 - Entre com sua altura (em cm)');
var playerThreeHeight = prompt('Player 3 - Entre com sua altura (em cm)');
var playerOneAge = prompt('Player 1 - Entre com sua idade');
var playerTwoAge = prompt('Player 2 - Entre com sua idade');
var playerThreeAge = prompt('Player 3 - Entre com sua idade');

var p1 = playerOneHeight + (5 * playerOneAge);
var p2 = playerTwoHeight + (5 * playerTwoAge);
var p3 = playerThreeHeight + (5 * playerThreeAge); 

var winner ;

if (p1 > p2 && p1>p3){
    console.log('Player 1 Wins');
}else if (p2 > p1 && p2>p3){
    console.log('Player 2 Wins');
}else if (p3 > p1 && p3>p2){
    console.log('Player 3 Wins');
}else if (p1 === p2 || p2 === p3){
    console.log('Empate');
}*/

