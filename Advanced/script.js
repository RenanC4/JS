// object.create

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

jane.calculateAge();