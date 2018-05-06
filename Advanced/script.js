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

/* var years = [1990, 1995, 1937, 2005, 1998];

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

*/

// Functions returning Functions

/* function interview(job){
        if (job === 'Web developer'){
            return function(name){
            console.log(name + ' você manja dos paranaue de Node?');
            }
        } else if (job === 'Designer'){
            return function(name){
            console.log('Voce manja dos paranauê de UX ' + name + '?');
            }
        } else {
            return function(name){ 
                console.log(name + ' Me conta mais sobre o seu trabalho..');
            }
        }
    }


var webDev = interview('Web developer');
var Designer = interview('Designer');
var hueBR = interview ('HueBRBR');

webDev('Renan');//dessa forma eh necessario criar as variaveis acima
Designer('Maria');
hueBR('John');

interview('Web developer')('Blanka'); //Usando dessa forma nao eh necessario criar as variaveis; 'Leitura Left right'
*/

//IIFE -Immediately invoked function expressions

// function game() {
//     var score = Math.random() *10;
//     console.log(score>=5);
// }
// game();
/*
hue = 5;
(function(luckDay) {
    var score = Math.random() *10;
    console.log(score>=(5  - luckDay));
    console.log(score);
})(hue);

//Closures

function aposentadoria(idadeParaAposentar){
    var a = ' Anos para se aposentar.';
    return function(anoDeNascimento){
       var idade = 2018 - anoDeNascimento;
        console.log((idadeParaAposentar - idade) + a);
    }
}

aposentadoria(65)(1996);

// funcao perguntas usando closures

function interview(job){
    return function(name){
        if (job === 'Web Developer'){
            console.log(name + ' Voce Manja dos Paranaue de WEBDEV?');
        } else if (job === 'Designer'){
            console.log(name + ' Voce manja dos paranaue de UX?');
        } else {console.log(name + ' Me conta mais do seu trampo');
        
        }
    }

}

interview('Web Developer')('Renan');
interview('Imigrante Ilegal')('Alberto');  
interview('Designer')('Joseph'); 
*/   

//Bind, call and apply
/*
var renan = {
    name: 'Renan',
    age: 22,
    job: 'Web Developer',
    presentation: function(style, timeOfDay){
    if(style === 'Formal'){
        console.log('Good ' + timeOfDay + ' Ladies and Gentleman I\'m ' + this.name + ' I\'m a ' + this.job + ' And I\'m ' + this.age + ' Years Old');
    }else if (style === 'Informal'){
        console.log('Coé Rapazeada, good ' + timeOfDay + ' Ladies and Gentleman I\'m ' + this.name + ' I\'m a ' + this.job + ' And I\'m ' + this.age + ' Years Old');
    }

}
}

var carol = {
    name: 'Carol',
    age: 25,
    job: 'designer'
};

renan.presentation('Informal', 'Afternoon');

renan.presentation.call(carol , 'Formal', 'Night');

renan.presentation.apply(carol, ['Informal', 'Morning']);

var renanFormal = renan.presentation.bind(renan, 'Formal');

renanFormal('Night');
renanFormal('Morning');

var carolInformal = renan.presentation.bind(carol, 'Informal');
carolInformal('Afternoon');
*/

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

function isFullAge(variableAge , el){
    return el > variableAge;
}

var ages = arrayCalc(years, calculateAge);
var isFullAgeBrasil = arrayCalc(ages, isFullAge.bind(this, 18));
console.log(ages);
console.log(isFullAgeBrasil);
