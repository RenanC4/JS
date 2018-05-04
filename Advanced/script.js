// object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2018 - this.yearOfBirth);
    }
};

var renan = Object.create(personProto);
renan.name = 'renan';
renan.yearOfBirth = 1996;
renan.job = 'Web Developer';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'Designer'}
});

jane.calculateAge();*/

//Objects

// var obj1 = { 
//     name: 'Renan',
//     age: 22
// };

// var obj2 = obj1;

// obj2.age = 21;

// console.log(obj1);
// console.log(obj2);

//functions

/*var age =  22;

var obj = {
    name : 'Renan',
    city: 'Hortolândia'
};

function change(a,b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

// Passing functions as arguments

var years = [1990, 1995, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}

function yearsToRetirement(el){
    return 65 - (2018 - el);
}

function isFullAge(el){
    return el > 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(106.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var yearsToRet = arrayCalc(years, yearsToRetirement);
console.log(yearsToRet);

var fullAge = arrayCalc(ages, isFullAge);
console.log(fullAge);

var maxHeart = arrayCalc(ages, maxHeartRate);
console.log(maxHeart);