var submit = document.querySelector('input[type="submit"]');

function validateForm() {
    var firstName = document.getElementById('fName');
    var lastName = document.getElementById('LName');
    var age = document.getElementById('age');
    var mobile = document.getElementById('num').value;

    if (firstName.value === "" || lastName.value === "" || age.value === "" || mobile.value === "") {
        alert("You need to fill in the form!");
    };


    if (isNaN(age.value)) {
        alert("You need to input a number as age!")
    }

    if (age.value < 13 || age.value > 85) {
        alert("You have to be between 13 and 85 years old")
    };

    if (mobile.length < 7) {
        alert("Your number must be at least 7 digits long")

    };
}

submit.addEventListener("click", validateForm);