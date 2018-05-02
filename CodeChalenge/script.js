var years = [1996, 2018];

function printFullAge(years){
    var ages = [];
    var fullAges = [];

    for (var i =0; i< years.length; i++){
        ages[i] = 2018 - years[i];
    }
    
    for (i = 0; i < ages.length; i++){
        if (ages[i] >= 18){
            console.log('lalala' + ages[i]);
            fullAges.push(true);
        }else {
            console.log('lalala' + ages[i]);
            fullAges.push(false);
        }
    }

    return fullAges;
}

var full_1 = printFullAge(years);
var ful_2 = printFullAge([2012, 2024, 1915]);