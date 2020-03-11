// Define variables
var output = document.getElementById('output');
var input = document.getElementById('age');

// The display function
function display(){
    output.innerHTML = input.value;
}
display();

// Event Listener so when the value changes in the text field, the h1 changes aswell
input.addEventListener("input", display);