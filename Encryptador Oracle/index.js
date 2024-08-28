function encriptar() {
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");
    let mono = document.getElementById("mono");
    let textoEncriptado = document.getElementById("texto-encriptado");
    let btnCopiar = document.getElementById("btn-copiar");

    if (texto.length !== 0) {
        let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        document.getElementById("texto").value = "";
        parrafo.textContent = "";
        parrafo.style.visibility = "hidden"; // Oculta el mensaje de error si hay texto
        textoEncriptado.textContent = textoCifrado;
        textoEncriptado.classList.remove("hidden");
        btnCopiar.classList.remove("hidden");
        mono.style.display = "none"; // Oculta la imagen si hay texto
    } else {
        parrafo.textContent = "Debe ingresar un texto para encriptar.";
        parrafo.style.visibility = "visible";
        textoEncriptado.textContent = ""; 
        textoEncriptado.classList.add("hidden");
        btnCopiar.classList.add("hidden");
        mono.src = "img/encriptacion.jpg"; // Cambia a la imagen para indicar que no hay texto
        mono.style.display = "block"; // Muestra la imagen
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");
    let mono = document.getElementById("mono");
    let textoEncriptado = document.getElementById("texto-encriptado");
    let btnCopiar = document.getElementById("btn-copiar");

    if (texto.length !== 0) {
        let textoDescifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        document.getElementById("texto").value = "";
        parrafo.textContent = "";
        parrafo.style.visibility = "hidden";
        textoEncriptado.textContent = textoDescifrado;
        textoEncriptado.classList.remove("hidden");
        btnCopiar.classList.remove("hidden");
        mono.style.display = "none"; // Oculta la imagen si hay texto
    } else {
        parrafo.textContent = "Debe ingresar un texto para desencriptar.";
        parrafo.style.visibility = "visible";
        textoEncriptado.textContent = ""; 
        textoEncriptado.classList.add("hidden");
        btnCopiar.classList.add("hidden");
        mono.src = "img/desencriptarlos.png"; // Cambia a la imagen para indicar que no hay texto
        mono.style.display = "block"; // Muestra la imagen
    }
}

async function copiarTexto() {
    let textoEncriptado = document.getElementById("texto-encriptado").textContent;
    console.log("Texto a copiar:", textoEncriptado); // Verificar el contenido

    if (textoEncriptado.length > 0) {
        try {
            await navigator.clipboard.writeText(textoEncriptado);
            alert("Texto copiado al portapapeles!");
        } catch (err) {
            console.error('Error al copiar el texto:', err);
            alert("Falló la copia. Inténtalo manualmente.");
        }
    } else {
        alert("No hay texto para copiar.");
    }
}
