const incrementa = document.getElementById("incrementamas-btn");
const disminuye = document.getElementById("incrementamenos-btn");
const empieza = document.getElementById("empieza-btn");
const termina = document.getElementById("termina-btn");
const repite = document.getElementById("repetir-btn");
const resultado = document.getElementById("resultado");
let min = 1;
let max = 100;
let num = 0;


function busquedaBinaria() {
    num = parseInt((min + max) / 2);
    document.getElementById("resultado").innerHTML = `¿Estás pensando en el número ${num}?`;

}

function disminuyeM() {
    max = num - 1;
    busquedaBinaria();
};

 function incrementaM() {
    min = num + 1;
    busquedaBinaria();
};

function empiezaY() {
    incrementa.removeAttribute("class");
    disminuye.removeAttribute("class");
    termina.removeAttribute("class");
    incrementa.setAttribute("class", "col-lg-2 col-md-3 col-sm-5 btn btn-dark btn-lg");
    disminuye.setAttribute("class", "col-lg-2 col-md-3 col-sm-5 btn btn-dark btn-lg");
    termina.setAttribute("class", "col-lg-2 col-md-3 col-sm-5 btn btn-dark btn-lg");
    empieza.setAttribute("class", "hide");
    busquedaBinaria();
};
 function terminaY() {
    document.getElementById("frase").innerHTML = `¡He ganado! estabas pensando en el ${num}`;
    repite.removeAttribute("class");
    repite.setAttribute("class", "col-lg-2 col-md-3 col-sm-5 btn btn-dark btn-lg");
    incrementa.setAttribute("class", "hide");
    disminuye.setAttribute("class", "hide");
    termina.setAttribute("class", "hide");
    empieza.setAttribute("class", "hide");
    resultado.setAttribute("class", "hide");
};

function repiteY() {
    location.reload();

};