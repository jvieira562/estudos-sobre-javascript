const fieldOne = document.querySelector("#fieldOne");
const fieldTwo = document.querySelector("#fieldTwo");
const operation = document.querySelector("#operation");
let result = document.querySelector("#result");

//const button = document.querySelector("#button");
//button.addEventListener("click", calculate);

operation.addEventListener("change", calculate);
fieldOne.addEventListener("keyup", calculate);
fieldTwo.addEventListener("keyup", calculate);

function calculate() {
    const valueOne = parseFloat(fieldOne.value);
    const valueTwo = parseFloat(fieldTwo.value);


    const operationOption = operation.value;
    console.clear;
    console.log(operationOption)

    if (fieldOne.value != "" && fieldTwo.value != "") {

        /*  result.innerHTML = "Informe um valor valido!";
            setTimeout(() => {
            result.innerHTML = ""
            }, 3000);
    
            } else {
        */

        if (operationOption === "+") {

            result.innerHTML = (valueOne) + (valueTwo);

        }
        else if (operationOption === "-") {

            result.innerHTML = (valueOne) - (valueTwo);
        }
        else if (operationOption === "*") {

            result.innerHTML = (valueOne) * (valueTwo);
        }
        else {

            result.innerHTML = (valueOne) / (valueTwo);
        }
    }
}