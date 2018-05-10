// BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id,
        this.description = description,   
        this.value = value    
    };

    var Income = function(id, description, value){
        this.id = id,
        this.description = description,   
        this.value = value    
    };

    var data = {
        allItems: {
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0


        }
    };

    return{
        addItem: function(type, des, val){
            var newItem, ID;

            //Create a new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //Create a new item based on inc or exp type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            } 
            //Push into our data structure
            data.allItems[type].push(newItem);
            //return the new element
            return newItem;
        },

    testing: function(){
        console.log(data);
    }

    }

})();

//UI CONTROLLER
var UIController = (function(){
        var  DOMStrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue:'.add__value',
            inputBTN: '.add__btn'
        };
    return {
        getInput: function(){
            return{

            type: document.querySelector(DOMStrings.inputType).value,
            description: document.querySelector(DOMStrings.inputDescription).value,
            value: parseInt(document.querySelector(DOMStrings.inputValue).value)    
        
            }
        },

        getDOMStrings: function() {
            return DOMStrings;
            
        }
    }    
    //code

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCTRL, UICTRL){

    function setupEventListeners(){

        document.querySelector(DOM.inputBTN).addEventListener('click', ctrlAddItem);
   
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        })

    }
    var DOM = UIController.getDOMStrings();
    var ctrlAddItem = function(){
        var input, newItem;
        //get the field input data  
        input = UICTRL.getInput();
        console.log(input);

        //add the item to the budget controller
        newItem = budgetCTRL.addItem(input.type, input.description, input.value);
        // add the item to the UI
        //calculate the budget
        //display th ebudget on the UI
        console.log('funcionou nessa merda');

    };

    return{
        init: function(){
            console.log('Aplication iniciou');
            setupEventListeners();
        }
    }




})(budgetController, UIController);

controller.init();