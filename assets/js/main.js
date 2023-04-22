console.log("Hola desde un script externo");

function changeColorTo(color) {
    const refName = document.getElementById("name");
    refName.style.color = color;
}
function ChangecolorParagraph(color, refObj) {
    console.log(refObj)
    refObj.style.color = color;
}
function resetColors() {
    const refObjs = document.getElementsByClassName("text-color");
    console.log(refObjs);
    for (let i = 0; i < refObjs.length; i++) {
        const element = refObjs[i];
        element.style.color = "purple";

    }
}
console.log("sesion web1");
function changeGreeting() {
    // obtener nombre cliente
    const clientName = getnameOfClient();
    // obenter referencia del label h1
    const greetingReference = getReferenceOfIdGreeting();

    // cambiar el saludo
    greetingReference.innerHTML = "Hola " + clientName;
}

function getnameOfClient() {
    const clientName = prompt("Escribe tu nombre");
    return clientName;

}

function getReferenceOfIdGreeting() {
    return document.getElementById("greeting");
}