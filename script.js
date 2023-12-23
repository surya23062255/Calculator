const display = document.getElementById("display");

const val = (input) => {
    display.value += input;
}

const clr = () => {
    display.value = '';
}

const calculate = () => {
    display.value = eval(display.value)
}

const del = () => {
    display.value = display.value.toString().slice(0, -1);
}