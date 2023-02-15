/*Exemplo de decisão encadeada

O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. 
É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
*/



var imc;

alert("\n - Use pontos (.) em vez de virgulas (,) para um melhor funcionamento do código.")

var peso = Number (prompt(" - Informe seu peso em Kg: "));
var altura = Number (prompt(" - Informe seua altura em metros: "));

imc = (peso / (altura * altura));

alert("\n - Seu IMC é " + imc);


if (imc < 18.5) {

    document.getElementById("demo").innerHTML = "Abaixo do Peso!";

} else if ((imc >= 18.5) && (imc < 25)) {

    document.getElementById("demo").innerHTML = "Peso Normal";

} else if ((imc >= 25) && (imc < 30)) {

    document.getElementById("demo").innerHTML = "Sobrepeso";

}

else if ((imc >= 30) && (imc < 35)) {

    document.getElementById("demo").innerHTML = "Obesidade Grau I";

}

else if (imc >= 35 && imc < 40) {

    document.getElementById("demo").innerHTML = "Obesidade Grau II";

}

else {

    document.getElementById("demo").innerHTML = "Obesidade Grau III ou Mórbida";

}