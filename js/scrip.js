// Juego simple de preguntas.

alert("¡ Bienvenido a quien quiere ser millonario !");

let respuesta1 = "amarillo";
let respuesta2 = "florencia";
let respuesta3 = "diana";
let respuesta4 = 2022;
let respuesta5 = "steven";
let saveCodigo = "2022";


function juego() {
    let nombreUsuario = prompt("Ingresa tu nombre");
    let ingresar = false;

// Ciclo para poner las vidas y vuelva a empezar.

    for (let i = 2; i >= 0; i--) {

        let codigoPromocional = prompt("ingresa el codigo unico promocional. Tenes " + (i + 1) + " intentos");
        if (saveCodigo === codigoPromocional) {
            alert("Hola " + nombreUsuario + " ¡Espero que estes preparado para jugar y ganar 1M de pesos!");
            alert("Recuerda que si respondes mal, vuelves a empezar :(")
            alert("¡Empezemos!")
            ingresar = true;
            break;
        } else {
            alert("Error. te quedan " + i + " intentos");
        }
    }
    return ingresar;
}

//Una vez que puso el codigo, va poder jugar. 

if (juego()) {
    for (let i = 2; i >= 0; i--) {
        let pregunta1 = prompt("¿ De que color son las letras de coder house?. Tenes " + (i + 1) + " intentos");
        if (pregunta1 == respuesta1) {
            alert("¡Correcto!");

            let pregunta2 = prompt("¿Como se llama la profesora?. Tenes " + (i + 1) + " intentos");
            if (pregunta2 == respuesta2) {
                alert("¡Correcto!");

                let pregunta3 = prompt("¿Como se llama mi tutora?. Tenes " + (i + 1) + " intentos");
                if (pregunta3 == respuesta3) {
                    alert("¡Correcto!");

                    let pregunta4 = prompt("¿En que año estamos? Tenes " + (i + 1) + " intentos");
                    if (pregunta4 == respuesta4) {
                        alert("¡Correcto!");

                        let pregunta5 = prompt("¿Cual es nombre del dueño de este codigo? Tenes " + (i + 1) + " intentos")
                        if (pregunta5 == respuesta5) {
                            alert("¡Correcto!");
                            alert("¡Ganaste! " + "¡Felicidades!")
                            break;
                        } else {
                            alert("Respuesta incorrecta. Te queda " + i + " intentos");
                        }


                    } else {
                        alert("Respuesta incorrecta. Te queda " + i + " intentos");
                    }


                } else {
                    alert("Respuesta incorrecta. Te queda " + i + " intentos");
                }



            } else {
                alert("Respuesta incorrecta. Te queda " + i + " intentos");
            }



        } else {
            alert("Respuesta incorrecta. Te queda " + i + " intentos");
        }

    }
} else {
    alert("Alcanzaste el numero maximo de intentos. Por favor, obtene el codigo comprando el producto")
}


alert("Hasta luego :)");
