

const botaoInput = document.getElementById("botaoInput");
const nomeForm = document.getElementById("nome");
const sobrenomeForm = document.getElementById("sobrenome");
const emailForm = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById("forms");
const erroLigar = document.getElementById("iconeErro");
var verificador = false;
var verifEmail = /\S+@\S+\.\S+/;




function ligarErros() {
    formulario.classList.remove("formulario");
    formulario.classList.add("formulario-red");
    erroLigar.classList.remove("imagemErroOff");
    erroLigar.classList.add("imagemErroOn");

}


function verificarNome() {
    if (document.getElementById("nome").value == "") {
        ligarErros();
        document.querySelector(".labelNomeOff").classList.add("labelNome");
        document.querySelector(".labelNomeOff").classList.remove("labelNomeOff");
        verificador = false;
    }
    else
        verificador = true;

}

function verificarSobrenome() {
    if (document.getElementById("sobrenome").value == "") {
        ligarErros()
        document.querySelector(".labelSobrenomeOff").classList.add("labelSobrenome");
        document.querySelector(".labelSobrenomeOff").classList.remove("labelSobrenomeOff");
        verificador = false;
    }
    else
        verificador = true;

}


function verificarEmailVazio() {
    if (document.getElementById("email").value == "") {
        ligarErros();
        document.querySelector(".labelEmailOff").classList.add("labelEmail");
        document.querySelector(".labelEmailOff").classList.remove("labelEmailOff");
        verificador = false;

    }
    else
        verificador = true;
}

function verificarSenha() {
    if ((senha).value == "") {
        ligarErros();
        document.querySelector(".labelSenhaOff").classList.add("labelSenha");
        document.querySelector(".labelSenhaOff").classList.remove("labelSenhaOff");
        verificador = false;
    }
    else
        verificador = true;
}


function resetarCor() {
    formulario.classList.remove("formulario-red");
    formulario.classList.add("formulario");
    erroLigar.classList.remove("imagemErroOn");
    erroLigar.classList.add("imagemErroOff");

}


botaoInput.addEventListener("click", () => {
    console.log('clicou');
    resetarCor();
    verificarNome();
    verificarSobrenome();
    verificarEmailVazio();
    verificarSenha();


    if (verificador == true) {
        window.location.href = "https://www.frontendmentor.io"

    };

})

