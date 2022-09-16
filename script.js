let  calculator_input_Number_V = document.getElementById('calculator-input-Number');
let calculator_input_Number_previews_v = document.getElementById('calculator-input-Number-Previews');

let calculator_input_AC_V = document.getElementById('Calculator-input-AC');

let DisplayValue;

console.log('calculator_input_Number_V', calculator_input_Number_V);

function display(DisplayValue) {
    calculator_input_Number_V.value+=DisplayValue;
}

calculator_input_AC_V.addEventListener('click', () => {
    calculator_input_Number_V.value="";
    calculator_input_Number_previews_v.value="";
})

function displaySolve() {
    let eq = calculator_input_Number_V.value;

    calculator_input_Number_previews_v.value = eq;

    let y = eval(eq);

    calculator_input_Number_V.value = y;
}