let display = document.getElementById("display");

function calculate(input) {
    display.value += input;
}

function result() {
    try{
        display.value = eval(display.value);
    }
    catch(err) {
        display.value = "Error";
    }
}
function clearCalc() {
    display.value = '';
}
function del() {
    display.value = display.value.slice(0,-1);
}