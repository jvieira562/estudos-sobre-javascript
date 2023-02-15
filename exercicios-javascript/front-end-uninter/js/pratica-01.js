let botao = document.querySelector("#botao");
botao.style.background = "blue";
botao.style.color = "white"

let quebrado = false;
let totalClique = 0;

botao.addEventListener("mouseover", e => {
    if (!quebrado) {
        botao.style.background = "green";
    }
});

botao.addEventListener("mouseout", e => {
    if (!quebrado) {
        botao.style.background = "blue";
    }
});

botao.addEventListener("click", e => {
    totalClique++;
    console.log("Total de cliques: " + totalClique);

    if (totalClique == 10) {
        botao.innerHTML = "Quebrei :(";
        botao.style.background = "red";
        quebrado = true;
    }

});