// Define variables
var output = document.getElementById('output');
var input = document.getElementById('age');

// The display function
function display(){
    var x = 3;
    var y = 2;

    // Checking if number is less than 25 or equal to and above 25
    var age = input.value;
    if(age < 25){
        var newAge = age * x;
    }
    else {
        var newAge = age / y;
    }

    output.innerHTML = newAge;
}
display();

// Event Listener so when the value changes in the text field, the h1 changes aswell
input.addEventListener("input", display);