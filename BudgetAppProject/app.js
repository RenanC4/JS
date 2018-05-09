// BUDGET CONTROLLER
var budgetController = (function(){

    var expense = function(id, description, value){
        this.id = id,
        this.description = description,   
        this.value = value    
    };

    var income = function(id, description, value){
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
        //get the field input data  
        var input = UICTRL.getInput();
        console.log(input);

        //add the item to the budget controller
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