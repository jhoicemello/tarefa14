function positivos () {
    ler_entrada();
    maior();
    escrever_saida();
}

function ler_entrada(campo) {
    valor1 = parseFloat(document.getElementById('entrada1').value);
    valor2 = parseFloat(document.getElementById('entrada2').value);
}

function escrever_saida(campo, valor) {
    saida = document.getElementById('saida')
    

}

function maior() {
    if (valor1 > 0 && valor2 > 0) {
        saida.innerText = "True"
    }

    else {
        saida.innerText = "False"
    }
}