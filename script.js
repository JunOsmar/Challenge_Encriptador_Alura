const input = document.getElementById("f_itxt");

const codificador = () => {
    const valor = input.value;
    const valorArray = valor.split('');

    const valorArrayCodificado = valorArray.map(caracter => {
        if (caracter === 'a') {
            return 'ai';
        }
        if (caracter === 'e') {
            return "enter";
        }
        if (caracter === 'i') {
            return 'imes';
        }
        if (caracter === 'o') {
            return 'ober';
        }
        if (caracter === 'u') {
            return 'ufat';
        }
        return caracter;
    });
    const textoCodificado = valorArrayCodificado.join('');
    const mostrarResultado = () => {
        const resultado = document.getElementById("mostrador").innerHTML = textoCodificado;
    }
    mostrarResultado();
}
const codificar = () => {
    codificador();
    const trocaMensagem = () => {
        const ocultarVazio = document.getElementById('nenhumTexto');
        const textoEncontrado = document.getElementById('textoEncontrado');
        ocultarVazio.className = "esconder";
        textoEncontrado.className = "mostrar";
    }
    trocaMensagem();
}


const decodificar = () => {
    const valor = input.value;
    const decodificador = (valor) => {
        return valor.replace(/ai/g, 'a')
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }
    const textoDecodificado = decodificador(valor);
    const mostrarResultado = () => {
        const resultado = document.getElementById("mostrador").innerHTML = textoDecodificado;
    }
    const trocaMensagem = () => {
        const ocultarVazio = document.getElementById('nenhumTexto');
        const textoEncontrado = document.getElementById('textoEncontrado');
        ocultarVazio.className = "esconder";
        textoEncontrado.className = "mostrar";
    }
    trocaMensagem();
    mostrarResultado();
}

const resetarPagina = () => {
    input.value = "";

    const trocaMensagem = () => {
        const ocultarVazio = document.getElementById('nenhumTexto');
        const textoEncontrado = document.getElementById('textoEncontrado');
        ocultarVazio.className = "mostrar";
        textoEncontrado.className = "esconder";
    }
    trocaMensagem();
}

const copiar = () => {
    const paragrafo = document.getElementById('mostrador');
    const textoACopiar = paragrafo.textContent;
    navigator.clipboard.writeText(textoACopiar);
    alert("Texto copiado!");
}