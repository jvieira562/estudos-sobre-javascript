/*11) Escreva um algoritmo para ler as dimensões de um quadrado, calcular e escrever a área do quadrado. */


do {
    var base = Number(prompt(" - Informe o valor da base em metros: "));
    var altura = Number(prompt(" - Informe o valor da altura em metros: "));

    alert(" A área do quadrado é " + (base * altura) + "m²");
    var deci = Number(prompt(" - Se deseja continuar digite (1) para sim e (2) para não: "));
}
while (deci == 1) {
    if (deci != 2 & 1) {
        alert(" - Sabe ler não caraio?")
    }
}

