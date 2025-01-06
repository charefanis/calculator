const display = document.querySelector(".display");
let isSolution = false;

function appendToDisplay(input) {
    if (isSolution) {
        if (!isNaN(input)) {
            display.value = "";
        }
        isSolution = false;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    isSolution = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        isSolution = true;
    } catch (error) {
        display.value = "Error";
        isSolution = true;
    }
}
