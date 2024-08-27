const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

textArea.addEventListener("input", () => {
    textArea.value = filtrarTexto(textArea.value);
    desabilitarBotoes(textArea.value);
});

function botaoEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

    if (mensagem.value !== "") {
        mensagem.style.backgroundImage = "none";
    }
}

function filtrarTexto(texto) {
    const textoSemAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return textoSemAcentos.toLowerCase().replace(/[^a-z., ]/g, "");
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;

}

function botaoDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

    if (mensagem.value !== "") {
        mensagem.style.backgroundImage = "none";
    }
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarTexto() {
    navigator.clipboard.writeText(mensagem.value);
}

function desabilitarBotoes(texto) {
    const acentosEncontrados = /[\u0300-\u036f]/.test(texto);
    document.querySelector("#botaoEncriptar").disabled = acentosEncontrados;
    document.querySelector("#botaoDesencriptar").disabled = acentosEncontrados;
}


    

