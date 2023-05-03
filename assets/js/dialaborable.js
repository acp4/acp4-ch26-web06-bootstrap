function calcularDia() {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;
    const dias = {
        0: `Domingo`,
        1: `Lunes`,
        2: `Martes`,
        3: `Miercoles`,
        4: `Jueves`,
        5: `Viernes`,
        6: `Sabado`,
    }
        if(!dia || !mes || !anio){
            alert("Ingresa todos los datos");
            document.getElementById("resultado").innerHTML = " ";
        }else{
        let fecha = new Date(anio, mes - 1, dia);
        let diaSemana = fecha.getDay();
        let mensaje = "";

        if (mes == 2 && dia == 29) {
            if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
                mensaje = dias[diaSemana] + " es un día laborable en un año bisiesto.";
            } else {
                mensaje = " Año no bisiesto.";
            }
        } else {
            switch (diaSemana) {
                case 0:
                case 6:
                    mensaje = dias[diaSemana] + ", fue fin de semana.";
                    break;
                default:
                    mensaje = dias[diaSemana] + ", fue día laborable.";
                    break;
            }
        }
        document.getElementById("resultado").innerHTML = mensaje;
    }
}
