/*let name = "Renan Campos Ribeiro"
const yearOfbirth = "1996"


var es6 = function(){
    console.log(name); // name undefined 
    let name = "Renan Ribeiro";
    console.log(name); // Renan Ribeiro
}

console.log(name); // Renan Campos Ribeiro 

// Let funciona dentro de contextos "name" dentro da funcao es6 e "name" no escopo global  são completamente diferentes !Capiche?!

const yearOfBirth = "1998" // !! Constante não muda de valor

// blocks and IIFES

//{} define uma IFFE em ES6

{
    const a = 10;
    let b = 30;
    var c = 3;   
}

console.log(a + b); //error, a nem b estao declarados, pois so estao acessiveis dentro do bloco acima
console.log(c); // Funciona, var não eh block scoped, entao estara acessivel fora do bloco 

//IIFE em ES5
(function(){
 let c = 40
 })();

console.log(c); //msm erro c so esta acessivel  dentro da IIFE


//Strings

let firstName =  "Renan";
let lastName = "Ribeiro";
const yearOfBirth = 1996;


function calcAge(year){
    2018 - year;
}

//ES5
console.log('Esse é ' + firstName + 'Ele Nasceu em ' + yearOfBirth + ' E Ele tem ' = calcAge(yearOfBirth) + ' Anos')
calcAge(yearofBirth);

//ES6
console.log(`Esse é  ${firstName} ${LastName}. Ele Nasceu em ${yearOfBirth}, e Agora tem ${calcAge(yearOfBirth)}  anos`)

const n  = `${firtsName} ${lastname}` // Declarando uma constante do tipo string com 2 variaveis

console.log(n.startsWith('R')); // Retorna True, pq a string "Renan Ribeiro" comeca com R
console.log(n.endsWith('ro')); // Retorna True, termina com ro /// Case Sensitive
console.log(n.includes('Rib')); //  Retorna True, existe rib em algum lugar da String "Renan 'Rib'eiro"
console.log(`${fistName} `.repeat(5)); //Repete Renan 5 vezes, Renan Renan Renan Renan Renan

//Arrow Functions

const years - [1994, 2002, 2022];

//ES5
let ages5 = years.map(function(el){
    
    return 2018 - el;
    
})

//es6

let ages6 = years.map(el => 2018 - el); //Se tiver apenas um argumento se faz assim

console.log(ages6);

let ages6 = years.map((el, index) => `Age Element ${index +1} : ${2018 - el}`); se tiver mais de um argumento se adiciona os (Parenteses)

console.log(ages6);

let ages6 = years.map((el, index) => {  //Se voce precisar ter mais de uma linha de codigo, voce precisa adicionar {chaves} e ter um retorno return;
    let now = new Date().getFullYear();
    const age = now - el;
    
    return `Age Element ${index +1} : ${age}`
});

console.log(ages6);
*/

//es5
var box5 = {
    color : 'green',
    position : 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is a box number ' + self.position + ' and it is ' + self.color; 
            
            alert(str);
        })
    }
    
}
//box5.clickMe();



//es6
var box6 = {
    color : 'green',
    position : 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This is a box number ' + this.position + ' and it is ' + this.color;
            
            alert(str);
        })
    }
    
}
box6.clickMe();

function Person(name){
    this.name = name;
}

//ES5

Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' Is Friend with ' + el; 
        
    }.bind(this));
    
    console.log(arr);
}
    var friends = ['bob', 'mike', 'Jane'];
    new Person('Jhon').myFriends5(friends);  

//ES5

Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(el => `${this.name} is Friend of ${el}`);
    
    console.log(arr);
}
    var friends = ['bob', 'mike', 'Jane'];
    new Person('Jhon').myFriends5(friends);  




