
let opcion;
function iniciarSimulador() {
    alert("Bienvenido a mi página.\nMi nombre es Brandon Cruces.\nSoy entrenador personal 💪");

    do {
        opcion = prompt(
            "¿En qué puedo ayudarte?\n\n" +
            "1. Calcular tu IMC (Índice de Masa Corporal)\n" +
            "2. Ver consejos generales de entrenamiento\n" +
            "3. Salir"
        );

        switch (opcion) {
            case "1":
                calcularIMC();
                break;
            case "2":
                mostrarConsejos();
                break;
            case "3":
                alert("Gracias por visitar mi página. ¡Nos vemos pronto!");
                break;
            default:
                alert("Opción no válida. Por favor, elegí 1, 2 o 3.");
        }
    } while (opcion !== "3");
}


function pedirNombre() {
    let nombre;
    do {
        nombre = prompt("Ingresá tu nombre:");
        if (!nombre) {
            alert("Por favor ingresá un nombre válido (solo letras).");
        }
    } while (!nombre || !/^[a-zA-Z\s]+$/.test(nombre));
    return nombre.trim();
}

// función para validar números (edad, peso, altura)
function pedirNumero(mensaje) {
    let valor;
    do {
        valor = prompt(mensaje);
        if (isNaN(valor) || valor === "" || valor <= 0) {
            alert("Ingresá un número válido mayor que 0.");
        }
    } while (isNaN(valor) || valor === "" || valor <= 0);
    return parseFloat(valor);
}

// función para calcular IMC
function calcularIMC() {
    const nombre = pedirNombre();
    const edad = pedirNumero("Ingresá tu edad:");
    const peso = pedirNumero("Ingresá tu peso en kg:");
    const altura = pedirNumero("Ingresá tu altura en metros (por ejemplo, 1.75):");

    const imc = (peso / (altura * altura)).toFixed(2);

    console.log(`Usuario: ${nombre}, Edad: ${edad}, Peso: ${peso}kg, Altura: ${altura}m, IMC: ${imc}`);

    let mensaje = "";
    if (imc < 18.5) {
        mensaje = "Bajo peso ";
    } else if (imc < 25) {
        mensaje = "Peso saludable ";
    } else if (imc < 30) {
        mensaje = "Sobrepeso ";
    } else {
        mensaje = "Obesidad ";
    }

    alert(`${nombre}, tu IMC es ${imc}.\nCategoría: ${mensaje}`);
}


function mostrarConsejos() {
    const consejos = [
        "1️⃣ Dormí al menos 7-8 horas por noche para una buena recuperación.",
        "2️⃣ Mantené una buena hidratación durante todo el día.",
        "3️⃣ No entrenes todos los días con la misma intensidad: alterná fuerza y descanso activo.",
        "4️⃣ Controlá tu técnica antes de aumentar el peso.",
        "5️⃣ La constancia vale más que la perfección.",
        "6️⃣ Comé proteínas en cada comida para favorecer la ganancia muscular.",
        "7️⃣ No te olvides del calentamiento y estiramiento post-entrenamiento."
    ];

    console.log("Consejos generales de entrenamiento:");
    consejos.forEach(consejo => console.log(consejo));

    let texto = " Consejos generales de entrenamiento:\n\n" + consejos.join("\n");
    alert(texto);
}
