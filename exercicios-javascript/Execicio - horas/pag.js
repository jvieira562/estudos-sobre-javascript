if (new Date().getHours() < 18 & new Date.getHours() > 12) {

    document.getElementById("id").innerHTML = ("Boa tarde!");
}

else if (new Date().getHours() < 12 & new Date.getHours() > 4) {

    document.getElementById("id").innerHTML = ("Boa tarde!");
}

else {

    document.getElementById("id").innerHTML = ("Boa noite !");
}