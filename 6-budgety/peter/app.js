// CONTROLLER: add event handler
// UI: get input value
// DATA: add new item to data structure
// UI: add new item to the UI
// DATA: Calculate budget
// UI: Update the UI


// modules keep code separated, organized with privacy
// separation of concerns, no side effects
// data encasulation / API for exposing only a few public methods
// need to know closures and IIFEs (new scope)

// 77. Module Pattern
// this is an IIFE ---- (function(){ ... })(); ---- (new scope)


// DATA CONTROLLER
var budgetController = (function(){
    // private

    return {
        // public - still has access to parent's data, even though IIFE has returned (closure)
        publicTest: function() {
        }
    }
})();

// UI CONTROLLER
var UIController = (function () {

    var domStrings = {
        inputType: '.add_type',
        inputDescription: '.add__description',
        inputAmount: '.add__value',
        inputButton: '.add__button'
    };

    return {
        getDomStrings: function() {
            return domStrings;
        },
        getInput: function() {
            return {
                type: document.querySelector(domStrings.inputType).value,// inc or exp
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputAmount).value
            }
        }
    }

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var dom = UICtrl.getDomStrings();
        document.querySelector(dom.inputButton).addEventListener('click', ctrlAddItem);
        document.addEventListener('keyup', function(e){
            if (e.which === 13 || e.keyCode === 13 || e.key === 'Enter') {
                ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function() {
        // get input data
        var input = UICtrl.getInput();
        console.log(input);
        // add item to budget controller
        // add new item to UI
        // calculate budget
        // display budget in UI
    };


    return {
        public : function () {
        }
    }
})(budgetController, UIController);